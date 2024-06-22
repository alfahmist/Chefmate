import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 bg-white w-full mx-auto flex gap-4 p-5 justify-center z-20 shadow-lg">
      <Link to={"/"} className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2">Home</Link>
      <Link to={"/favorite"} className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2">Favorite</Link>
      <Link to={"/create-recipe"} className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2">Create Recipe</Link>
      <Link to={"/login"} className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2">Login</Link>
      <Link to={"/register"} className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2">Register</Link>
    </nav>
  );
}

export default Header;
