import { useEffect, useState } from "react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const FeatureTasks = () => {
    const navigation = useNavigation()
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://task-hive-project-server-update.vercel.app/featuredTasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, [])
    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }
    return (
        <div className="py-16 rail bg-base-100 p-5">
            <div>
                <h2 className="text-center text-3xl py-6 md:text-[54px] font-bold">Featured <span className="text-primary font-extrabold">Opportunities</span></h2>
                <p className="text-center font-semibold md:text-lg">Find the right tasks, post your ideas, and grow with the community.</p>
            </div>
            {/* feature card*/}
            <div className="py-6 px-2 my-8 md:w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        tasks.map(task => <Link to={`taskDetails/${task._id}`} key={task._id} className="border-2 flex flex-col shadow-lg gap-5 w-full border-neutral-300 p-6 rounded-2xl bg-base-200 hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
                            {/* Icon */}
                            <div className="text-5xl text-primary/80 flex justify-center">
                                <MdOutlineFeaturedPlayList />
                            </div>
                            {/* Content */}
                            <div className="space-y-5 text-center">
                                <h3 className="text-xl font-bold">{task.title}</h3>
                                <p className="text-gray-600 font-semibold">Posted by: {task.name} </p>
                                <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-1.5 rounded-full font-medium shadow">
                                    {task.category}
                                </span>
                                <div className="flex justify-between items-center flex-wrap text-md sm:text-base font-medium text-gray-600 font-medium border-t border-gray-400 py-4 gap-2">
                                    <p>
                                        Deadline:{" "}
                                        <span className="pop font-semibold text-red-600">{task.deadline}</span>
                                    </p>
                                    <p>
                                        Budget:{" "}
                                        <span className="font-bold text-blue-700 pop">${task.budget}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureTasks;