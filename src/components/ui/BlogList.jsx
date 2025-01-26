import React from "react";
import BlogCard from "./BlogCard";
import FeatureCard from "./FeatureCard";

const BlogList = ({ featureBlog, blogs }) => {
  return (
    <div className="container mx-auto px-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
      {/* Feature Blog */}
      <div className="col-span-1">
        <FeatureCard
          image={featureBlog.image}
          category={featureBlog.category}
          readTime={featureBlog.readTime}
          title={featureBlog.title}
          description={featureBlog.description}
        />
      </div>

      {/* Side Blog List */}
      <div className="flex flex-col gap-4 col-span-2">
        {blogs.map((blog, index) => (
          <BlogCard
            item={{
              key: index,
              image: blog.image,
              category: blog.category,
              readTime: blog.readTime,
              title: blog.title,
              description: blog.description,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
