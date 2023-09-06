/* eslint-disable react/no-unescaped-entities */
// src/components/LoginPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-lightest flex items-center justify-center">
      <div className="bg-white p-large rounded shadow-lg w-96">
        <h1 className="text-primary-color text-2xl mb-medium font-bold">
          Login
        </h1>
        <form>
          <div className="mb-small">
            <label className="block mb-small text-neutral-dark" htmlFor="email">
              Email
            </label>
            <input
              className="p-small w-full border rounded"
              type="email"
              id="email"
              placeholder="Enter your email"
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
            Don't have an account?{" "}
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
