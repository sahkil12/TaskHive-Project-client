import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[600px] lg:h-[700px]">
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide>
            {/* slider - 1 */}
          <section className="bg-primary/30 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <div className="space-y-7 py-5">
                <h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Find Top Freelancers for <br /> Any Task
                </h2>
                <p className="text-lg">
                  Hire skilled professionals to get your projects done
                  efficiently and on time.
                </p>
                <div className="flex gap-4 items-center flex-wrap">
                  <Link to={'/browseTasks'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Browse Tasks</span>
                  </Link>
                  <Link to={'/addTask'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Add Tasks</span>
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
            {/* slider - 2 */}
           <section className="bg-secondary/10 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <div className="space-y-7 py-5">
                <h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Explore Tasks That Match  <br /> Your Skills
                </h2>
                <p className="text-lg">
                 Discover exciting projects and bid to get hired by clients worldwide.
                </p>
                <div className="flex gap-4 items-center flex-wrap">
                  <Link to={'/browseTasks'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Browse Tasks</span>
                  </Link>
                  <Link to={'/addTask'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Add Tasks</span>
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
            {/* slider - 3 */}
           <section className="bg-accent/10 w-full h-full pop px-5 sm:px-1">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center h-full">
              <div className="space-y-7 py-5">
                <h2 className="text-4xl md:text-6xl/snug font-semibold ">
                  Connect, Bid & Get  <br /> Hired Fast
                </h2>
                <p className="text-lg">
                 Submit bids, communicate with clients, and grow your freelance career.
                </p>
                <div className="flex gap-4 items-center flex-wrap">
                  <Link to={'/browseTasks'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-10 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Browse Tasks</span>
                  </Link>
                  <Link to={'/addTask'} className="relative inline-flex items-center justify-center p-4 px-8 md:px-12 py-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white md:text-lg font-semibold ">Add Tasks</span>
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
