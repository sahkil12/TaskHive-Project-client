import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import BannerSlide from "./BannerSlide";

const bannerSliders = [
  {
    bg: "bg-primary/30",
    title: "Find Top Freelancers for",
    words: ["Any Task", "Any Problem", "Any Project"],
    description:
      "Hire skilled professionals to get your projects done efficiently and on time.",
    primaryGradient: "from-primary/80 via-purple-600 to-secondary/80",
  },
  {
    bg: "bg-secondary/10",
    title: "Explore Tasks That Match",
    words: ["Your Skills", "Your Passion", "Your Expertise"],
    description:
      "Discover exciting projects and bid to get hired by clients worldwide.",
    primaryGradient: "from-secondary/80 via-purple-600 to-secondary/80",
  },
  {
    bg: "bg-accent/15",
    title: "Connect, Bid & Get",
    words: ["Get Hired", "Grow Fast", "Win Projects"],
    description:
      "Submit bids, communicate with clients, and grow your freelance career.",
    primaryGradient: "from-primary/80 via-purple-600 to-secondary/80",
  },
]

const Banner = () => {
  return (
    <div className="w-full h-[650px] lg:h-[calc(100vh-90px)] pop">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
        className="w-full h-full"
      >
        {/* slider */}
        {
          bannerSliders?.map((slide, index) => (
            <SwiperSlide key={index}>
              <BannerSlide slide={slide}>
              </BannerSlide>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default Banner;
