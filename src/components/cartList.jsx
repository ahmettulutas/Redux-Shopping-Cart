import { useSelector, useDispatch } from "react-redux";
import ButtonSection from "./buttonSection";
import { totalSelector } from "../features/shoppingCart/cartSlice";
import photo from "../assets/empty-cart";
const CartList = ({ displayBool, cart }) => {
  const total = useSelector(totalSelector);
  if (cart.length > 0) {
    return (
      <div className={displayBool ? "cartlist-shown" : "cartlist-hidden"}>
        {cart.map((item) => (
          <div className="cartlist-item">
            <img alt={item.name} src={item.image}></img>
            <div className="cartlist-item-textdiv">
              <p>{item.name}</p>
              <div className="product-details-div">
                <p>Amount : {item.quantity}</p>
                <p>Price : {item.price * item.quantity} $</p>
              </div>
            </div>
            <ButtonSection item={item} />
          </div>
        ))}
        <p className="cartlist-total-p">Total Price = {total}</p>
      </div>
    );
  } else {
    return (
      <div className={displayBool ? "cartlist-shown" : "cartlist-hidden"}>
        <img alt="empty-cart" src={photo}></img>
        <h1>Your Cart is Empty!</h1>
      </div>
    );
  }
};

export default CartList;
