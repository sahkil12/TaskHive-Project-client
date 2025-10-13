import { MdOutlinePlaylistAddCircle } from "react-icons/md";

const AddTask = () => {
    const handleTaskForm =(e)=>{
        e.preventDefault()
    }
  return (
    <div className="">
      <div className="p-2 my-20 border rounded-lg bg-gray-100 border-gray-200 shadow-xl md:p-8 md:w-10/12 mx-auto ">
        <h2 className="mb-10 mt-6 rail text-center font-bold text-black text-3xl flex justify-center items-center gap-3">
            <MdOutlinePlaylistAddCircle size={45} className="text-secondary"/>
          <span className="text-secondary font-extrabold">Add</span> Your Task Here{" "}
        </h2>
        <section>
          {/* form  */}
          <form onSubmit={handleTaskForm} className="pop">
            <fieldset className="flex flex-col gap-2">
              <label className="label font-medium text-black/90">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                placeholder="Type Your Task Title"
              />
            </fieldset>
            {/* form with 2 input*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
              {/* 1 */}
              <fieldset className="flex flex-col gap-2">
                <label className="label font-medium text-black/90">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                  placeholder="Type Your Name"
                />
              </fieldset>
              {/* email */}
              <fieldset className="flex flex-col gap-2">
                <label className="label font-medium text-black/90">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                  placeholder="Type Your Email"
                />
              </fieldset>
              {/* category */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium text-black">
                  Your Category
                </label>
                <select
                  defaultValue="Choice Your Category"
                  className="select bg-white w-full border-2 text-base select-lg border-primary/10 focus:outline-none focus:border-primary text-gray-800"
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
                <label className="label text-base font-medium text-black">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              {/* budget */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium text-black">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                  placeholder="Your budget"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium text-black">
                  Country
                </label>
                <input
                  type='text'
                  name="country"
                  className="input bg-white w-full border-2 py-6 border-primary/10 focus:outline-none focus:border-primary text-black"
                  placeholder="Type Your Country"
                />
              </fieldset>
            </div>
            {/* single field */}
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Details
              </label>
             <textarea className="textarea bg-white w-full border-2 text-lg border-primary/10 focus:outline-none focus:border-primary text-black" placeholder="Type Your Details"></textarea>
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
