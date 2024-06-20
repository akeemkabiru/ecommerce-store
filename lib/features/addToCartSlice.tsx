import { actionProps } from "./accountSlice";

type cartTypes = {
  cart: {
    productID: string;
    title: string;
    description: string;
    price: number;
  }[];
};

const cartInitialState: cartTypes = {
  cart: [],
};

export const addToCartReducer = (
  state = cartInitialState,
  action: actionProps
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, product: [...state.cart, action.payload] };
    default:
      return state;
  }
};
