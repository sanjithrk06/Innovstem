import React from "react";
import { CalendarCheck, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";

const WebinarCard = ({ item }) => {
  return (
    <div className="bg-white shadow hover:shadow-xl duration-300 border border-gray-50 m-2 p-4 rounded-2xl flex flex-col justify-evenly">
      <div className="relative flex items-center mb-4 h-32">
        {/* Category label */}
        <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-2xl">
          {item.category}
        </div>

        {/* Image */}
        <img
          src={`https://admin-dev.innovstem.com/storage/${item.image}`}
          alt={`${item.name} course`}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="font-publicsans p-1 flex flex-col justify-between">
        <h1 className="font-outfit text-xl text-left text-gray-900 font-medium leading-8 line-clamp-2 mb-2">
          {item.title}
        </h1>

        <p className="text-gray-500 font-publicsans text-left line-clamp-2 duration-500">
          {item.description || "No description available"}
        </p>

        {item.date && (
          <div className="flex flex-row gap-2 items-center justify-start text-secondary/80 text-sm font-medium font-publicsans mt-4">
            <CalendarCheck className=" w-5 h-5 text-secondary/70" />
            <p>
              {new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        )}

        <div className="w-full mt-4">
          <Link
            to={`/webinars/${item.slug}`}
            className="bg-primary/5 text-primary/80 drop-shadow-sm p-3 rounded-xl flex flex-row gap-2 justify-center items-center transition-all duration-300 hover:bg-primary/10 hover:scale-105"
          >
            <UserRoundPlus className="w-5 h-5" />
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
