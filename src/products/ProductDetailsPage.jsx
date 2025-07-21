import classes from "./ProductDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { products } from "../products/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartStore/CartSlice.js";
import { useState } from "react";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartState);
  const selectedProduct = products.find((prod) => prod.name === name);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(
    checkIfItemIsInCart()
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  function checkIfItemIsInCart() {
    const itemInCart = cartData.find(
      (item) => item.name === selectedProduct.name
    );
    return itemInCart ? itemInCart.quantity : 0;
  }

  const handleAddDeleteProduct = (btnValue) => {
    setSelectedProductQuantity((prevQuantity) => prevQuantity + btnValue);
  };

  const handleAddToCart = () => {
    dispatch(
      cartActions.updateCartValue({
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.longDescription,
      })
    );
    dispatch(
      cartActions.updateQuantity({
        quantity: selectedProductQuantity,
        name: selectedProduct.name,
      })
    );
  };

  return (
    <>
      <div className={classes.productDetailsContainer}>
        <div className={classes.productCard}>
          <div className={classes.productImagePlaceholder}>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x300/E0E0E0/6B7280?text=Image+Not+Found";
              }}
            />
          </div>

          <div className={classes.productDetails}>
            <h1 className={classes.productName}>{selectedProduct.name}</h1>

            <p className={classes.productPrice}>
              $ {selectedProduct.price.toFixed(2)}
            </p>
            <p className={classes.taxInfo}>all prices incl. 10% taxes</p>

            <div className={classes.quantitySelector}>
              <button
                onClick={() => handleAddDeleteProduct(-1)}
                className={classes.quantityButton}
                disabled={selectedProductQuantity == 0}
              >
                -
              </button>
              <span className={classes.quantityDisplay}>
                {selectedProductQuantity}
              </span>
              <button
                onClick={() => handleAddDeleteProduct(1)}
                className={classes.quantityButton}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={classes.addToCartButton}
              disabled={selectedProductQuantity == 0}
            >
              ADD TO CART
            </button>

            <div className={classes.descriptionSection}>
              <h2 className={classes.descriptionTitle}>DESCRIPTION</h2>
              <p className={classes.descriptionText}>
                {selectedProduct.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
