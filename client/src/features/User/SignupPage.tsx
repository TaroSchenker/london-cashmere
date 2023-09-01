// src/components/SignUpPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-lightest flex items-start justify-center">
      <div className="bg-white p-large rounded shadow-lg w-96">
        <h1 className="text-primary-color text-2xl mb-medium font-bold">Sign Up</h1>
        <form>
          <div className="mb-small">
            <label className="block mb-small text-neutral-dark" htmlFor="username">Username</label>
            <input className="p-small w-full border rounded" type="text" id="username" placeholder="Choose a username" />
          </div>
          <div className="mb-small">
            <label className="block mb-small text-neutral-dark" htmlFor="email">Email</label>
            <input className="p-small w-full border rounded" type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-medium">
            <label className="block mb-small text-neutral-dark" htmlFor="password">Password</label>
            <input className="p-small w-full border rounded" type="password" id="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full bg-primary-color text-text-color p-small rounded mb-medium hover:bg-secondary-color">Sign Up</button>
        </form>
        <div className="text-center">
          <p className="text-neutral-dark">Already have an account? <Link to="/user/auth" className="text-primary-color hover:text-secondary-color">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
