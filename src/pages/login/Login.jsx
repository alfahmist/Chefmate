import MainLayout from "../../layout/MainLayout"
import { Link } from "react-router-dom"
import { FaUser,FaLock } from "react-icons/fa"

function index() {
  return (
    <MainLayout>
<main className="bg-slate-100 p-8 flex justify-center items-center ">

  <form action="" className="w-[420px] bg-lime-500 p-8 rounded-xl shadow-md shadow-emerald-800">
    <h1 className="text-3xl font-semibold text-center mb-6 text-white">Login</h1>
    <div className="my-4 relative">
      <input type="text" placeholder="username" required className="w-full rounded-xl px-6 py-2 border-2 " />
      <FaUser className="absolute top-[30%] right-[15px]" />
    </div>
    <div className="my-4 relative">
      <input type="password" placeholder="password" required className="w-full rounded-xl px-6 py-2 border-2 " />
      <FaLock className="absolute top-[30%] right-[15px]" />
    </div>

    <div className="flex justify-between text-white">
      <label htmlFor="check" className="cursor-pointer hover:text-green-300 duration-200 ease-in-out">  <input type="checkbox" id="check"/> Remember me</label>
      <Link to={''} className="hover:text-green-300 duration-200 ease-in-out">Forgot password?</Link>
    </div>
    <div className="flex items-center justify-center">
    <button type="submit" className="text-green-500 bg-white border-green-500  px-6 py-2 mt-6 font-bold rounded-xl w-[80%] hover:bg-green-500 hover:text-white ease-in-out duration-300 text-2xl">Login</button>
  </div>
  <p className="text-white text-center">Do you have an accound? <Link to={'/register'} className="hover:text-green-300 duration-200 ease-in-out">Register</Link> </p>
  </form>
<div>

</div>
</main>
    </MainLayout>
  )
}

export default index