import { Button } from "@/shadcn-ui/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export function ItemCard({ id, title, image, price, itemInCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        alt={`Product ${id}`}
        className="w-full h-48 object-contain"
        height={300}
        src={image}
        style={{
          aspectRatio: "400/300",
        }}
        width={400}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <p className="text-gray-500 mb-4">${price}</p>
        <Button className="w-full">
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button className="w-full" variant="destructive">
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}
