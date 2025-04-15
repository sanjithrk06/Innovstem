import React from "react";

const CourseViewCard = ({ item }) => {
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
          {item.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default CourseViewCard;
