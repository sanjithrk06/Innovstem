import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/utils.js";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-rows-3 grid-cols-1 md:max-w-7xl mx-0 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ title, description, image }) => {
  return (
    <div className=" flex flex-row">
      <div className=" w-2/5 row-span-1 p-4 py-6 bg-transparent text-left flex flex-col gap-6 h-full">
        <div className=" overflow-hidden rounded-xl drop-shadow">
          <img
            src="https://pagedone.io/asset/uploads/1696244059.png"
            className="w-full h-60 object-cover"
            alt={title}
          />
        </div>
        <div className=" font-publicsans lg:w-4/6 flex flex-col gap-3">
          <div className=" flex flex-row gap-2 items-center justify-start">
            <div className=" text-sm font-semibold text-primary/90 ">
              STEM Skills
            </div>
            <div className=" text-xs font-medium text-gray-500 ">
              5 days ago
            </div>
          </div>
          <div className=" text-lg font-outfit font-semibold line-clamp-2 text-secondary/90 ">
            The Future of Education: Why E-Learning Is Here to Stay
          </div>
          <div className=" text-sm/5 font-normal line-clamp-3 text-gray-600 text-justify">
            Understand how gamification is transforming e-learning into an
            engaging and rewarding experience for students of all ages.
          </div>
          <button className=" flex flex-row items-center gap-1 text-sm font-medium text-secondary hover:text-primary hover:cursor-pointer">
            Learn More <ArrowRight className=" w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="w-3/5 flex flex-col">
        <div className=" row-span-1 p-4 py-6 bg-transparent text-left flex flex-col lg:flex-row gap-6 h-full border-b border-gray-200">
          <div className="lg:w-2/6 overflow-hidden rounded-xl drop-shadow">
            <img
              src="https://pagedone.io/asset/uploads/1696244059.png"
              className="w-full h-40 object-cover"
              alt={title}
            />
          </div>
          <div className=" font-publicsans lg:w-4/6 flex flex-col gap-3">
            <div className=" flex flex-row gap-2 items-center justify-start">
              <div className=" text-sm font-semibold text-primary/90 ">
                STEM Skills
              </div>
              <div className=" text-xs font-medium text-gray-500 ">
                5 days ago
              </div>
            </div>
            <div className=" text-lg font-outfit font-semibold line-clamp-2 text-secondary/90 ">
              The Future of Education: Why E-Learning Is Here to Stay
            </div>
            <div className=" text-sm/5 font-normal line-clamp-3 text-gray-600 text-justify">
              Understand how gamification is transforming e-learning into an
              engaging and rewarding experience for students of all ages.
            </div>
            <button className=" flex flex-row items-center gap-1 text-sm font-medium text-secondary hover:text-primary hover:cursor-pointer">
              Learn More <ArrowRight className=" w-3 h-3" />
            </button>
          </div>
        </div>
        <div className=" row-span-1 p-4 py-6 bg-transparent text-left flex flex-col lg:flex-row gap-6 h-full border-b border-gray-200">
          <div className="lg:w-2/6 overflow-hidden rounded-xl drop-shadow">
            <img
              src="https://pagedone.io/asset/uploads/1696244059.png"
              className="w-full h-40 object-cover"
              alt={title}
            />
          </div>
          <div className=" font-publicsans lg:w-4/6 flex flex-col gap-3">
            <div className=" flex flex-row gap-2 items-center justify-start">
              <div className=" text-sm font-semibold text-primary/90 ">
                STEM Skills
              </div>
              <div className=" text-xs font-medium text-gray-500 ">
                5 days ago
              </div>
            </div>
            <div className=" text-lg font-outfit font-semibold line-clamp-2 text-secondary/90 ">
              The Future of Education: Why E-Learning Is Here to Stay
            </div>
            <div className=" text-sm/5 font-normal line-clamp-3 text-gray-600 text-justify">
              Understand how gamification is transforming e-learning into an
              engaging and rewarding experience for students of all ages.
            </div>
            <button className=" flex flex-row items-center gap-1 text-sm font-medium text-secondary hover:text-primary hover:cursor-pointer">
              Learn More <ArrowRight className=" w-3 h-3" />
            </button>
          </div>
        </div>
        <div className=" row-span-1 p-4 py-6 bg-transparent text-left flex flex-col lg:flex-row gap-6 h-full border-b border-gray-200">
          <div className="lg:w-2/6 overflow-hidden rounded-xl drop-shadow">
            <img
              src="https://pagedone.io/asset/uploads/1696244059.png"
              className="w-full h-40 object-cover"
              alt={title}
            />
          </div>
          <div className=" font-publicsans lg:w-4/6 flex flex-col gap-3">
            <div className=" flex flex-row gap-2 items-center justify-start">
              <div className=" text-sm font-semibold text-primary/90 ">
                STEM Skills
              </div>
              <div className=" text-xs font-medium text-gray-500 ">
                5 days ago
              </div>
            </div>
            <div className=" text-lg font-outfit font-semibold line-clamp-2 text-secondary/90 ">
              The Future of Education: Why E-Learning Is Here to Stay
            </div>
            <div className=" text-sm/5 font-normal line-clamp-3 text-gray-600 text-justify">
              Understand how gamification is transforming e-learning into an
              engaging and rewarding experience for students of all ages.
            </div>
            <button className=" flex flex-row items-center gap-1 text-sm font-medium text-secondary hover:text-primary hover:cursor-pointer">
              Learn More <ArrowRight className=" w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
