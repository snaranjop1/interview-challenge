# Frontend Coding Challenge

Welcome to this cool coding challenge. The objective of this challenge is to complete the different tasks described below and make the app work as expected.

Here we have a small and simpe e-commerce app. The app consist of a simple list of store items and a shopping cart. The app is divided in the following components/files.
![alt text](image.png)

## How to run the app
```bash
pnpm install
pnpm run dev
```

## How app should work

![alt text](result.gif)

## Tasks

- [ ] There are some typescript bad practices in components ItemCard, Cart and CartItem please fix them.
- [ ] Make the necessary changes to allow the app to add AND remove items to the cart but you can't change anything in the `Cart.tsx` component. Cart can't have more than 10 items and you can't add the same item twice. The "Add to Cart" button should only be displayed if the item is not on the team. Otherwise, the "Remove from Cart" button should be displayed.
- [ ] Currently the list of characters come from a static file. Now they should be fetched from [Fake Store API](https://fakestoreapi.com/docs) specifically from `https://fakestoreapi.com/products`endpoint. Please fetch the first 30 by using the `limit` URL param. You can use fetch API or axios.
- [ ] Subtotal is not changing when you items to the cart please fix it.
