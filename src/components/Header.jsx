import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="w-[80%] mx-auto flex gap-4 my-5 justify-center">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Header