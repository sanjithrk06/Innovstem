import { motion } from "framer-motion";

const CategoryList = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-secondary mb-4 sm:mb-0 ml-5 text-left font-publicsans font-semibold text-base flex flex-row flex-wrap gap-3"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-1 rounded-2xl transition-colors duration-200 ${
          activeCategory === "all"
            ? "bg-primary/10 text-primary"
            : "bg-gray-100 ring-1 ring-gray-200 hover:text-primary hover:bg-primary/10 hover:ring-0"
        }`}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-1 rounded-2xl transition-colors duration-200 ${
            activeCategory === category.id
              ? "bg-primary/10 text-primary"
              : "bg-gray-100 ring-1 ring-gray-200 hover:text-primary hover:bg-primary/10 hover:ring-0"
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryList;
