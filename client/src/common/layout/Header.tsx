import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-color text-background-color py-4">
      <div className="container">
        <h1 className="text-2xl font-bold">Cashmere Store</h1>
        <nav className="mt-2">
          {/* Add your navigation links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
