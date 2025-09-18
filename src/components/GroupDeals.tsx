import { useState } from "react";
import { ChevronDown, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Product } from "@/components/ProductCard";

interface GroupDealsProps {
  onAddToCart: (product: Product) => void;
}

const GroupDeals = ({ onAddToCart }: GroupDealsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Select specific items for group deals
  const groupDealsItems = [
    // 4 grocery items
    products.find(p => p.id === '1'), // Fresh Whole Milk
    products.find(p => p.id === '2'), // Premium Butter Biscuits
    products.find(p => p.id === '8'), // Fresh Bread Loaf
    products.find(p => p.id === '9'), // Organic Apples
    // 3 clothing items
    products.find(p => p.id === '4'), // Cotton Casual T-Shirt
    products.find(p => p.id === '5'), // Classic Blue Jeans
    products.find(p => p.id === '6'), // Athletic Sneakers
    // 1 automobile
    products.find(p => p.id === '20'), // Electric Scooter
  ].filter(Boolean) as Product[];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Tag className="h-4 w-4" />
        <span className="hidden md:inline">Group Deals</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-96 bg-background border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            <div className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                Group Deals - Special Offers
              </h3>
              
              <div className="space-y-3">
                {groupDealsItems.map((product) => (
                  <Card key={product.id} className="p-3">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{product.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-primary">
                              ${product.discount ? 
                                (product.price * (1 - product.discount / 100)).toFixed(2) : 
                                product.price.toFixed(2)
                              }
                            </span>
                            {product.discount && (
                              <>
                                <span className="text-xs text-muted-foreground line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                                <Badge variant="destructive" className="text-xs px-1 py-0">
                                  -{product.discount}%
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => {
                            onAddToCart(product);
                            setIsOpen(false);
                          }}
                          className="text-xs px-2 py-1 h-auto"
                        >
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GroupDeals;