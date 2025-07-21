import CartButton from "../Cart/CartButton/CartButton";
import classes from "./Header.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const pageTitles = [
  { path: "/", title: "Products" },
  { path: "/productDetails", title: "Product Details" },
  { path: "/cart", title: "Cart" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);

  let title = pageTitles[location.pathname] || "Product";
  if (name) {
    title = `Product Details`;
  }
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
