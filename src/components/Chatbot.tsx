import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your shopping assistant. I can help you find products, apply coupons, or answer any questions about your order. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const predefinedResponses: Record<string, string> = {
    "what items are available": "We have a wide range of products including groceries (milk, biscuits, chips) and clothing items (t-shirts, jeans, sneakers). You can browse all items on our homepage or use the search feature to find specific products.",
    "how do i apply coupons": "You can apply reward points as coupons during checkout! Every dollar you spend earns you 10 reward points. You can then use these points for discounts - 100 points = $1 off your order.",
    "reward points": "Reward points are earned with every purchase - 10 points per dollar spent! You can use these points as discounts on future orders. Check your cart to see how many points you'll earn and apply existing points.",
    "shipping": "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days, and express delivery is available for $9.99 (1-2 business days).",
    "return policy": "We offer a 30-day return policy on all items. Items must be in original condition with tags attached for clothing, and unopened for grocery items.",
    "payment methods": "We accept all major credit cards, PayPal, and digital wallets like Apple Pay and Google Pay.",
    "help": "I can help you with: finding products, understanding reward points and coupons, shipping information, returns, payment methods, and general shopping questions. Just ask me anything!"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Find matching response
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerMessage)) {
        return response;
      }
    }
    
    // Check for specific keywords
    if (lowerMessage.includes('coupon') || lowerMessage.includes('discount')) {
      return predefinedResponses["how do i apply coupons"];
    }
    
    if (lowerMessage.includes('product') || lowerMessage.includes('item') || lowerMessage.includes('shop')) {
      return predefinedResponses["what items are available"];
    }
    
    if (lowerMessage.includes('point')) {
      return predefinedResponses["reward points"];
    }
    
    // Default response
    return "I'd be happy to help! I can assist you with finding products, understanding our reward points system, applying coupons, shipping information, and more. Could you please be more specific about what you'd like to know?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Widget */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-gradient-secondary shadow-primary hover:shadow-hover z-40"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 z-50">
          <Card className="h-full shadow-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-lg">Shopping Assistant</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex flex-col h-full pb-4">
              {/* Messages */}
              <ScrollArea className="flex-1 pr-4 mb-4">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.isBot
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="sm" disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;