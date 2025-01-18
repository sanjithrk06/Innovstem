import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Powering Your Learning Curve",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut voluptatum, dolores necessitatibus doloremque impedit aut facere molestias mollitia provident fuga dolore nihil sint consequatur recusandae omnis perferendis error dolor.",
    date: "Jan 02, 2025",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 2,
    title: "Powering Your Learning Curve",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut voluptatum, dolores necessitatibus doloremque impedit aut facere molestias mollitia provident fuga dolore nihil sint consequatur recusandae omnis perferendis error dolor.",
    date: "Jan 02, 2025",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 3,
    title: "Powering Your Learning Curve",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut voluptatum, dolores necessitatibus doloremque impedit aut facere molestias mollitia provident fuga dolore nihil sint consequatur recusandae omnis perferendis error dolor.",
    date: "Jan 02, 2025",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
    },
  },
];

const ResourcesBlogs = () => {
  return (
    <>
      <div className="bg-gray-50 py-1 sm:py-1">
        <div className=" container">
          <div className="mx-auto max-w-2xl lg:mx-0 text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Resources & Blogs
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptatibus earum ratione itaque obcaecati eos beatae
              velit nam dolores nesciunt?
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-left">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-sm flex-col items-start justify-between group bg-secondary/5 drop-shadow-sm rounded-xl"
              >
                <div className="w-full overflow-hidden rounded-none">
                  <img
                    src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/blog-t.jpg"
                    className="w-full h-full object-cover transition duration-500 rounded-t-xl "
                    alt="Image"
                  />
                </div>
                <div className=" p-6">
                  <div className="flex items-center gap-x-4 text-xs ">
                    <div className=" flex flex-row gap-2 align-baseline items-center">
                      <UserRound className=" w-5 h-5 text-slate-700" />
                      <p className="text-primary font-semibold text-base">
                        John Doe
                      </p>
                    </div>
                    <div className=" flex flex-row gap-2 items-center">
                      <CalendarDays className=" w-5 h-5 text-slate-700" />
                      <time
                        dateTime={post.datetime}
                        className=" text-sm font-medium text-slate-600"
                      >
                        {post.date}
                      </time>
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-4 text-xl/8 font-semibold text-secondary  line-clamp-1">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm/6 text-slate-600">
                      {post.description}
                    </p>
                  </div>
                  <div className=" mt-3">
                    <button className=" flex flex-row justify-center items-center font-medium text-secondary gap-1 hover:text-primary/90">
                      Read More <ArrowRight className=" w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesBlogs;
