import React from "react";
import { UserRoundPlus } from "lucide-react";
import { PiStudentDuotone } from "react-icons/pi";
import { formatDistance, parseISO } from "date-fns";

const WebinarCard = ({ item }) => {
  const formattedReadTime = formatDistance(
    parseISO(item.readTime),
    new Date(),
    { addSuffix: true }
  );

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

        {/* <div className="flex flex-row gap-3 justify-between text-start my-4 items-center">
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
        </div> */}

        <div className="flex flex-row justify-between items-end mx-2 mb-2 mt-2">
          <div className="flex flex-col gap-3 justify-start items-start">
            {/* <div className="flex flex-row flex-wrap gap-2 mt-2">
              <p className="bg-primary/5 rounded-2xl p-1 px-3 text-xs/4 text-gray-500 font-medium">
                {item.category}
              </p>
            </div> */}
            <p className="text-xs text-gray-400 font-medium">
              {formattedReadTime}
            </p>
          </div>

          <a
            href="#"
            className="bg-primary/10 text-primary/80 p-3 shadow-md rounded-2xl"
          >
            <UserRoundPlus className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
