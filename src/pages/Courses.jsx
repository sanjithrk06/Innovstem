import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TitleBanner, CategoryGrid } from "../components";
import { useLocation } from "react-router-dom";
import api from "../config/axios";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.key === "default") {
      window.scrollTo(0, 0);
    }

    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/courses/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleBanner
        title={"STEM Skills"}
        subtitle={"Courses & Webinars"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat recusandae dolorem quibusdam reiciendis eius, cumque eaque, rem maxime "
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
