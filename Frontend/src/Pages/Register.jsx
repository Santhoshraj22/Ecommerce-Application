import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
  
      toast.success("Registration Successful!");
  
      setTimeout(() => navigate("/login"), 1500);
  
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/30">
        
       
        <h2 className="text-3xl font-extrabold text-center text-white mb-3 drop-shadow">
          Create Account 
        </h2>
        <p className="text-center text-white/80 mb-8">
          Join us and explore amazing products!
        </p>

        <form onSubmit={handleRegister}>
          
         
          <div className="mb-5">
            <label className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

         
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all"
          >
            Register
          </button>
        </form>

     
        <p className="text-center text-white/90 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 font-semibold hover:underline">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
