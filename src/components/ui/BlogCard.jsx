import { ArrowRight } from "lucide-react";
import React from "react";
import { formatDistance, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  const formattedReadTime = formatDistance(
    parseISO(item.readTime),
    new Date(),
    { addSuffix: true }
  );

  return (
    <div
      key={item.key}
      className="py-6 px-2 lg:px-6 bg-transparent text-left flex flex-col lg:flex-row gap-4 h-full duration-300 hover:bg-whiteDim hover:shadow rounded-2xl"
    >
      <div className="lg:w-2/6 overflow-hidden rounded-xl drop-shadow">
        <img
          src="https://pagedone.io/asset/uploads/1696244059.png"
          alt={item.title}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="font-publicsans lg:w-4/6 flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-start">
          <div className="text-sm font-semibold text-primary/90">
            {item.category}
          </div>
          <div className="text-xs font-medium text-gray-500">
            {formattedReadTime}
          </div>
        </div>
        <div className="text-lg font-outfit font-semibold line-clamp-2 text-secondary/90">
          {item.title}
        </div>
        <div className="text-sm/5 font-normal line-clamp-2 text-gray-600 text-justify">
          {item.description}
        </div>
        <Link
          to={`/blogs/${item.slug}`}
          className="flex flex-row items-center gap-1 text-sm font-semibold text-secondary/80 hover:text-primary hover:cursor-pointer"
        >
          Learn More <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
