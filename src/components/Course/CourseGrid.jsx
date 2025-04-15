import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, isLoading }) => {
  if (isLoading) {
    return <div className="text-center py-10">Loading courses...</div>;
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
            transition={{ duration: 0.4, delay: index * 0.3, ease: "easeOut" }}
          >
            <CourseCard
              item={{
                id: item.id,
                name: item.title,
                image: item.course_thumbnail,
                avail: item.class_level_name,
                category: [item.category_name],
                description: item.content_short_description,
                link: item.course_slug,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CourseGrid;
