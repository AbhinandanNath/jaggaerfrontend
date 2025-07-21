import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CartButton() {
  const cartData = useSelector((state) => state.cartState);
  const navigate = useNavigate();

  function calculateTotalItems() {
    return cartData.reduce((total, item) => total + item.quantity, 0);
  }
  const totalItems = calculateTotalItems();
  return (
    <div className={classes.cartButtonConatiner}>
      <FaShoppingCart
        size={20}
        className={classes.cartButton}
        onClick={() => navigate("/cart")}
      />
      <span className={classes.cartButtonBadge}>{totalItems}</span>
    </div>
  );
}

export default CartButton;
