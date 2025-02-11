import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BlogList } from "../../components/index.js";
import { useStore } from "../../store/store";

// Animation variants for elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
};

const Blogs = () => {
  const { topBlogs, fetchTopBlogs, isLoading, error } = useStore();

  useEffect(() => {
    if (!topBlogs.length) fetchTopBlogs();
  }, []);

  // Ensure at least one blog for feature and two more for listing
  const featureBlog = topBlogs[0] || null;
  const blogs = topBlogs.slice(1, 3) || [];

  return (
    <div className="bg-white py-1">
      <section className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={itemVariants} className="mb-10">
            <span className="font-outfit text-base tracking-widest text-primary uppercase font-medium block mb-2 mx-auto lg:mx-0">
              Blogs & Resources
            </span>
            <h2 className="font-outfit text-5xl font-medium text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-xl">
              Explore New Learning Horizons
            </h2>
            <motion.a
              href="#"
              className="inline-flex flex-row items-center justify-center gap-1 uppercase font-publicsans text-sm font-medium text-primary hover:underline hover:underline-offset-4 duration-300 group mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blogs
            </motion.a>
          </motion.div>

          {isLoading ? (
            <p>Loading blogs...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            featureBlog && (
              <motion.div initial="hidden" animate="visible" variants={cardVariants}>
                <BlogList featureBlog={featureBlog} blogs={blogs} />
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
