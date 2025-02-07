import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CategoryList, SearchBar, CourseGrid, Pagination } from "../components";
import { usePagination } from "../hooks/usePagination.js";
import { CoursesHero } from "../sections";
import { useSearchParams, useLocation } from "react-router-dom";
import api from "../config/axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const categoryRef = useRef(null);

  const { getPageNumbers } = usePagination(totalPages, currentPage);

  useEffect(() => {
    if (location.key === "default") {
      window.scrollTo(0, 0);
    }

    const query = searchParams.get("keyword") || "";
    const tab = searchParams.get("tab") || "all";
    const page = parseInt(searchParams.get("page")) || 1;

    setSearchTerm(query);
    setActiveCategory(tab);
    setCurrentPage(page);

    fetchCategories();
    fetchCourses(page, query, tab);
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/courses/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  const fetchCourses = async (page = 1, search = "", category = "") => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams();

      if (page) params.append("page", page);
      if (search) params.append("keyword", search);
      if (category && category !== "all") params.append("category", category);

      const url = search ? "/courses/search" : "/courses";

      const response = await api.get(`${url}?${params.toString()}`);
      const responseData = response.data.data;

      setCourses(responseData.data);
      setCurrentPage(responseData.current_page);
      setTotalPages(responseData.last_page);
      setTotalResults(responseData.total);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("keyword", searchTerm);
    params.set("page", "1");
    setSearchParams(params);
    fetchCourses(1, searchTerm, activeCategory);
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const params = new URLSearchParams(searchParams);
    params.set("tab", categoryId);
    params.set("page", "1");
    setSearchParams(params);
    fetchCourses(1, searchTerm, categoryId);
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
    fetchCourses(page, searchTerm, activeCategory);
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CoursesHero />
      <div className="bg-gray-50 py-1 sm:py-1">
        <div className="container">
          <div
            ref={categoryRef}
            className="flex flex-col sm:flex-row justify-between items-center mb-6"
          >
            <CategoryList
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={handleSearch}
            />
          </div>

          <CourseGrid courses={courses} isLoading={isLoading} />

          {!isLoading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              onPageChange={handlePageChange}
              onPrevPage={prevPage}
              onNextPage={nextPage}
              getPageNumbers={getPageNumbers}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;
