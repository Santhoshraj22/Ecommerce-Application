import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
  
      localStorage.setItem("token", res.data.token); 
  
      toast.success("Login Successful!", { autoClose: 1500 });
  
      setTimeout(() => navigate("/products"), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <ToastContainer />

      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/30">
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-300 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
