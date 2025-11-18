import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [products, setProducts] = useState([]);

 
  const API_URL = "http://localhost:5000/api/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

   
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      toast.info("🛒 Product already in cart!");
    } else {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("✔ Added to Cart");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <ToastContainer position="top-center" autoClose={1500} />

      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛍️ Our Products
      </h1>

      <div className="flex justify-end mb-6">
  <Link 
    to="/cart" 
    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    View Cart
  </Link>
</div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all"
          >
         
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

       
            <h2 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2">
              {product.title}
            </h2>

    
            <p className="text-blue-600 font-bold text-xl mb-3">
              ₹ {product.price}
            </p>

            
            <div className="flex justify-between items-center">
              <Link
                to={`/product/${product.id}`}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                View
              </Link>

              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
