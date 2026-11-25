import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="product-list">
      <h2>Our Products</h2>

      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;