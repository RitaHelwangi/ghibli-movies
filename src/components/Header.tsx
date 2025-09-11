import { NavLink } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
	return (
		<header className="header">
			<h1>🍿Ghibli Movies🍿</h1>
		<nav className="nav-link">
		<ul>
		<NavLink to="/">Movies</NavLink>
		<NavLink to="/favorites">Favorites</NavLink>
		</ul>
		</nav>
		</header>
	);
}

export default Header;