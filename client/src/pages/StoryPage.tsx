import React from 'react';

// Importing the given images.
import cashmereImage from '../common/assets/images/stock-photo-a-pile-of-warm-sweaters-on-a-wooden-table-on-a-light-background-autumn-and-winter-clothes-1173240742.jpg'
import cashmereImage2 from '../common/assets/images/stock-photo-pretty-girl-dressed-in-a-warm-gray-knitted-sweater-hugs-herself-in-the-park-gray-knitted-cashmere-1747245236.jpg'
import cashmereImage3 from '../common/assets/images/iStockCashmere.jpg'

const StoryPage: React.FC = () => {
    return (
        <div className="p-8 bg-background-color flex justify-center">
            <div className="max-w-screen-xl border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                
                {/* Story Banner with Overlay */}
                <div className="relative h-96">
                    <img src={cashmereImage2} alt="Pam Whitford's Journey" className="w-full h-full object-cover rounded-t-lg"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h1 className="text-white font-serif font-bold text-5xl mx-4 text-center">The Journey of Pam Whitford</h1>
                    </div>
                </div>

                {/* Two Column Layout for Storytelling */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">

                    {/* Left - Image with Text Overlay */}
                    <div className="relative h-80">
                        <img src={cashmereImage} alt="Cashmere Collection" className="w-full h-full object-cover rounded-lg"/>
                        <div className="absolute top-4 right-4">
                            <h2 className="text-white font-serif font-bold text-3xl mb-2">Legacy in Threads</h2>
                            <p className="text-white">Pam's curated collection over the years.</p>
                        </div>
                    </div>
                    {/* Right - Detailed Story */}
                    <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Pamela "Pam" Whitford was no ordinary Londoner. An aficionado of elegance, luxury, and particularly, cashmere. From roaming London's cobblestone streets to opening her own boutique, Pam's journey is the stuff of legends. Every street corner, every boutique, and every thread of cashmere tells a tale of her dedication.
                        </p>

                        <h2 className="text-black font-serif font-bold text-3xl mb-4">An Exhibition of Dedication</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            But it wasn't just about owning cashmere. For Pam, it was about the stories, the heritage, and the warmth each piece brought into her life. It was about the artisans, the craftsmanship, and the city that nurtured her passion. Each piece in her boutique isn't just a piece of clothing; it's a chapter of her life.
                        </p>
                    </div>

                    {/* Left - Detailed Care Tips */}
                    <div>
                        <h2 className="text-black font-serif font-bold text-3xl mb-4">Caring for Cashmere</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Cashmere, with all its elegance, demands care. A blend of tradition and modernity, here are Pam's tips to cherish and preserve your cashmere.
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-600 leading-relaxed">
                            <li className="mb-2">Gentle wash with cold water.</li>
                            <li className="mb-2">Avoid bleaches and strong detergents.</li>
                            <li className="mb-2">Dry flat and avoid direct sunlight.</li>
                            <li>Store with love, away from moths.</li>
                        </ul>
                    </div>

                    {/* Right - Image of Cashmere Collection */}
                    <div className="relative h-80">
                        <img src={cashmereImage3} alt="Cashmere Source" className="w-full h-full object-cover rounded-lg"/>
                        <div className="absolute bottom-4 left-4">
                            <h2 className="text-white font-serif font-bold text-3xl mb-2">From Cobblestone to Boutique</h2>
                            <p className="text-white">15 years of relentless pursuit for the finest cashmere.</p>
                        </div>
                    </div>

    
                </div>
            </div>
        </div>
    );
};

export default StoryPage;
