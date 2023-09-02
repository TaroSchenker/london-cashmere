import React from 'react';
import cashmereImage from '../common/assets/images/stock-photo-a-pile-of-warm-sweaters-on-a-wooden-table-on-a-light-background-autumn-and-winter-clothes-1173240742.jpg'
import cashmereImage2 from '../common/assets/images/stock-photo-pretty-girl-dressed-in-a-warm-gray-knitted-sweater-hugs-herself-in-the-park-gray-knitted-cashmere-1747245236.jpg'
import cashmereImage3 from '../common/assets/images/stock-photo-sheep-and-goats-on-a-pasture-in-mongolia-panorama-of-the-pasture-source-of-meat-milk-and-wool-1711719553.jpg'

import cashmereImage4 from '../common/assets/images/stock-photo-stack-of-white-and-gray-cozy-knitted-sweaters-on-rustic-wooden-background-469992296.jpg'
const CashmereInfo: React.FC = () => {
    return (
        <div className="p-8 bg-background-color">
            <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                
                <div className="lg:flex">

                    {/* Left Column for Image */}
                    <div className="lg:w-2/5">
                        <img 
                            src={cashmereImage2}
                            alt="Cashmere Info"
                            className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                        />
                    </div>

                    {/* Right Column for Text and smaller images */}
                    <div className="p-6 lg:w-3/5">

                        <h2 className="text-black font-serif font-bold text-3xl mb-2">Cashmere</h2>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat id nunc in luctus. 
                            Cras eget erat ut velit ultricies sollicitudin. Maecenas sed justo eu metus semper consectetur.
                        </p>

                        <img 
                            src={cashmereImage4}
                            alt="Cashmere History"
                            className="mb-4 w-full h-72 object-cover rounded"
                        />

                        <h2 className="text-black font-serif font-bold text-xl mb-2 mt-4">Caring for Cashmere</h2>
                        <p className="text-gray-600 mb-4">
                            Cashmere is a luxurious material and requires specific care. Follow our guide to ensure longevity.
                        </p>

                        <ul className="list-disc pl-6 mb-4">
                            <li className="mb-2">Wash with cold water using a gentle cycle or by hand.</li>
                            <li className="mb-2">Avoid using bleach or fabric softeners on cashmere.</li>
                            <li className="mb-2">Dry flat and keep away from direct sunlight or heat sources.</li>
                            <li>Store in a cool, dry place.</li>
                        </ul>

                        <img 
                            src={cashmereImage}
                            alt="Cashmere Care"
                            className="mb-4 w-full h-72 object-cover rounded"
                        />

                        <h2 className="text-black font-serif font-bold text-xl mb-2 mt-4">Why Choose Cashmere?</h2>
                        <p className="text-gray-600 mb-4">
                            Cashmere is a time-honored material cherished for its unmatched softness and durability. Learn why it's the choice of fashion enthusiasts around the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashmereInfo;
