import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components';
import AppRoutes from './AppRoutes';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRoutes />
		</BrowserRouter>
	);
}
