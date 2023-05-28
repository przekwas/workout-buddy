import { Routes, Route } from 'react-router-dom';

import { Home } from '@/views';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
