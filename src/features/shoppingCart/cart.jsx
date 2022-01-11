import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector, totalSelector } from "./cartSlice";
import CartList from "../../components/cartList";
const Cart = () => {
  const cart = useSelector(cartSelector);
  const itemQuantities = cart.map((item) => item.quantity);
  const cartItems = itemQuantities.reduce((a, b) => a + b, 0);
  const [displayBool, setDisplayBool] = useState(false);

  const handleClick = () => {
    setDisplayBool((prev) => (prev = !displayBool));
  };

  useEffect(() => {
    console.log(cart, cartItems);
  }, [cart]);

  return (
    <div className="cart">
      <p>My Cart</p>
      <div className="cart-icons-div">
        <span>{cartItems}</span>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="55"
          viewBox="0 0 24 24"
        >
          <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
        </svg>
        <CartList displayBool={displayBool} cart={cart} />
      </div>
    </div>
  );
};
export default Cart;
