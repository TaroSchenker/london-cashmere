import React from 'react';

const SaleBanner: React.FC = () => {
  return (
    <div className="my-0.5 bg-red-600 text-white p-2 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-wide">Limited Time Sale!</h2>
        <p className="mt-0">Get 20% off on select items. Hurry, while stocks last!</p>
      </div>
    </div>
  );
};

export default SaleBanner;
