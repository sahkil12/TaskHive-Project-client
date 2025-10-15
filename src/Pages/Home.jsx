import Banner from "../Components/Banner";
import FeatureTasks from "../Components/FeatureTasks";
import HowItWork from "../Components/HowItWork";
import UsersFeedback from "../Components/UsersFeedback";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <FeatureTasks></FeatureTasks>
            <HowItWork></HowItWork>
            <UsersFeedback></UsersFeedback>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;