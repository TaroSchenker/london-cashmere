const SaleBanner: React.FC = () => {
  return (
    <div className="my-0.5 bg-red-600 text-white p-2 rounded-lg shadow-md">
      <div className="text-center p-2">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
          Limited Time Sale!
        </h2>
        <p className="mt-0 text-sm md:text-base">
          Get 20% off on select items. Hurry, while stocks last!
        </p>
      </div>
    </div>
  );
};

export default SaleBanner;
