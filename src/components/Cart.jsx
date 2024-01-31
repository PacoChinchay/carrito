import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';


function CartItem ({thumbnail, price, title, quantity, addCart})  {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>

        <footer>
          <small>Qty: {quantity}</small>
          <button onClick={addCart}>+</button>
        </footer>
      </li>
    );
}

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addCart } = useCart()


    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxId} hidden />
            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                        addCart={() => addCart(product)}
                        key={product.id}
                        {...product} />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}