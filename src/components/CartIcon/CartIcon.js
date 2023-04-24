import { useContext } from "react";

// import Cart from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import { CartContext } from "../../context/Cart";

import "./CartIcon.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
