import { Outlet } from 'react-router'
import Navbar from './components/Header';


function App() {
	return (
		<div>
		
	<header>
	<Navbar />	
	</header>
	
		<Outlet />
		</div>
	);
}

export default App;