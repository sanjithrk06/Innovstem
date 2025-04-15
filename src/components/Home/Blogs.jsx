import React from "react";
import { motion } from "framer-motion";
import { BlogList } from "../../components/index.js";
import { useTopBlogs } from "../../hooks/hooks.js";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Animation variants for elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
  },
};

const Blogs = () => {
  const { data: topBlogs, isLoading, error } = useTopBlogs(); // Use React Query Hook

  // Ensure at least one blog for feature and two more for listing
  const featureBlog = topBlogs?.[0] || null;
  const blogs = topBlogs?.slice(1, 3) || [];

  return (
    <div className="bg-white py-1">
      <section className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mb-10"
          >
            <span className="font-outfit text-base tracking-widest text-primary uppercase font-medium block mb-2 mx-auto lg:mx-0">
              Blogs & Resources
            </span>
            <h2 className="font-outfit text-5xl font-medium text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-xl">
              Explore New Learning Horizons
            </h2>
            <motion.div
              className=" text-primary font-medium hover:text-primary/80 transition-colors font-publicsans"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={"/blogs"} className="inline-flex items-center gap-1">
                Explore Blogs!
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {isLoading ? (
            <p>Loading blogs...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            featureBlog && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
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
