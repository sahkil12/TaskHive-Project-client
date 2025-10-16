import toast from "react-hot-toast";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import useAuth from "../Auth/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddTask = () => {
  const { user } = useAuth();

  const handleTaskForm = (e) => {
    e.preventDefault();
    const form = e.target;
    // form theke value nichi
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const budget = form.budget.value;
    const country = form.country.value;
    const details = form.details.value;
    // validation check
    if (
      !title ||
      !name ||
      !email ||
      !category ||
      !deadline ||
      !budget ||
      !country ||
      !details
    ) {
      toast.error("All fields are required. Please fill out everything.", {
        duration: 1500,
      });
      return;
    }
    const formData = {
      title,
      name,
      email,
      category,
      deadline,
      budget,
      country,
      details,
    };
    // post data in database
    fetch("https://task-hive-project-server-update.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Task Added Successfully",
            showConfirmButton: false,
            timer: 1300,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="">
      <Helmet>
        <title>Add Task - Task Hive</title>
      </Helmet>
      <div className="p-2 my-20 border rounded-lg bg-base-200 border-gray-200 shadow-xl md:p-8 md:w-10/12 mx-auto ">
        <h2 className="mb-10 mt-6 rail text-center font-bold text-2xl sm:text-3xl flex justify-center items-center gap-3">
          <MdOutlinePlaylistAddCircle size={45} className="text-secondary" />
          <span className="text-secondary font-extrabold">Add</span> Your Task
          Here{" "}
        </h2>
        <section>
          {/* form  */}
          <form onSubmit={handleTaskForm} className="pop">
            <fieldset className="flex flex-col gap-2">
              <label className="label font-medium ">Task Title</label>
              <input
                type="text"
                name="title"
                className="input text-base w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary "
                placeholder="Type Your Task Title"
              />
            </fieldset>
            {/* form with 2 input*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
              {/* 1 */}
              <fieldset className="flex flex-col gap-2">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input text-base w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary "
                  placeholder="Type Your Name"
                />
              </fieldset>
              {/* email */}
              <fieldset className="flex flex-col gap-2">
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || ""}
                  className="input text-base w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary"
                  placeholder="Type Your Email"
                />
              </fieldset>
              {/* category */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium">
                  Your Category
                </label>
                <select
                  defaultValue="Choice Your Category"
                  name="category"
                  className="select w-full border-2 text-base select-lg border-primary/10 focus:outline-none focus:border-primary"
                >
                  <option disabled={true} className="text-gray-500">
                    Choice Your Category
                  </option>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Video Editing</option>
                  <option>Data Entry</option>
                  <option>Content Writing</option>
                </select>
              </fieldset>
              {/* deadline */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium ">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  className="input text-base  w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              {/* budget */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium">Budget</label>
                <input
                  type="number"
                  name="budget"
                  className="input text-base w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary"
                  placeholder="Your budget"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  className="input w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-base"
                  placeholder="Type Your Country"
                />
              </fieldset>
            </div>
            {/* single field */}
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium ">Details</label>
              <textarea
                name="details"
                className="textarea w-full border-2 text-lg border-primary/10 focus:outline-none focus:border-primary "
                placeholder="Type Your Details"
              ></textarea>
            </fieldset>
            {/* button */}
            <button className="mt-6 rounded-full  w-full py-3 bg-primary/90 text-xl font-medium text-white">
              Add Task
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
