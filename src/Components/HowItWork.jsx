import { MdPostAdd, MdWork } from "react-icons/md";
import { FaRegHandshake, FaCheckCircle } from "react-icons/fa";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      title: "Post a Task",
      desc: "Describe your task and set your budget easily.",
      icon: <MdPostAdd className="text-primary text-5xl" />,
    },
    {
      id: 2,
      title: "Browse Tasks",
      desc: "Freelancers explore tasks that match their skills.",
      icon: <MdWork className="text-gray-700 text-5xl" />,
    },
    {
      id: 3,
      title: "Place a Bid",
      desc: "Submit proposals and negotiate terms.",
      icon: <FaRegHandshake className="text-blue-600 text-5xl" />,
    },
    {
      id: 4,
      title: "Get It Done",
      desc: "Hire the right person and complete your task.",
      icon: <FaCheckCircle className="text-green-600 text-5xl" />,
    },
  ];

  return (
    <div>
    <section className="py-28 bg-primary/20 pop">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-center text-3xl mb-12 md:text-[54px] font-bold">How it <span className="text-primary">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 py-8 bg-base-200 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default HowItWork;
