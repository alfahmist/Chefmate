import { Link, useNavigate } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 bg-white w-full mx-auto flex gap-4 p-5 justify-center z-20 shadow-lg">
      <Link
        to={"/"}
        className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
      >
        Home
      </Link>
      <Link
        to={"/favorite"}
        className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
      >
        Favorite
      </Link>
      { !token ? '' :   
      <Link
      to={"/create-recipe"}
      className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
    >
      Create Recipe
    </Link> 
      }
      {token ? (
        <button
          onClick={handleLogout}
          className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
        >
          Logout
        </button>
      ) : (
        <>
          <Link
            to={"/login"}
            className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="hover:-translate-y-1 duration-200 ease-in-out text-xl mx-2"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Header;
