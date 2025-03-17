import React from "react";
import { UserRoundPlus } from "lucide-react";
import { formatDistance, parseISO } from "date-fns";

const WebinarCard = ({ item }) => {
  return (
    <div className="bg-white shadow hover:shadow-xl duration-300 border border-gray-50 m-2 p-4 rounded-2xl">
      <div className="relative flex items-center mb-4 h-32">
        {/* Category label */}
        <div className="absolute bottom-2 right-2 bg-primary/70 text-white text-xs px-2 py-1 rounded-2xl">
          {item.category}
        </div>

        {/* Image */}
        <img
          src="https://pagedone.io/asset/uploads/1696244059.png"
          alt={`${item.name} course`}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="font-publicsans p-1">
        <h1 className="font-outfit text-xl text-left text-gray-900 font-medium leading-8 line-clamp-2 mb-2">
          {item.title}
        </h1>

        <p className="text-gray-500 font-publicsans text-left line-clamp-2 duration-500">
          {item.description || "No description available"}
        </p>

        <div className="w-full mt-4">
          <a
            href="#"
            className="bg-primary/10 text-primary/80 p-3 shadow-md rounded-xl flex flex-row gap-2 justify-center items-center"
          >
            <UserRoundPlus className="w-5 h-5" />
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
