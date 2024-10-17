import { ShoppingCartIcon } from "lucide-react";
import { Cart } from "./Cart";
import { mockItems } from "./items";
import { ItemCard } from "./ItemCard";
import { Item } from "./types";

function App() {
  const itemsList: Item[] = mockItems;
  return (
    <div className="min-h-full">
      <header className="flex items-center justify-between bg-foreground px-6 py-4 text-primary-foreground gap-2">
        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="font-bold text-lg">DStore</span>
        </div>
        <Cart items={[]} />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {itemsList.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            itemInCart={false}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
