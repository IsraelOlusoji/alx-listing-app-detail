import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { fonts, quicksand, sourceSansPro } from "@/styles/fonts";

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Self Checkin",
    "Instant Book",
  ];

  const filteredProperties =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((property) =>
          property.category.includes(activeFilter)
        );

  return (
    <div className={`${sourceSansPro.variable} ${quicksand.variable} container pt-4 mx-auto rounded-3xl`}>
      {/* Hero Section */}
      <div className="relative h-[481px] font-source-sans-pro rounded-3xl bg-cover bg-center bg-no-repeat bg-[url('/assets/HeroImgMobile.png')] md:bg-[url('/assets/HeroImg.png')]">
        <div className="absolute inset-0 " />
        <div className=" pt-20  flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-8xl font-bold mb-4">
              Find your favorite
              <br />
              place here!
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-3 overflow-x-auto">
            {filters.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
            <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
              <span>🔧</span>
              <span>Filter</span>
            </button>
            <span>Sort by: Highest Price</span>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <Card key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
