import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CategoryHero } from "../sections";
import { CourseGrid, SearchBar } from "../components";
import api from "../config/axios";

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/courses/category/1");

        if (response.data.status === "success") {
          setCategoryData(response.data.data.category);
          setCourses(response.data.data.courses);
          setFilteredCourses(response.data.data.courses);
        } else {
          throw new Error("Failed to fetch category data");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching category data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, []);

  // Live Search Effect (Triggers on `searchTerm` change)
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
      setCurrentPage(1); // Reset to first page when searching
    }, 300); // Debounce to optimize performance

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, courses]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="">
      {error ? (
        <p className="text-red-500">Error loading category data: {error}</p>
      ) : (
        <>
          {categoryData && (
            <CategoryHero
              title={categoryData.name}
              description={categoryData.short_description}
              longDescription={categoryData.long_description}
              imageUrl={categoryData.image_url}
            />
          )}
          <div className="bg-gray-50 py-6">
            <div className="container">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl ml-2 font-semibold font-outfit text-secondary">
                  Related Courses
                </h2>
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <CourseGrid courses={currentCourses} isLoading={isLoading} />

              {/* Pagination UI */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <nav className="isolate inline-flex -space-x-px rounded-full shadow-xs">
                    {/* Previous Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onPrevPage}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="size-5" />
                    </motion.button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((number) => (
                      <motion.button
                        key={number}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onPageChange(number)}
                        className={`relative inline-flex rounded-full items-center px-4 py-2 text-sm font-semibold ${
                          currentPage === number
                            ? "bg-primary text-white z-10"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {number}
                      </motion.button>
                    ))}

                    {/* Next Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onNextPage}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon className="size-5" />
                    </motion.button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
