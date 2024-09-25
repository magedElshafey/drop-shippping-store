import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  isCartOpen: false,
};
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    // add to cart
    addToCart: (state, action) => {
      //find if the item is already on the cart.
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if the item is found in the cart
      if (index >= 0) {
        return state;
      }
      const temp = { ...action.payload };
      state.cartItems.push(temp);
      //Store the item in local storage to be reviewed later.
    },
    // remove from cart :
    removeFromCart: (state, action) => {
      //filter the list of items, we don't have to worry about the item not being in the cart as it wouldn't raise any errors if not.
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const selectTotalPrice = (state) => {
  return state.cart.cartItems.reduce((acc, product) => {
    const discount = Number.isNaN(parseInt(product.discount_price))
      ? 0
      : parseInt(product.discount_price);
    const price = parseInt(product.price) - discount;
    return acc + price;
  }, 0);
};

export const selectTotalPriceWithoutDiscount = (state) => {
  return state.cart.cartItems.reduce((acc, product) => {
    const price = parseInt(product.price);
    return acc + price;
  }, 0);
};
export const { openCart, closeCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const cartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
