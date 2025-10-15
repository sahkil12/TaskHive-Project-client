import { MdFeedback } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const UsersFeedback = () => {
  return (
    <div className="py-16 md:py-28 bg-secondary/10 pop">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-3 items-center mb-12 mx-auto md:w-10/12">
          <h4 className="bg-primary/80 w-fit rounded-full p-4">
            <MdFeedback size={32} className="text-white" />
          </h4>
          <h2 className="text-3xl md:text-[53px] font-bold ">
            {" "}
            Our User <span className="text-primary"> FeedBack</span>{" "}
          </h2>
        </div>
        {/* card  */}
     <div className="py-5 flex flex-col md:flex-row justify-around gap-4">
        {/* card 1 */}
      <div className="bg-base-200 border border-gray-200 shadow-md rounded-xl px-5 py-10 max-w-4xl mx-auto flex-1 ">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
      {/* Review Text */}
      <p className="text-gray-500 font-medium rail leading-relaxed mb-6">
       TaskHive made it so easy for me to find the right freelancer for my project. Posting a task was simple, and within hours I had multiple bids to choose from. The platform's user-friendly interface and secure payment system gave me confidence throughout the process. Highly recommend TaskHive for anyone looking to get things done efficiently!
      </p>
      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?s=612x612&w=0&k=20&c=FwJw5gqpUX3A8jOdsnIqQmSOxptVcYqHzaBkz6bvtMA=" 
          alt="Reviewer"
          className="w-12 h-12 rounded-full border object-cover"
        />
        <div>
          <h4 className="font-semibold">David L</h4>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Web Developer
          </p>
        </div>
      </div>
    </div>
        {/* card 2 */}
      <div className="bg-base-200 border border-gray-200 shadow-md rounded-xl px-5 py-10 max-w-4xl mx-auto flex-1">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
      {/* Review Text */}
      <p className="text-gray-500 font-medium rail leading-relaxed mb-6">
       As a freelancer, TaskHive has been a game-changer. I can quickly browse tasks, place bids, and connect with clients who actually value my work. The platform's intuitive design and supportive community make it easy to find opportunities that match my skills!
      </p>
      {/* Reviewer Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-photo/smiling-lady-black-jacket-posing-isolated-background-happy-cheerful-woman-dark-suit-laughing-looking-into-camera_197531-18513.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Reviewer"
          className="w-12 h-12 rounded-full border object-cover"
        />
        <div>
          <h4 className="font-semibold">Maria R.</h4>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Designer
          </p>
        </div>
      </div>
    </div>
     </div>
      </div>
    </div>
  );
};

export default UsersFeedback;
