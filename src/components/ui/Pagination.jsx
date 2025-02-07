import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export const Pagination = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
  onPrevPage,
  onNextPage,
  getPageNumbers,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-3 sm:px-6 my-8 font-publicsans">
      {/* Mobile Pagination */}
      <div className="flex flex-1 justify-center sm:hidden">
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

      {/* Desktop Pagination */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(currentPage - 1) * 9 + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * 9, totalResults)}
            </span>{" "}
            of <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
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
    </div>
  );
};
