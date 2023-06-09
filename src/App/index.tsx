import { BrowserRouter } from 'react-router-dom';
import { Navbar, AuthProvider } from '@/components';
import AppRoutes from './AppRoutes';

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<AppRoutes />
			</AuthProvider>
		</BrowserRouter>
	);
}
