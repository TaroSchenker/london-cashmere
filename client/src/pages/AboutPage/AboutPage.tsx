/* eslint-disable react/no-unescaped-entities */
import React from "react";

const CashmereInfo: React.FC = () => {
  return (
    <div className="p-8 bg-background-color">
      <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="lg:flex">
          {/* Left Column for Image */}
          <div className="lg:w-2/5">
            <img
              src={
                "https://images.unsplash.com/photo-1618574760337-2750f6251d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
              }
              alt="Cashmere Info"
              className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
          </div>

          {/* Right Column for Text and smaller images */}
          <div className="p-6 lg:w-3/5">
            <h2 className="text-black font-serif font-bold text-3xl mb-2">
              The Elegance of Cashmere
            </h2>
            <p className="text-gray-600 mb-4">
              Originating from the undercoat of the cashmere goat, cashmere is
              renowned for its ultra-soft texture and insulating properties. At
              London Cashmere Boutique, our dedication lies in sourcing the
              finest cashmere products from around the world, bringing timeless
              elegance and luxury to our esteemed clientele.
            </p>

            <img
              src={
                "https://images.unsplash.com/photo-1652904870544-5a29dfb2f498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              }
              alt="Cashmere History"
              className="mb-4 w-full h-72 object-cover rounded"
            />

            <h2 className="text-black font-serif font-bold text-xl mb-2 mt-4">
              Caring for Your Cashmere
            </h2>
            <p className="text-gray-600 mb-4">
              To maintain its luxurious touch and longevity, cashmere requires
              careful attention. Follow our care guide to ensure your cherished
              garments remain pristine for years to come.
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Always wash in cold water, either using a gentle machine cycle
                or hand wash.
              </li>
              <li className="mb-2">
                Refrain from using bleach or fabric softeners which can damage
                the fibers.
              </li>
              <li className="mb-2">
                Let the garment dry flat and avoid direct sunlight or any direct
                heat source.
              </li>
              <li>
                Store in a cool, dry place, preferably in a garment bag to avoid
                any snags or damage.
              </li>
            </ul>

            <img
              src={
                "https://images.unsplash.com/photo-1634901849515-40ba019f9387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2588&q=80"
              }
              alt="Cashmere Care"
              className="mb-4 w-full h-72 object-cover rounded"
            />

            <h2 className="text-black font-serif font-bold text-xl mb-2 mt-4">
              The Distinction of Cashmere
            </h2>
            <p className="text-gray-600 mb-4">
              Beyond its exquisite softness, cashmere offers unparalleled warmth
              without bulkiness, making it a winter essential. Its natural
              breathability and moisture-wicking properties make it comfortable
              for year-round wear. At London Cashmere Boutique, we proudly
              embrace and celebrate the epitome of luxury and elegance that
              cashmere offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashmereInfo;
