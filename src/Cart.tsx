import { ShoppingCartIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn-ui/components/ui/dropdown-menu";
import { Button } from "./shadcn-ui/components/ui/button";
import { CartItem } from "./CartItem";
import { useMemo } from "react";

export function Cart({ items }) {
  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-2 relative" size="icon" variant="outline">
          <ShoppingCartIcon className="h-6 w-6 text-primary" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
            {items.length}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid gap-4 max-h-[400px] overflow-y-auto">
          {items.length > 0 ? items.map((item) => (
            <CartItem
              key={`item-${item.title}`}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          )) : (
            <div className="text-center text-gray-500 py-4">No items in cart</div>
          )}
        </div>
        <DropdownMenuSeparator />
        <div className="grid gap-2 px-4 py-2">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal}</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
