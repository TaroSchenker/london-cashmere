import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust the path as needed to point to your AuthContext file

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate("/user/profile");
  };

  return (
    <div className="min-h-screen bg-neutral-lightest flex items-center justify-center">
      <div className="bg-white p-large rounded shadow-lg w-96">
        <h1 className="text-primary-color text-2xl mb-medium font-bold">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-small">
            <label className="block mb-small text-neutral-dark" htmlFor="email">
              Email
            </label>
            <input
              className="p-small w-full border rounded"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-medium">
            <label
              className="block mb-small text-neutral-dark"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="p-small w-full border rounded"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-color text-text-color p-small rounded mb-medium hover:bg-secondary-color"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-neutral-dark">
            Don&apos;t have an account?{" "}
            <Link
              to="/user/register"
              className="text-primary-color hover:text-secondary-color"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
