import ActionButton from './ActionButton';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const BannerSlide = ({ slide }) => {
     const containerVariants = {
          hidden: {
               opacity: 0,
               y: 70,
          },
          show: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.7,
                    ease: "easeOut",
               },
          },
     };

     return (
          <section className={`${slide.bg} w-full h-full px-5 sm:px-1`}>
               <div className="md:w-11/12 mx-auto flex items-center justify-center h-full">
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.4 }}
                         className="space-y-7 py-5"
                    >
                         <h2 className="text-5xl/tight md:text-6xl/snug xl:text-7xl/snug  font-semibold ">
                              {slide.title} <br />
                              <span className="bg-gradient-to-r from-indigo-600/70 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                   <Typewriter
                                        words={slide.words}
                                        loop
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={80}
                                        deleteSpeed={65}
                                        delaySpeed={1500}
                                   />
                              </span>
                         </h2>
                         {/* description */}
                         <p className="text-lg ">{slide.description}</p>
                         {/* button */}
                         <div
                              className="flex gap-4 flex-wrap"
                         >
                              <ActionButton to="/browseTasks" >
                                   Browse Tasks
                              </ActionButton>
                              <ActionButton to="/addTask" >
                                   Add Tasks
                              </ActionButton>
                         </div>
                    </motion.div>
               </div>
          </section>
     );
};

export default BannerSlide;