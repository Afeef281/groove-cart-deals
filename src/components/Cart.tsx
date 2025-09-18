import { useState } from "react";
import { X, Plus, Minus, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  rewardPoints: number;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, rewardPoints }: CartProps) => {
  const [appliedPoints, setAppliedPoints] = useState(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => {
    const itemPrice = item.discount 
      ? item.price - (item.price * item.discount / 100)
      : item.price;
    return sum + (itemPrice * item.quantity);
  }, 0);

  const pointsDiscount = appliedPoints * 0.01; // 1 point = $0.01
  const total = Math.max(0, subtotal - pointsDiscount);
  const pointsEarned = Math.floor(total * 10); // 10 points per dollar

  const applyPoints = () => {
    const maxApplicable = Math.min(rewardPoints, Math.floor(subtotal * 100));
    setAppliedPoints(maxApplicable);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-background w-full max-w-md h-full overflow-y-auto shadow-hover">
        <Card className="rounded-none h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl">Shopping Cart</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Button onClick={onClose} variant="outline">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 space-y-4 mb-6">
                  {items.map((item) => {
                    const itemPrice = item.discount 
                      ? item.price - (item.price * item.discount / 100)
                      : item.price;

                    return (
                      <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-semibold text-price">
                              ${itemPrice.toFixed(2)}
                            </span>
                            {item.discount && (
                              <Badge variant="destructive" className="text-xs">
                                {item.discount}% OFF
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemoveItem(item.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Reward Points Section */}
                <div className="bg-success-light p-4 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-4 w-4 text-success" />
                    <span className="font-medium text-success">Reward Points</span>
                  </div>
                  <p className="text-sm text-success mb-3">
                    Available: {rewardPoints} points (${(rewardPoints * 0.01).toFixed(2)})
                  </p>
                  
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Points to apply"
                      max={Math.min(rewardPoints, Math.floor(subtotal * 100))}
                      value={appliedPoints || ''}
                      onChange={(e) => setAppliedPoints(Number(e.target.value) || 0)}
                      className="flex-1"
                    />
                    <Button onClick={applyPoints} variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-muted p-4 rounded-lg space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {appliedPoints > 0 && (
                    <div className="flex justify-between text-sm text-success">
                      <span>Points Discount:</span>
                      <span>-${pointsDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-price">${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-success">
                    <span>Points to earn:</span>
                    <span>{pointsEarned} points</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full bg-gradient-primary shadow-primary" size="lg">
                  Proceed to Checkout
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;