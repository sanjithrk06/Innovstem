import { cn } from "../../utils/utils.js";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, image }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group transition duration-200 p-4 bg-transparent text-left border border-transparent flex flex-col space-y-4 h-full hover:cursor-pointer",
        className
      )}
    >
      {/* Image container with enforced layout */}
      <div className="w-full overflow-hidden rounded-xl drop-shadow">
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-110  transition duration-500"
          alt={title}
        />
      </div>
      <div className="">
        <div className="font-sans font-bold line-clamp-1 text-neutral-600 mb-2 mt-2 group-hover:underline group-hover:underline-offset-2">
          {title}
        </div>
        <div className="font-sans font-normal line-clamp-2 text-neutral-600 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
