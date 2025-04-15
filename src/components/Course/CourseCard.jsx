import React from "react";
import { Eye, UserRoundPlus } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const CourseCard = ({ item }) => {
  return (
    <div className="bg-white shadow hover:shadow-xl duration-300 border border-gray-50 m-2 p-4 rounded-2xl">
      <div className="flex items-center mb-4 h-28">
        <img
          src={`https://admin-dev.innovstem.com/storage/${item.image}`}
          alt={`${item.name} course`}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="font-publicsans p-1">
        <h1 className="font-outfit text-xl text-left text-gray-900 font-medium leading-8 line-clamp-2 mb-2">
          {item.name}
        </h1>

        <p className="text-gray-500 font-publicsans text-left line-clamp-2 duration-500">
          {item.description || "No description available"}
        </p>

        <div className="flex flex-row gap-3 justify-between text-start my-4 items-center">
          <div className="flex flex-row items-center gap-2 w-3/6">
            <div className="w-1/4 bg-primary/5 rounded-xl text-primary shadow p-2">
              <TbCategory className="w-5 h-5" />
            </div>
            <div className="w-3/4 flex flex-col">
              <h3 className="text-sm font-medium text-gray-500">Category</h3>
              <p className="text-sm font-semibold text-gray-700">
                {item.category?.[0] || "Uncategorized"}
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          <div className="flex flex-row items-center gap-2 w-3/6">
            <div className="w-1/4 bg-primary/5 rounded-xl text-primary shadow p-2">
              <PiStudentDuotone className="w-5 h-5" />
            </div>
            <div className="w-3/4 flex flex-col">
              <h3 className="text-sm font-medium text-gray-500">Classes</h3>
              <p className="text-sm font-semibold text-gray-700">
                {item.avail || "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-end mx-2 mb-2">
          <div className="flex flex-col gap-3 justify-start items-start">
            <div className="flex flex-row flex-wrap gap-2 mt-2 -ml-2">
              {item.category?.map((tag, index) => (
                <p
                  key={index}
                  className="bg-cream/30 rounded-2xl p-1 px-3 text-xs/4 text-primary font-medium"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className=" flex flex-row items-center gap-2">
              <div className="flex flex-row gap-1">
                <Eye className=" w-4 h-4 text-primary/60" />
                <span className="text-xs text-slate-500 font-medium">103</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-primary/60"></div>
              <p className="text-xs text-slate-400 font-medium">
                Last Uploaded Recently
              </p>
            </div>
          </div>

          <Link
            to={`/courses/course/${item.link}`}
            className="bg-primary/10 text-primary/80 p-3 shadow-md rounded-2xl"
          >
            <UserRoundPlus className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
