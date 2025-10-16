import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../Auth/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
     const { loginUser, googleCreate, githubCreate } = useAuth();
      const navigate = useNavigate();
      const location = useLocation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // login user
    loginUser(email, password)
    .then(result =>{
        navigate(`${location.state? location.state : '/'}`)
        toast.success("Login Successful");
    })
    .catch(error =>{
        // console.log(error);
    })
  };
  const handleGoogleLogin = ()=>{
    googleCreate()
    .then(result =>{
         navigate(`${location.state? location.state : '/'}`)
    })
    .catch(error =>{
        // console.log(error);
    })
  }
  const handleGithubLogin = ()=>{
    githubCreate()
    .then(result =>{
         navigate(`${location.state? location.state : '/'}`)
    })
    .catch(error =>{
        // console.log(error);
    })
  }

  return (
    <div className="px-2 bg-primary/5 ">
      <Helmet>
        <title>Login - TaskHive</title>
      </Helmet>
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
          Don't Have An Account ?{" "}
          <Link
            to={"/auth/signup"}
            className="btn btn-primary text-base px-6 font-semibold "
          >
            Sign Up
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
          Login to TaskHive.
        </h2>
        <p className="text-md text-center font-medium text-gray-600">
          Enter your details below To Login
        </p>

        {/* social button */}
        <div className="flex items-center justify-center my-7 gap-5 flex-col md:flex-row">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full p-3 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 bg-primary/10 font-bold focus:outline-none focus:border-none"
          >
            <span className=" p-2 bg-white rounded-full">
              <FcGoogle size={25}></FcGoogle>
            </span>
            <p>LogIn with Google</p>
          </button>

          <button
            onClick={handleGithubLogin}
            type="button"
            className="flex items-center justify-center w-full p-3 space-x-4  rounded-md focus:ring-2 focus:ring-offset-1 bg-primary/10 font-bold focus:outline-none focus:border-none "
          >
            <span className=" p-2 bg-white rounded-full">
              <FaGithub size={25}></FaGithub>
            </span>

            <p>LogIn with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 w-full text-gray-700 text-center">
            Or LogIn with e-mail
          </p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        {/* sign up form */}
        <form onSubmit={handleFormSubmit} className="space-y-8">
          <div className="space-y-4">
            {/* email */}
            <div className="space-y-2">
              <label className="block text-md font-medium">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
            </div>
            {/* password */}
            <div className="space-y-2">
              <label className="text-md  font-medium flex items-center">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-4 text-lg font-medium border rounded-md border-primary/30 focus:outline-primary/40"
              />
            </div>
          </div>
          <button className="w-full bg-primary/90 text-white px-7 py-3 rounded-full text-lg font-bold">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
