/* eslint-disable react-hooks/rules-of-hooks */
import img2 from "../../assets/img/resep/Dessert.jpg";
import img7 from "../../assets/img/resep/ayam.jpg";
import img8 from "../../assets/img/resep/daging.jpg";
import img9 from "../../assets/img/resep/sayur.jpg";

import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
import api from "../../services/api";

function index() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = response.data.data;

      localStorage.setItem("token", token);
      alert("Login success");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error("Error during login:", error.message);
      }
    }
  };

  return (
    <main className="bg-slate-100 p-8 flex justify-center items-center pt-16   ">
      <div className="w-[50%] flex flex-wrap  ">
        <div className="w-[45%] shadow-md shadow-black rounded-xl overflow-hidden m-1">
          <img src={img2} alt="Placeholder" className="w-full" />
        </div>
        <div className="w-[45%] shadow-md shadow-black rounded-xl overflow-hidden m-1">
          <img src={img7} alt="Placeholder" className="w-full" />
        </div>
        <div className="w-[45%] shadow-md shadow-black rounded-xl overflow-hidden m-1">
          <img src={img8} alt="Placeholder" className="w-full" />
        </div>
        <div className="w-[45%] shadow-md shadow-black rounded-xl overflow-hidden m-1">
          <img src={img9} alt="Placeholder" className="w-full" />
        </div>
      </div>

      <form
        onSubmit={handleLogin}
        action=""
        className="w-[420px] bg-lime-500 p-8 rounded-xl shadow-md shadow-emerald-800"
      >
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Login
        </h1>
        <div className="my-4 relative">
          <input
            type="email"
            placeholder="email"
            required
            className="w-full rounded-xl px-6 py-2 border-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="absolute top-[30%] right-[15px]" />
        </div>
        <div className="my-4 relative">
          <input
            type="password"
            placeholder="password"
            required
            className="w-full rounded-xl px-6 py-2 border-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="absolute top-[30%] right-[15px]" />
        </div>

        {/* <div className="flex justify-between text-white">
          <label
            htmlFor="check"
            className="cursor-pointer hover:text-green-300 duration-200 ease-in-out"
          >
            <input type="checkbox" id="check" /> Remember me
          </label>
          <Link
            to={""}
            className="hover:text-green-300 duration-200 ease-in-out"
          >
            Forgot password?
          </Link>
        </div> */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-green-500 bg-white border-green-500  px-6 py-2 mt-6 font-bold rounded-xl w-[80%] hover:bg-green-500 hover:text-white ease-in-out duration-300 text-2xl"
          >
            Login
          </button>
        </div>
        <p className="text-white text-center">
          Do you have an accound?{" "}
          <Link
            to={"/register"}
            className="hover:text-green-300 duration-200 ease-in-out"
          >
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}

export default index;
