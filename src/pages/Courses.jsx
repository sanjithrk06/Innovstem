import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TitleBanner, CategoryGrid } from "../components";
import { useCategories } from "./../hooks/hooks";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  const { data: categories, isLoading } = useCategories();

  useEffect(() => {
    window.scroll(0, 0);
  }, [categories]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <TitleBanner
        title="STEM Skills"
        subtitle="Courses"
        description={
          "Unlock your potential with InnovSTEM’s dynamic courses, blending hands-on STEM skills and career-focused learning. From coding to entrepreneurship, we prepare you for a future of innovation!"
        }
      />
      <div className="bg-gray-50 py-1 sm:py-1">
        <div className="container">
          <CategoryGrid courses={categories} isLoading={isLoading} />
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;
