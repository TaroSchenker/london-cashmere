import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-darkest text-background-color py-4 mt-10">
      <div className="container">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cashmere Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
