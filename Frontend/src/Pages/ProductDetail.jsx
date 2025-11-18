import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart 👍");
  };

  return (
    <div>
      <img src={product.image} width="200" />
      <h2>{product.title}</h2>
      <h3>Brand: {product.brand}</h3>
      <p>{product.description}</p>
      <p>{product.specs}</p>
      <h3>Price: ₹{product.price}</h3>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
