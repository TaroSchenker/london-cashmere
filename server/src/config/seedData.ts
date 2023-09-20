import { Product } from "../models/Product";

const productsData = [
  {
    name: "Casaque Love Story Jumper",
    description:
      "Luxurious cashmere jumper with a signature love story design.",
    price: 850.0,
    size: ["S", "M", "L", "XL"],
    color: ["Navy Blue"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/casaque-love-story-muffler--254043S%2001-worn-1-0-0-800-800_g.jpg",
    stockCount: 50
  },
  {
    name: "Grand Mors Muffler Jumper",
    description: "An elegant cashmere jumper with grand mors detailing.",
    price: 890.0,
    size: ["S", "M", "L"],
    color: ["Deep Red"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/casaque-grand-mors-muffler--259116S%2001-worn-1-0-0-800-800_g.jpg",
    stockCount: 40
  },
  {
    name: "Grand Mors Lavender Jumper",
    description: "Classic cashmere jumper with a touch of lavender grand mors.",
    price: 870.0,
    size: ["M", "L", "XL"],
    color: ["Lavender"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/casaque-grand-mors-muffler--259116S%2002-worn-1-0-0-800-800_g.jpg",
    stockCount: 55
  },
  {
    name: "Brides de Gala Appliqué Jumper",
    description: "Sleek cashmere jumper with Brides de Gala appliqué design.",
    price: 910.0,
    size: ["S", "L"],
    color: ["Charcoal"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/brides-de-gala-applique-pique-shawl-140--243940S%2013-worn-1-0-0-800-800_g.jpg",
    stockCount: 45
  },
  {
    name: "New Libris Charcoal Poncho",
    description: "Chic poncho jumper crafted from the finest cashmere.",
    price: 950.0,
    size: ["M", "L", "XL"],
    color: ["Charcoal"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/new-libris-poncho--782494S%2002-worn-1-0-0-800-800_g.jpg",
    stockCount: 60
  },
  {
    name: "Retour à la Nature Shawl Jumper",
    description: "Cashmere jumper inspired by the beauty of nature.",
    price: 830.0,
    size: ["S", "M"],
    color: ["Forest Green"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/retour-a-la-nature-shawl-140--243854S%2004-worn-1-0-0-800-800_g.jpg",
    stockCount: 35
  },
  {
    name: "Nature's Embrace Jumper",
    description: "Soft cashmere jumper with a nature-inspired design.",
    price: 820.0,
    size: ["M", "L"],
    color: ["Beige"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/retour-a-la-nature-shawl-140--243854S%2009-worn-1-0-0-800-800_g.jpg",
    stockCount: 50
  },
  {
    name: "Love Story Muffler Jumper",
    description:
      "Warm cashmere jumper showcasing the love story muffler design.",
    price: 840.0,
    size: ["S", "M", "L"],
    color: ["Cream"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/casaque-love-story-muffler--254043S%2002-worn-1-0-0-800-800_g.jpg",
    stockCount: 45
  },
  {
    name: "Libris Beige Poncho",
    description: "Stylish cashmere poncho jumper with a contemporary design.",
    price: 960.0,
    size: ["S", "M", "XL"],
    color: ["Beige"],
    imageUrl:
      "https://assets.hermes.com/is/image/hermesproduct/new-libris-poncho--782494S%2003-worn-1-0-0-800-800_g.jpg",
    stockCount: 40
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seedDatabase = async (): Promise<any> => {
  try {
    const productCount = await Product.countDocuments();
    console.log("<----- *** Product count:", productCount, "*** ----->");
    if (productCount === 0) {
      await Product.insertMany(productsData);
      console.log("Data seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
