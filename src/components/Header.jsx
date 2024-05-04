import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 bg-white w-full mx-auto flex gap-4 p-5 justify-center z-20 shadow-lg">
      <Link to={"/"}>Home</Link>
      <Link to={"/favorite"}>Favorite</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </nav>
  );
}

export default Header;
