import { Mail, Phone } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import api from "../../config/axios";

const Banner = () => {
  const [newsItems, setNewsItems] = useState([]);
  const controls = useAnimation();
  const newsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("news");
        setNewsItems(response.data.data);
      } catch (error) {
        console.error("Failed to fetch news items:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const scrollAnimation = async () => {
      const newsWidth = newsRef.current?.scrollWidth / 2;
      const containerWidth = containerRef.current?.offsetWidth;

      if (newsWidth && containerWidth) {
        await controls.start({
          x: -newsWidth,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: newsWidth / 50,
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
          className="flex-1 overflow-hidden relative max-w-4xl"
        >
          <motion.div
            ref={newsRef}
            animate={controls}
            initial={{ x: 0 }} // Start at 0 since we're duplicating content
            className="flex whitespace-nowrap text-cream"
          >
            {/* Render news items twice for seamless looping */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="inline-block px-12"
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-shrink-0">
          <a
            href="tel:9150521167"
            className="flex flex-row items-center gap-2 text-cream"
          >
            <Phone className="text-cream w-4 h-4 font-bold" />
            <span className="hidden sm:inline">9150521167</span>
          </a>
          <div className="h-2 w-0.5 bg-cream hidden sm:block" />
          <a
            href="mailto:info@innovstem.com"
            className="flex flex-row items-center gap-2 text-cream"
          >
            <Mail className="text-cream w-4 h-4 font-bold" />
            <span className="hidden sm:inline">info@innovstem.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
