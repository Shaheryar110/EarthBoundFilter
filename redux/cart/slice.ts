import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CartItemType = {
  productId: string;
  price: number;
  quantity: number;
  size: string;
  rating?: number;
  name: string;
  imageUrl: string;
};

export type CartSliceType = {
  items: CartItemType[];
};

export const cartSliceIntialState: CartSliceType = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartSliceIntialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      const existingItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId,
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{productId: string; quantity: number}>,
    ) => {
      const itemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId,
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = Math.max(action.payload.quantity, 1); // Ensure quantity is at least 1
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
