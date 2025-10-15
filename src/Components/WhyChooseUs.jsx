import { FaQuestion } from "react-icons/fa";
import { FiLock, FiCheckCircle, FiPhoneCall, FiDollarSign } from "react-icons/fi";

const WhyChooseUs = () => {
     const reasons = [
    {
      id: 1,
      title: "Secure Payments",
      desc: "Safe and reliable transactions every time.",
      icon: <FiLock className="text-primary text-5xl" />,
    },
    {
      id: 2,
      title: "Verified Freelancers",
      desc: "Work with trusted professionals only.",
      icon: <FiCheckCircle className="text-green-500 text-5xl" />,
    },
    {
      id: 3,
      title: "24/7 Support",
      desc: "Get help whenever you need it.",
      icon: <FiPhoneCall className="text-blue-500 text-5xl" />,
    },
    {
      id: 4,
      title: "Affordable Rates",
      desc: "Hire talents within your budget.",
      icon: <FiDollarSign className="text-yellow-500 text-5xl" />,
    },
  ];
  return (
    <div className="py-16 md:py-28 bg-accent/10">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-3 items-center mb-12 md:w-10/12 mx-auto">
          <h4 className="bg-primary/80 w-fit rounded-full p-4">
            <FaQuestion size={32} className="text-white" />
          </h4>
          <h2 className="text-3xl md:text-[54px] font-bold ">
            {" "}
           Why Choose <span className="text-primary"> Us</span>{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center py-8">
          {reasons.map((r) => (
            <div
              key={r.id}
              className="p-6 py-8 space-y-6 bg-base-200 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center">{r.icon}</div>
              <h3 className="text-2xl font-semibold mt-3">{r.title}</h3>
              <p className="text-gray-600 mt-2 font-medium">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
