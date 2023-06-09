import { useState, useEffect } from 'react';
import { contexts } from '@/utils';
import LoaderCard from '../LoaderCard';
import Container from '../Container';

interface AuthProviderProps {
	children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
	const [auth, setAuth] = useState({
		loggedIn: false,
		checking: true
	});

	useEffect(() => {
		// validate token shit here
	}, []);

	if (auth.checking) {
		return (
			<Container>
				<LoaderCard length={3} size="vh-75" />
			</Container>
		);
	}

	return (
		<contexts.authContext.Provider value={[auth, setAuth]}>
			{children}
		</contexts.authContext.Provider>
	);
}
