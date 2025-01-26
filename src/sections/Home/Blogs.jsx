// import { cn } from "../../utils/utils.js";
import React from "react";
// import { BentoGrid, BentoGridItem } from "../../components/ui/Grid.jsx";
import { ArrowRight } from "lucide-react";
import { BlogList } from "../../components/index.js";

const Blogs = () => {
  return (
    <div className=" bg-white py-1">
      <section className="container">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className=" font-outfit text-base tracking-widest text-primary uppercase font-medium block mb-2 mx-auto lg:mx-0">
              Blogs & Resources
            </span>
            <h2 className=" font-hedvig text-5xl font-medium text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-xl">
              Explore New Learning Horizons
            </h2>
            <a
              href="#"
              className="inline-flex flex-row items-center justify-center gap-1 uppercase font-publicsans text-sm font-medium text-primary  hover:underline hover:underline-offset-4 duration-300 group mx-auto"
            >
              View All Blogs
            </a>
          </div>
          <BlogList featureBlog={featureBlog} blogs={blogs} />
        </div>
      </section>
    </div>
  );
};

export default Blogs;

const featureBlog = {
  image: "https://pagedone.io/asset/uploads/1696244059.png",
  category: "CRM Strategies",
  readTime: "2025-01-08T11:06:37+05:30",
  title: "From Leads to Loyalists: How a CRM Fuels Your Sales Pipeline",
  description:
    "Stop juggling spreadsheets and contacts. Learn how a CRM automates repetitive tasks, streamlines communication, and nurtures leads into loyal customers. Empower your business to grow sustainably by focusing on your customer relationships.",
};

const blogs = [
  {
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    category: "CRM Integration",
    readTime: "2025-01-08T11:06:37+05:30",
    title: "How a CRM Can Unify Your Customer Journey",
    description:
      "Learn how a CRM nurtures leads into loyal customers by providing a seamless and personalized experience at every touchpoint. Unify sales, marketing, and support to deliver value-driven solutions effortlessly.",
  },
  {
    image: "https://pagedone.io/asset/uploads/1696244059.png",
    category: "Productivity",
    readTime: "2025-01-08T11:06:37+05:30",
    title: "Boost Productivity, Not Paperwork",
    description:
      "Discover how automating routine tasks allows your team to focus on meaningful work. With streamlined workflows, a CRM can reduce administrative burdens and foster a culture of efficiency.",
  },
];
