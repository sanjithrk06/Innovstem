import { CalendarCheck } from "lucide-react";
import React from "react";

const EnrolledCard = ({ item }) => {
  return (
    <div className="bg-white shadow hover:shadow-xl duration-300 border border-whiteDim m-2 p-4 rounded-2xl">
      <div className="flex items-center mb-4 h-40">
        <img
          src={
            item.image
              ? `https://admin-dev.innovstem.com/storage/${item.image}`
              : "https://pagedone.io/asset/uploads/1696244059.png"
          }
          alt={`${item.name} course`}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="font-publicsans p-3 pt-1">
        <h1 className="font-outfit text-xl text-left text-secondary font-medium leading-8 line-clamp-2 mb-2">
          {item.name}
        </h1>

        <p className="text-slate-500 font-publicsans text-left line-clamp-2 duration-500">
          {item.description}
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
      </div>
    </div>
  );
};

export default EnrolledCard;
