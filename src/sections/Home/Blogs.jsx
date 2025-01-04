import { cn } from "../../utils/utils.js";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/Grid.jsx";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className=" bg-gray-50 py-1">
      <section className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className=" font-outfit text-base tracking-widest text-primary uppercase font-medium block mb-2 mx-auto lg:mx-0">
              Blogs & Resources
            </span>
            <h2 className=" font-hedvig text-5xl font-medium text-slate-800 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md">
              Explore New Learning Horizons
            </h2>
            <a
              href="#"
              class="inline-flex flex-row items-center justify-center gap-1 uppercase font-publicsans text-sm font-medium text-primary  hover:underline hover:underline-offset-4 duration-300 group mx-auto"
            >
              View All Blogs{" "}
              <ArrowRight className=" w-5 h-5 invisible group-hover:visible " />
            </a>
          </div>
          <BentoGrid className="container max-w-6xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

const items = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam!",
    description: (
      <span className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim magnam, tenetur exercitationem earum consectetur quae vel
        reiciendis omnis fugit sequi quod excepturi impedit aperiam nemo ex
        commodi cum. Maxime itaque perspiciatis odit rem illo ipsum deserunt
        aliquam, at architecto!
      </span>
    ),
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    className: "md:col-span-1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam!",
    description: (
      <span className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim magnam, tenetur exercitationem earum consectetur quae vel
        reiciendis omnis fugit sequi quod excepturi impedit aperiam nemo ex
        commodi cum. Maxime itaque perspiciatis odit rem illo ipsum deserunt
        aliquam, at architecto!
      </span>
    ),
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    className: "md:col-span-1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam!",
    description: (
      <span className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim magnam, tenetur exercitationem earum consectetur quae vel
        reiciendis omnis fugit sequi quod excepturi impedit aperiam nemo ex
        commodi cum. Maxime itaque perspiciatis odit rem illo ipsum deserunt
        aliquam, at architecto!
      </span>
    ),
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    className: "md:col-span-1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam!",
    description: (
      <span className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim magnam, tenetur exercitationem earum consectetur quae vel
        reiciendis omnis fugit sequi quod excepturi impedit aperiam nemo ex
        commodi cum. Maxime itaque perspiciatis odit rem illo ipsum deserunt
        aliquam, at architecto!
      </span>
    ),
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    className: "md:col-span-2",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsam!",
    description: (
      <span className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
        enim magnam, tenetur exercitationem earum consectetur quae vel
        reiciendis omnis fugit sequi quod excepturi impedit aperiam nemo ex
        commodi cum. Maxime itaque perspiciatis odit rem illo ipsum deserunt
        aliquam, at architecto!
      </span>
    ),
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    className: "md:col-span-1",
  },
];
