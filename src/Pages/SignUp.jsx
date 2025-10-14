import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../Auth/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signUpUser, googleCreate, githubCreate, updateUserProfile } = useAuth();
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const term = form.term.checked;
    const info = { name, email, photo, password };
    console.log(info, term);

    setError("");
    // name validation validation--
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long.");
      return;
    } else {
      setNameError("");
    }
    if (!term) {
      setError("Accept our term and condition.");
      return;
    }
    // password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    // signup user
    signUpUser(email, password)
      .then((result) => {
        // console.log(result);
        // update user profile
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(()=>{
           Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Account Create Successfully At TaskHive",
          showConfirmButton: false,
          timer: 1200,
        });
        navigate("/")
        }) 
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        toast.error("Something is wrong please check error.")
      });
  };
//   google signup
  const googleSignUp = ()=>{
    googleCreate()
    .then(result =>{
        // console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Account Create Successfully At TaskHive",
          showConfirmButton: false,
          timer: 1200,
        });
        navigate("/")
    })
    .catch(error =>{
        // console.log(error);
        setError(error.message)
        toast.error("Something is wrong please check error.")
    })
  }
// github signUp
 const githubSignUp = ()=>{
   githubCreate()
    .then(result =>{
        // console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Account Create Successfully At TaskHive",
          showConfirmButton: false,
          timer: 1200,
        });
        navigate("/")
    })
    .catch(error =>{
        // console.log(error);
        setError(error.message)
        toast.error("Something is wrong please check error.")
    })
  }
  return (
    <div className="px-2 bg-primary/5 ">
      <nav className="flex flex-col items-center py-8 px-4 gap-3 md:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/taskhiva logo .png" className="w-10 h-10" alt="logo" />
          <Link
            to={"/"}
            className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent logo"
          >
            TaskHive
          </Link>
        </div>
        <p className="text-center font-medium text-lg">
          Already Have An Account ?{" "}
          <Link
            to={"/auth/login"}
            className="btn btn-primary text-base px-6 font-semibold "
          >
            Login
          </Link>
        </p>
      </nav>
      <div className="mx-auto rail max-w-6xl py-7 flex items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center font-bold text-primary/90 gap-3 text-lg"
        >
          <FaArrowLeftLong></FaArrowLeftLong> Home
        </Link>
      </div>
      <div className="w-full mx-auto max-w-6xl my-3 border-2 border-neutral-200 p-4 rounded-md shadow sm:p-8 rail">
        <h2 className="mb-4 text-4xl font-bold text-center">
          Sign Up to your account
        </h2>
        <p className="text-md text-center font-medium text-gray-600">
          Enter your details below
        </p>

        {/* social button */}
        <div className="flex items-center justify-center my-7 gap-5 flex-col md:flex-row">
          <button
           onClick={googleSignUp}
            type="button"
            className="flex items-center justify-center w-full p-3 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 bg-primary/10 font-bold focus:outline-none focus:border-none hover:bg-primary/15"
          >
            <span className=" p-2 bg-white rounded-full">
              <FcGoogle size={25}></FcGoogle>
            </span>
            <p>SignUp with Google</p>
          </button>

          <button
            onClick={githubSignUp}
            type="button"
            className="flex items-center justify-center w-full p-3 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 bg-primary/10 font-bold focus:outline-none focus:border-none hover:bg-primary/15"
          >
            <span className=" p-2 bg-white rounded-full">
              <FaGithub size={25}></FaGithub>
            </span>

            <p>SignUp with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 w-full text-gray-700 text-center">
            Or signUp with e-mail
          </p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        {/* sign up form */}
        <form onSubmit={handleFormSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-md font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
              {nameError && <p className="text-red-500 pop">{nameError}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-md font-medium">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-md font-medium">Photo URl</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-md justify-between font-medium flex items-center">
                Password
                <a className="hover:underline text-sm">
                  Forgot Password?
                </a>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
            </div>
            <label className="flex items-center gap-2 text-base font-medium cursor-pointer">
              <input
                type="checkbox"
                name="term"
                className="checkbox checkbox-md"
              />
              <span>Accept Terms and Conditions</span>
            </label>
            {error && <p className="text-base pop text-red-500">{error}!</p>}
          </div>
          <button className="w-full bg-primary/90 text-white px-7 py-3 rounded-full text-lg font-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
