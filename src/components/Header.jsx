import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className='w-[80%] mx-auto flex gap-4 my-5 justify-center'>
			<Link to={'/'}>Home</Link>
			<Link to={'/favorite'}>Favorite</Link>
			<Link to={'/create-recipe'}>Create Recipe</Link>
			<Link to={'/login'}>Login</Link>
			<Link to={'/register'}>Register</Link>
		</nav>
	);
}

export default Header;
