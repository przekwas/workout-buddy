import { Routes, Route } from 'react-router-dom';

import { Home, Login, Register, Profile } from '@/views';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
