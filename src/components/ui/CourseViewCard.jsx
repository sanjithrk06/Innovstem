import React from "react";
import { Ellipsis, Eye, UserRoundPlus } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

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

        <p className="text-gray-500 font-publicsans text-left line-clamp-2 duration-500">
          {item.description || "No description available"}
        </p>

        {/* <div className="flex flex-row justify-between items-end m-2 mb-2">
          <div className="flex flex-col gap-3 justify-start items-start">
            <div className=" flex flex-row items-center gap-2">
              <p className="text-xs text-slate-400 font-medium">
                Last Uploaded Recently
              </p>
            </div>
          </div>

          <Link
            to={"/coursepage"}
            className="bg-primary/10 text-primary p-1 px-2 shadow-md rounded-lg"
          >
            <Ellipsis className=" w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CourseViewCard;
