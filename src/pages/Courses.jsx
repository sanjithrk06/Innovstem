import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TitleBanner, CategoryGrid } from "../components";
import { useStore } from "../store/store";

const Courses = () => {
  const { categories, fetchCategories, isLoading } = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!categories.length) {
      fetchCategories();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleBanner
        title="STEM Skills"
        subtitle="Courses & Webinars"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat recusandae dolorem quibusdam reiciendis eius, cumque eaque, rem maxime."
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
