import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-white to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AlertTriangle className="w-16 h-16 mx-auto text-primary" />
        </motion.div>
        <h1 className="mt-4 text-4xl font-bold text-primary sm:text-6xl">
          Internal Server Error
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-md mx-auto">
          Oops! Something went wrong on our end. Please try again later.
        </p>
      </motion.div>
      <motion.a
        href="/"
        className="mt-8 px-6 py-3 bg-whiteDim border-2 border-primary/70 text-primary font-semibold rounded-full shadow-lg hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.a>
    </div>
  );
};

export default ErrorPage;
