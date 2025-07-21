import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  function addDeleteItems(btnValue) {
    dispatch(
      cartActions.updateQuantity({ quantity: btnValue, name: item.name })
    );
  }

  function deleteProduct() {
    dispatch(cartActions.removeProduct({ name: item.name }));
  }
  return (
    <div className={classes.cartItemContainer}>
      <div className={classes.cartItemDetails}>
        <div className={classes.cartInfo}>
          <h2>{item.name}</h2>
          <h3>{item.description}</h3>
        </div>

        <div className={classes.quantityActions}>
          <p className={classes.cartItemQuantity}>Quantity: {item.quantity}</p>
          <button onClick={() => addDeleteItems(-1)}>
            <FaMinus size={16} />
          </button>
          <button onClick={() => addDeleteItems(+1)}>
            <FaPlus size={16} />
          </button>
        </div>
      </div>
      <button
        onClick={() => deleteProduct(item.name)}
        className={classes.deleteItemButton}
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
}

export default CartItem;
