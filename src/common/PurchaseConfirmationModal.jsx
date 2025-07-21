import classes from "./PurchaseConfirmationModal.module.css";

const PurchaseConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modalContent}>
        <h2 className={classes.modalTitle}>Purchase Confirmation</h2>
        <p className={classes.modalBody}>
          Thank you for your purchase! Your order has been successfully placed.
          A confirmation email has been sent to your inbox with the details of
          your order. We hope to serve you again soon!
        </p>
        <div className={classes.modalActions}>
          <button className={classes.cancelButton} onClick={() => onClose()}>
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmationModal;
