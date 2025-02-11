import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
  },
};

const testimonials = [
  {
    rating: 4.9,
    content:
      "Collaborating with InnovSTEM has been an incredible experience. Their commitment to empowering young minds through innovative STEM training and career guidance is truly inspiring. As a digital marketing company focused on educational alliances, we've witnessed firsthand the impact of their tailored programs on students' growth and confidence. InnovSTEM's dedication to nurturing future leaders aligns perfectly with our mission to create meaningful educational connections. We are proud to be associated with such a forward-thinking organization and look forward to many more successful endeavors together.",
    name: "KAYTEEGEE Adtech Private Limited",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "InnovSTEM has redefined how career guidance and defense training can transform young aspirants into confident leaders. As a defense training academy, we value their holistic approach to empowering students with the skills, discipline, and mindset needed to excel in defense careers. InnovSTEM's dedication to preparing the next generation of officers is unmatched, and their collaboration with us has been instrumental in shaping future leaders. It's an honor to partner with an organization that shares our vision of excellence and commitment to national service.",
    name: "OS Defense Training Academy",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Partnering with InnovSTEM has been an exceptional journey in promoting hands-on STEM education and fostering innovation among young minds. As a robotics company, we've seen how InnovSTEM integrates advanced technologies into their training programs, inspiring students to explore robotics and automation with enthusiasm and creativity. Their focus on experiential learning and skill development aligns seamlessly with our mission to ignite a passion for technology and problem-solving. We're proud to collaborate with InnovSTEM and look forward to driving future innovations together.",
    name: "Nexomation",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "InnovSTEM has proven to be a game-changer in bridging the gap between education and industry readiness. As a manufacturing and R&D company, we deeply value their efforts to equip students with practical skills and innovative thinking. Their programs not only foster technical expertise but also instill the confidence and curiosity needed to excel in real-world challenges. Collaborating with InnovSTEM has allowed us to contribute to shaping the next generation of skilled professionals, and we are honored to be part of their impactful journey.",
    name: "Able Industries",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-50 py-1"
    >
      <section className="container text-left mb-8 md:mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="mb-6 lg:mb-8 flex justify-center items-center flex-col gap-y-4 md:gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-w-xl md:max-w-2xl lg:max-w-none mx-auto"
          >
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <span className="font-outfit uppercase text-base md:text-lg tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                Testimonials
              </span>
              <h2 className="font-outfit text-4xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight md:leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                What People Say About Us!
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left max-lg:hidden lg:w-2/4">
              <p className="font-publicsans text-base md:text-lg font-normal text-slate-500 mb-3 md:mb-5">
                From interactive courses to personalized learning paths, we
                offer everything you need to grow, create, and thrive in the
                skills that matter most to you!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative"
          >
            <div className="swiper-button-prev !left-0 !text-secondary hover:!text-primary max-md:!hidden"></div>
            <div className="swiper-button-next !right-0 !text-secondary hover:!text-primary max-md:!hidden"></div>

            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={28}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1300}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !mt-6 md:!mt-10 !w-4 !h-1 !rounded !mx-1.5",
                bulletActiveClass: "!bg-primary !opacity-80",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="pb-10 md:pb-12 px-0 md:px-12"
                >
                  <motion.div variants={fadeIn}>
                    <div className="group bg-white rounded-2xl md:rounded-3xl drop-shadow-md shadow-cream font-publicsans p-4 md:p-6 pt-8 md:pt-12 transition-all duration-500 h-full flex flex-col">
                      <div className="absolute right-[40%] md:right-[45%] rounded-full p-2 md:p-4">
                        <FaQuoteRight
                          size={48}
                          className="text-primary/20 md:hidden"
                        />
                        <FaQuoteRight
                          size={92}
                          className="text-primary/20 hidden md:block"
                        />
                      </div>
                      <div className="flex-grow max-w-4xl mx-auto mb-4">
                        <p className="text-base md:text-lg leading-relaxed md:leading-9 text-center text-slate-500 transition-all duration-500 p-2 pb-6 md:pb-8 group-hover:text-gray-800 line-clamp-6 lg:line-clamp-none">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center border-t border-gray-200 pt-4 md:pt-5">
                        <h5 className="text-lg md:text-xl mb-1 font-outfit font-semibold text-secondary">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm md:text-base mb-1 font-outfit font-normal text-primary">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
