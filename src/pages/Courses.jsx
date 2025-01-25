import React, { useState, useEffect } from "react";
import { CourseCard } from "../components";
import { CourseHero } from "../sections";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  // Fetch courses from API
  const fetchCourses = async (page = 1, search = "") => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        search
          ? `https://admin-dev.innovstem.com/api/courses/search?query=${search}&page=${page}`
          : `https://admin-dev.innovstem.com/api/courses?page=${page}`
      );

      const responseData = response.data.data;
      setCourses(responseData.data);
      setCurrentPage(responseData.current_page);
      setTotalPages(responseData.last_page);
      setTotalResults(responseData.total);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setIsLoading(false);
      setCourses([]);
    }
  };

  // Initial course fetch
  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    fetchCourses(1, searchTerm);
  };

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      fetchCourses(currentPage + 1, searchTerm);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchCourses(currentPage - 1, searchTerm);
    }
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <CourseHero />
      <div className="bg-gray-50 py-1 sm:py-1">
        <div className="container">
          {/* Search form remains the same */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <p className="text-left font-publicsans text-2xl text-secondary mb-4 sm:mb-0 pl-5">
              All Results
            </p>
            <form
              onSubmit={handleSearch}
              className="flex items-center max-w-xl w-full px-5 sm:px-0"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white border-b border-gray-300 text-secondary text-sm rounded-none focus:bg-primary/5 focus:border-primary outline-none block w-full p-2.5"
                  placeholder="Search course name..."
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium bg-primary/10 rounded-3xl border text-primary border-primary/10 hover:border-primary outline-none"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-10">Loading courses...</div>
          )}

          {/* Courses Grid */}
          {!isLoading && courses.length > 0 && (
            <div className="mx-auto grid max-w-2xl md:max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pt-2 lg:mx-0 lg:max-w-none text-left">
              {courses.map((item) => (
                <div key={item.id}>
                  <CourseCard
                    item={{
                      id: item.id,
                      name: item.title,
                      avail: item.class_level_name,
                      category: [item.category_name],
                      description: item.content_short_description,
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && courses.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No courses found
            </div>
          )}

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 my-8 font-publicsans">
              {/* Mobile Pagination */}
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              {/* Desktop Pagination */}
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing{" "}
                    <span className="font-medium">
                      {(currentPage - 1) * 9 + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {Math.min(currentPage * 9, totalResults)}
                    </span>{" "}
                    of <span className="font-medium">{totalResults}</span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <nav
                    aria-label="Pagination"
                    className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                  >
                    {/* Previous Button */}
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon aria-hidden="true" className="size-5" />
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((number) => (
                      <button
                        key={number}
                        onClick={() => fetchCourses(number, searchTerm)}
                        aria-current={
                          currentPage === number ? "page" : undefined
                        }
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          currentPage === number
                            ? "bg-primary/50 text-white z-10"
                            : "text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                        }`}
                      >
                        {number}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon aria-hidden="true" className="size-5" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
