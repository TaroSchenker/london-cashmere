import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; // Adjust the path as needed to point to your AuthContext file

const SignUpPage: React.FC = () => {
  // Using state to maintain form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: username,
      email: email,
      password: password,
      address: email,
      // If you have additional fields like address and role, add them here.
    };
    await register(data);
    navigate("/products"); // Redirect
  };

  return (
    <div className="min-h-screen bg-neutral-lightest flex items-center justify-center">
      <div className="bg-white p-large rounded shadow-lg w-96">
        <h1 className="text-primary-color text-2xl mb-medium font-bold">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-small">
            <label
              className="block mb-small text-neutral-dark"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="p-small w-full border rounded"
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-color text-text-color p-small rounded mb-medium hover:bg-secondary-color"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-neutral-dark">
            Already have an account?{" "}
            <Link
              to="/user/auth"
              className="text-primary-color hover:text-secondary-color"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
