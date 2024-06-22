/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function index() {
  const navigate = useNavigate();

  return (
    <main className="bg-slate-100 p-8 flex justify-center items-center h-[100vh] ">
      <form
        action=""
        className="w-[420px] bg-lime-500 p-8 rounded-xl shadow-md shadow-emerald-800 my-auto "
      >
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Register
        </h1>
        <div className="my-4 relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl px-6 py-2 border-2 "
            required
          />
          <MdEmail className="absolute top-[30%] right-[15px]" />
        </div>

        <div className="my-4 relative">
          <input
            type="text"
            placeholder="username"
            className="w-full rounded-xl px-6 py-2 border-2 "
            required
          />
          <FaUser className="absolute top-[30%] right-[15px]" />
        </div>

        <div className="my-4 relative">
          <input
            type="password"
            placeholder="password"
            className="w-full rounded-xl px-6 py-2 border-2 "
            required
          />
          <FaLock className="absolute top-[30%] right-[15px]" />
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="text-green-500 bg-white border-green-500  px-6 py-2 mt-6 font-bold rounded-xl w-[80%] hover:bg-green-500 hover:text-white ease-in-out duration-300 text-2xl"
          >
            Register
          </button>
        </div>
        <p className="text-white text-center ">
          Already have an account?
          <Link
            to="/login"
            className="hover:text-green-300 duration-200 ease-in-out underline ml-1"
          >
            Login
          </Link>
        </p>
      </form>
      
    </main>
  );
}

export default index;
