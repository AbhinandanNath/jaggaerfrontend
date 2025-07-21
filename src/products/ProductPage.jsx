import ProductCard from "./ProductCard";
import { products } from "./ProductData";
import classes from "./ProductPage.module.css";

function ProductPage() {
  return (
    <div className={classes.productPage}>
      {products.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
}

export default ProductPage;
