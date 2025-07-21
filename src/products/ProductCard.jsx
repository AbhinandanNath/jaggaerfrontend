import classes from "./ProductCard.module.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartStore/CartSlice";
import RatingComponent from "../common/RatingComponent";

function ProductCard({ productData }) {
  const { imageUrl, name, shortDescription, price, rating } = productData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function openProductDetails() {
    navigate(`/productDetails/${name}`);
  }

  const updateCartData = () => {
    dispatch(
      cartActions.updateCartValue({
        name,
        price,
        description: shortDescription,
      })
    );
    dispatch(cartActions.updateQuantity({ quantity: 1, name }));
  };

  return (
    <div className={classes.productCard}>
      <img
        src={imageUrl}
        alt="Product"
        className={classes.productImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/E0E0E0/6B7280?text=Image+Not+Found";
        }}
      />
      <div className={classes.productDetails}>
        <div className={classes.productInfo}>
          <h2>{name}</h2>
          <h3>{shortDescription}</h3>
        </div>

        <div className={classes.productInfo}>
          <h2 className={classes.productPrice}>${price}</h2>
          {/* <h3 className={classes.productRating}>{rating} stars</h3> */}
          <RatingComponent ratingInput={rating} />
        </div>
      </div>
      <div className={classes.productButtons}>
        <button
          className={classes.viewDetailsButton}
          onClick={openProductDetails}
        >
          View Details
        </button>
        <button className={classes.addToCartButton} onClick={updateCartData}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
