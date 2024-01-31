import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addCart = (product) =>
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          });

    const removeFromCart = (product) =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
          });

    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    return {state, addCart, removeFromCart, clearCart}
}

export function CartProvider ({children}) {

    const {state, addCart, removeFromCart, clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}