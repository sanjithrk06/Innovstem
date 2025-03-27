import { Mail, Phone } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Banner = () => {
  const newsItems = [
    "Breaking: New product launch scheduled for next month",
    "Update: Company wins innovation award 2025",
    "Alert: Special discount ends tomorrow",
  ];

  const controls = useAnimation();
  const newsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollAnimation = async () => {
      const newsWidth = newsRef.current?.scrollWidth / 2; // Divide by 2 since we duplicate content
      const containerWidth = containerRef.current?.offsetWidth;

      if (newsWidth && containerWidth) {
        await controls.start({
          x: -newsWidth,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: newsWidth / 100, // Adjust speed (pixels per second)
              ease: "linear",
            },
          },
        });
      }
    };
    scrollAnimation();
  }, [controls]);

  return (
    <div className="relative isolate h-[7vh] flex items-center text-sm font-outfit overflow-hidden bg-secondary px-6 py-2.5 sm:px-3.5">
      <div className="flex flex-row items-center gap-x-6 w-full justify-between">
        <div className=""></div>
        <div
          ref={containerRef}
          className="flex-1 overflow-hidden relative max-w-lg"
        >
          <motion.div
            ref={newsRef}
            animate={controls}
            initial={{ x: 0 }} // Start at 0 since we're duplicating content
            className="flex whitespace-nowrap text-cream"
          >
            {/* Render news items twice for seamless looping */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <span
                key={index}
                className="inline-block px-4" // Add padding between items
              >
                {item}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-shrink-0">
          <a
            href="tel:9876541235"
            className="flex flex-row items-center gap-2 text-cream"
          >
            <Phone className="text-cream w-4 h-4 font-bold" />
            <span className="hidden sm:inline">9876541235</span>
          </a>
          <div className="h-2 w-0.5 bg-cream hidden sm:block" />
          <a
            href="mailto:office@innovstem.com"
            className="flex flex-row items-center gap-2 text-cream"
          >
            <Mail className="text-cream w-4 h-4 font-bold" />
            <span className="hidden sm:inline">office@innovstem.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
