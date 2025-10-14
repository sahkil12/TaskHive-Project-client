import { useEffect, useState } from "react";
import useAuth from "../Auth/useAuth";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyPostTasks = () => {
  const { user } = useAuth();
  const [myTasks, setMyTasks] = useState([]);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  // fetch user specific data
  useEffect(() => {
    fetch(`http://localhost:3000/myPostTasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTasks(data);
      });
  }, [user?.email]);
  const deleteUsers = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myPostTasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              const remaining = myTasks.filter((task) => task._id !== id);
              setMyTasks(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-full py-8 p-1 pop md:w-11/12 mx-auto">
      <h2 className="my-4 text-4xl flex items-center gap-2 justify-center font-semibold text-center">
        My Posted <span className="text-primary font-bold"> Tasks </span>{" "}
        <MdOutlinePostAdd className="text-primary" size={45}></MdOutlinePostAdd>
      </h2>
      {/* table */}
      <div>
        <div className="overflow-x-auto my-10 p-2 border-2 rounded-lg border-neutral-300 shadow-md ">
          <table className="table ">
            <thead>
              <tr className="text-gray-600">
                <th>No</th>
                <th>Category</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {myTasks.map((task, index) => (
                <tr key={task._id} className="hover:bg-base-300">
                  <th className="">{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-bold">{task.category}</div>
                    </div>
                  </td>
                  <td className="">{task.title}</td>
                  <td>{task.deadline}</td>
                  <td className="text-primary font-medium">{task.budget}$</td>
                  <th className="flex flex-col md:flex-row gap-2">
                    <button
                      onClick={() => deleteUsers(task._id)}
                      className="btn mx-1 p-2 md:p-3 rounded-md bg-red-500 btn-sm"
                    >
                      <FaTrash className="text-white" />
                    </button>
                    <button className="btn mx-1 btn-sm p-2 md:p-3 rounded-md bg-black ">
                      {" "}
                      <FaEdit className="text-white" />
                    </button>
                    <button
                      onClick={handleCount}
                      className="btn btn-sm bg-green-400 py-4"
                    >
                      Bid+ {count}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostTasks;
