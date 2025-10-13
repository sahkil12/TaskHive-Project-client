import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const slideVariants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-[600px] lg:h-[700px]">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <section className="bg-primary/30 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.9 }}
                className="space-y-7 py-5"
              >
                <motion.h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Find Top Freelancers for <br />
                  <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    <Typewriter
                      words={["Any Task", "Any Problem", "Any Project"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={65}
                      delaySpeed={1600}
                    />
                  </span>
                </motion.h2>
                <motion.p className="text-lg">
                  Hire skilled professionals to get your projects done efficiently and on time.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-4 items-center flex-wrap"
                >
                  <Link
                    to={"/browseTasks"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Browse Tasks
                    </span>
                  </Link>
                  <Link
                    to={"/addTask"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Add Tasks
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </SwiperSlide>

        {/* Repeat same for slide 2 */}
        <SwiperSlide>
          <section className="bg-secondary/10 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.9 }}
                className="space-y-7 py-5"
              >
                <h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Explore Tasks That Match <br />
                  <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    <Typewriter
                      words={["Your Skills", "Your Passion", "Your Expertise"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={65}
                      delaySpeed={1400}
                    />
                  </span>
                </h2>
                <p className="text-lg ">
                  Discover exciting projects and bid to get hired by clients worldwide.
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-4 items-center flex-wrap"
                >
                  <Link
                    to={"/browseTasks"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Browse Tasks
                    </span>
                  </Link>
                  <Link
                    to={"/addTask"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Add Tasks
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </SwiperSlide>

        {/* Repeat same for slide 3 */}
        <SwiperSlide>
          <section className="bg-accent/10 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.9 }}
                className="space-y-7 py-5"
              >
                <h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Connect, Bid & Get <br />
                  <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    <Typewriter
                      words={["Get Hired", "Grow Fast", "Win Projects"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={65}
                      delaySpeed={1400}
                    />
                  </span>
                </h2>
                <p className="text-lg ">
                  Submit bids, communicate with clients, and grow your freelance career.
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-4 items-center flex-wrap"
                >
                  <Link
                    to={"/browseTasks"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Browse Tasks
                    </span>
                  </Link>
                  <Link
                    to={"/addTask"}
                    className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">
                      Add Tasks
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
