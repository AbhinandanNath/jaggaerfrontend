import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];
const defaultCartData = {
  name: "",
  description: "",
  quantity: 0,
  total: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartInitialState,
  reducers: {
    updateCartValue(state, actions) {
      let { payload } = actions;
      let { name, price, description } = payload;

      const existingItem = state.find((item) => item.name === name);
      if (!existingItem) {
        let stateObj = {
          ...defaultCartData,
          name: name,
          price: price,
          description: description,
        };
        state.push(stateObj);
      }
    },
    updateQuantity(state, actions) {
      let { payload } = actions;
      const item = state.find((item) => item.name === payload.name);

      if (item) {
        // Update the item's quantity and total
        item.quantity += payload.quantity;
        item.total = item.quantity * item.price;

        // If quantity becomes 0, reset the item to defaultCartData
        if (item.quantity <= 0) {
          const index = state.findIndex(
            (cartItem) => cartItem.name === payload.name
          );
          if (index !== -1) {
            state.splice(index, 1); // Remove the item from the array
          }
        }
      }
    },
    clearCart() {
      return cartInitialState;
    },
    removeProduct(state, actions) {
      const { name } = actions.payload;
      const index = state.findIndex((item) => item.name === name);
      if (index !== -1) {
        state.splice(index, 1); // Remove the item from the cart
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
