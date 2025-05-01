import { motion, AnimatePresence } from "framer-motion";
import CourseViewCard from "./CourseViewCard";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const CategoryGrid = ({ courses, isLoading }) => {
  if (isLoading) {
    return <Loader className="mx-auto text-secondary w-8 h-8" />;
  }

  if (courses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10 text-gray-500"
      >
        No courses found
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto grid max-w-2xl md:max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pt-2 lg:mx-0 lg:max-w-none text-left"
    >
      <AnimatePresence>
        {courses.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.3, ease: "easeOut" }}
            className="cursor-pointer"
          >
            <Link to={`${item.slug}`}>
              <CourseViewCard
                item={{
                  id: item.id,
                  name: item.name,
                  view_count: item.view_count,
                  image: item.image_url,
                  description: item.short_description,
                  link: item.slug,
                }}
              />
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CategoryGrid;
