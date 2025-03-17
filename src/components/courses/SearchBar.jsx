import { motion } from "framer-motion";

export const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={onSubmit}
      className="flex items-center max-w-xl w-full px-5 sm:px-0"
    >
      <div className="relative w-full">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          className="bg-white border border-gray-300 text-secondary text-sm rounded-3xl focus:bg-primary/5 focus:border-primary outline-none block w-full p-2.5 px-4"
          placeholder="Search course name..."
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
    </motion.form>
  );
};
