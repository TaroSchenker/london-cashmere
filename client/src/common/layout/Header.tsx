import React from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-primary-color text-background-color py-4">
      <div className="container">
        <h1 className="text-2xl font-bold">Cashmere Store</h1>
        <nav className="mt-2 md:flex hidden">
          <a href="/" className="mr-4">Home</a>
          <a href="/products" className="mr-4">Shop</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/contact" className="mr-4">Contact</a>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}>≡</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
