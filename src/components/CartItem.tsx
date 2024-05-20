export function CartItem({ title, price, image }) {
  return (
    <div className="flex items-center gap-4 p-2">
      <div className="rounded-md max-w-14 max-h-14">
        <img
          alt="cart product image"
          className="aspect-square object-contain w-full h-full"
          src={image}
        />
      </div>
      <div className="grid gap-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-gray-500">${price}</p>
      </div>
    </div>
  );
}
