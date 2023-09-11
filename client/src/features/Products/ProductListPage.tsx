/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProductListHeader from "../../common/layout/ProductListHeader";
import SaleBanner from "../../common/layout/SaleBanner";
import Footer from "./components/Footer/Footer";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { useLoaderData } from "react-router-dom";
import { IProduct } from "../../types";

const ProductListPage: React.FC = () => {
  const data = useLoaderData() as { products: IProduct[] };
  const { products } = data;

  return (
    <div className="bg-background-color min-h-screen py-10">
      <div className="container mx-auto px-6">
        <ProductListHeader />
        <SaleBanner />
        <ProductGrid products={products} />
        <Footer />
      </div>
    </div>
  );
};

export default ProductListPage;
