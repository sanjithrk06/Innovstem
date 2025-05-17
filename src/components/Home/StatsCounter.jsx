import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaEye, FaBookOpen, FaUserGraduate, FaAward } from "react-icons/fa";

const StatsCounter = () => {
  const stats = [
    {
      id: 1,
      icon: <FaEye className="text-primary w-10 h-10" />,
      value: 25000,
      label: "Website Views",
      suffix: "+",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-primary w-10 h-10" />,
      value: 120,
      label: "Courses Available",
      suffix: "+",
    },
    {
      id: 3,
      icon: <FaUserGraduate className="text-primary w-10 h-10" />,
      value: 5000,
      label: "Students Enrolled",
      suffix: "+",
    },
    {
      id: 4,
      icon: <FaAward className="text-primary w-10 h-10" />,
      value: 98,
      label: "Success Rate",
      suffix: "%",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative bg-cream/20 rounded-3xl mx-4 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute max-lg:-left-52 -bottom-40 lg:-left-12 w-[450px] h-[400px] bg-primary/10 rounded-full border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>

      <div className="backdrop-blur-2xl h-full py-16 px-4">
        <div className="container my-6 mx-auto">
          <div className="text-center mb-12">
            <span className="font-outfit uppercase text-lg tracking-widest text-primary font-medium block mb-2">
              Our Impact
            </span>
            <h2 className="font-outfit text-5xl max-w-xl mx-auto font-medium text-secondary leading-tight">
              Transforming Education Through Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-full p-5 shadow-lg border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>

                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                  className="font-outfit text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary block mb-3"
                />

                <p className="font-publicsans text-gray-600 text-lg font-medium">
                  {stat.label}
                </p>

                <div className="h-1 w-16 mx-auto mt-4 bg-gradient-to-r from-secondary to-primary rounded-full transform origin-left transition-all duration-300 group-hover:w-24"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CountUp = ({ end, duration, suffix = "", className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ count: end });
    }
  }, [isInView, controls, end]);

  return (
    <motion.span
      ref={ref}
      className={className}
      animate={controls}
      initial={{ count: 0 }}
      transition={{ duration, ease: "easeOut" }}
      onUpdate={(latest) => setCount(Math.floor(latest.count))}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default StatsCounter;
