import { ArrowRight } from "lucide-react";
import React from "react";

const FeatureCard = ({ image, category, readTime, title, description }) => {
  return (
    <div className="py-5 px-2 lg:px-6 w-full bg-transparent text-left flex flex-col gap-4 h-full hover:bg-gray-100/70 hover:shadow rounded-2xl">
      <div className="overflow-hidden rounded-xl drop-shadow">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>
      <div className="font-publicsans flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="text-sm font-semibold text-primary/90">
            {category}
          </div>
          <div className="text-xs font-medium text-gray-500">{readTime}</div>
        </div>
        <div className="text-lg font-outfit font-semibold line-clamp-2 text-secondary/90">
          {title}
        </div>
        <div className="text-sm/5 font-normal line-clamp-2 lg:line-clamp-3 text-gray-600 text-justify">
          {description}
        </div>
        <button className="flex flex-row items-center gap-1 text-sm font-medium text-secondary hover:text-primary hover:cursor-pointer">
          Learn More <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
