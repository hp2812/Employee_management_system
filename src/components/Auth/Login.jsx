import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 border-emerald-600 p-10 sm:p-14 rounded-xl bg-gray-800 w-full max-w-sm shadow-lg">
        <h2 className="text-2xl sm:text-3xl text-center text-white font-semibold mb-6">Welcome Back</h2>
        <form onSubmit={submitHandler} className="flex flex-col">
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-700 border-2 border-emerald-600 focus:border-emerald-400 transition-all duration-200 text-white font-medium text-lg py-2 px-6 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-700 border-2 border-emerald-600 focus:border-emerald-400 transition-all duration-200 text-white font-medium text-lg py-2 px-6 rounded-lg mt-4 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500"
            type="password"
            placeholder="Enter password"
          />

          {/* Login Button */}
          <button className="mt-6 text-white border-none outline-none hover:bg-emerald-700 transition-all duration-200 font-semibold bg-emerald-600 text-lg py-3 px-6 rounded-lg w-full">
            Log in
          </button>
        </form>

        {/* Forgot Password & Sign Up Links */}
        
      </div>
    </div>
  );
};

export default Login;
