import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CategoryHero } from "../components";
import { CourseGrid, Loader, SearchBar } from "../components";
import { useParams } from "react-router-dom";
import { useCategoryBySlug } from "../hooks/hooks";
import { Helmet } from "react-helmet-async";

const CategoryPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    window.scrollTo(0, 0);
  }, [slug]);

  const { data: categoryData, isLoading, error } = useCategoryBySlug(slug);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  // Filter courses based on search term
  const filteredCourses =
    categoryData?.categoryCourses?.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const onPageChange = (page) => setCurrentPage(page);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {error ? (
        <p className="text-red-500">
          Error loading category data: {error.message}
        </p>
      ) : (
        <>
          {categoryData && (
            <CategoryHero
              title={categoryData.categoryData.name}
              description={categoryData.categoryData.short_description}
              longDescription={categoryData.categoryData.long_description}
              imageUrl={categoryData.categoryData.image_url}
            />
          )}
          <Helmet>
            <title>{categoryData.categoryData.name}</title>
          </Helmet>
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

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (number) => (
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
                      )
                    )}

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
