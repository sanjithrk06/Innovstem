import { motion } from "framer-motion";
import { Users, Lightbulb, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Sajesh Raju",
    vision:
      "InnovSTEM is a vision turned reality, empowering students with future-ready skills. ",
    image:
      "https://innovstem.edumilestones.com/create_channel/createpage/uploads/Sajesh%20passport.jpg",
  },
  {
    name: "Sriram",
    vision:
      "InnovSTEM is redefining learning with innovative training methods.",
    image:
      "https://innovstem.edumilestones.com/create_channel/createpage/uploads/Sajesh%20passport.jpg",
  },
  {
    name: "Jayaprakash",
    vision: "InnovSTEM is a movement towards a brighter future for students. ",
    image:
      "https://innovstem.edumilestones.com/create_channel/createpage/uploads/Sajesh%20passport.jpg",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    backgroundColor: "#1a365d",
    color: "#ffffff",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const iconVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export default function OurTeam() {
  return (
    <div>
      <div className="relative bg-cream/40 rounded-3xl mt-5 mx-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute max-lg:-left-52 -bottom-56 lg:-left-12 w-[450px] h-[400px] bg-cream/80 rounded-full border-[120px] lg:border-[120px] border-primary/30 drop-shadow-md"></div>
        <div className="absolute max-lg:-left-52 -top-40 lg:-right-32 w-[450px] h-[400px] bg-cream/70 rounded-full border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>

        <div className="backdrop-blur-2xl h-full">
          <section className="relative container px-4 bg-transparent my-0 py-16">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm tracking-widest text-primary uppercase">
                  Our Team
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold font-outfit text-secondary max-w-md mx-auto mb-6"
              >
                Meet Our Visionary Leaders
              </motion.h2>

              <motion.div
                className=" text-primary font-medium hover:text-primary/80 transition-colors font-publicsans"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={"/about"} className="inline-flex items-center gap-1">
                  Learn more about our mission
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Team Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col justify-center items-center gap-4 bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-indigo-100/50 overflow-hidden"
                >
                  <motion.div className="relative z-10 mb-2">
                    <div className="rounded-full overflow-hidden h-40 w-40 border-4 border-white shadow-xl">
                      <img
                        src={
                          member.image ||
                          "/placeholder.svg?height=160&width=160"
                        }
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </motion.div>

                  <h3 className="font-outfit font-semibold text-secondary text-3xl text-center">
                    {member.name}
                  </h3>

                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  />

                  <div className="flex items-start mb-4 w-full">
                    <Lightbulb className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="font-publicsans text-base text-slate-600 italic">
                      "{member.vision}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
