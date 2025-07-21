import CartItem from "./CartItem";
import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/CartStore/CartSlice";
import { useDispatch } from "react-redux";
import PurchaseConfirmationModal from "../../common/PurchaseConfirmationModal";
import { useState } from "react";
import { useNavigate } from "react-router";

function CartPage() {
  const cartState = useSelector((state) => state.cartState);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = Object.values(cartState).filter(
    (item) => item.quantity > 0
  );

  const calculateTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const handlePurchase = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    dispatch(cartActions.clearCart());
    navigate("/");
  };

  return (
    <>
      <div className={classes.cartContainer}>
        <div className={classes.cartSection}>
          <h1 className={classes.cartTitle}>Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className={classes.emptyCartMessage}>Your cart is empty.</p>
          ) : (
            <div className={classes.cartItemsList}>
              {cartItems.map((item, index) => (
                <CartItem key={item.name + index} item={item} />
              ))}
              <div className={classes.totalSection}>
                <span className={classes.totalText}>
                  Total: ${calculateTotal()}
                </span>
              </div>
              <div className={classes.cartButtoncontainer}>
                <button
                  onClick={handlePurchase}
                  className={classes.purchaseButton}
                  disabled={cartItems.length === 0}
                >
                  PURCHASE
                </button>
                <button
                  onClick={handleClearCart}
                  className={classes.clearCartButton}
                  disabled={cartItems.length === 0}
                >
                  Clear the cart
                </button>
              </div>
            </div>
          )}
          <PurchaseConfirmationModal
            isOpen={showConfirmationModal}
            onClose={handleCloseModal}
            totalPrice={calculateTotal()}
          />
        </div>
      </div>
    </>
  );
}

export default CartPage;
