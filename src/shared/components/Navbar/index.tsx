import { Link, NavLink } from 'react-router-dom';

import Container from '../Container';

export default function Navbar() {
	return (
		<div className="navbar">
			<Container>
				<div className="flex-1">
					<Link to="/" className="text-xl normal-case btn btn-ghost">
						WorkoutBuddy
					</Link>
				</div>
				<div className="flex-none">
					<ul className="px-1 menu menu-horizontal">
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) => (isActive ? 'active' : '')}>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}
