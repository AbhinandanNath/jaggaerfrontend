import CartButton from "../Cart/CartButton/CartButton";
import classes from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const pageTitles = {
  "/": "Products",
  "/productDetails": "Product Details",
  "/cart": "Cart",
};

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const title = pageTitles[location.pathname] || "Product";

  const handleBack = () => {
    navigate(-1);
  };

  const isProductPage = location.pathname === "/";

  return (
    <header className={classes.header}>
      <div className={classes.headerLeft}>
        {!isProductPage && (
          <button onClick={handleBack} className={classes.backButton}>
            &#8592;
          </button>
        )}
        <h1>{title}</h1>
      </div>

      <CartButton />
    </header>
  );
}

export default Header;
