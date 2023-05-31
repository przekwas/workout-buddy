import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { Container } from '@/components';

const EMAIL_PATTERN =
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleLogin = () => {
		console.log('login');
	};

	return (
		<Container>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="email"
						placeholder="fox@mccloud.com"
						autoComplete="current-email"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('email', {
							required: 'Email is required',
							maxLength: {
								value: 50,
								message: 'Email must be less than 50 characters'
							},
							pattern: {
								value: EMAIL_PATTERN,
								message: 'Invalid email format'
							}
						})}
					/>
					<label className="label">
						{errors.email?.message && (
							<span className="text-red-500 label-text-alt">
								{errors.email.message as string}
							</span>
						)}
					</label>
				</div>

				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="20xxMultishine"
						autoComplete="current-password"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters long'
							},
							maxLength: {
								value: 50,
								message: 'Password must be less than 50 characters'
							}
						})}
					/>
					<label className="label">
						{errors.password?.message && (
							<span className="text-red-500 label-text-alt">
								{errors.password.message as string}
							</span>
						)}
					</label>
				</div>
				<button
					type="button"
					className="mt-5 btn btn-primary btn-wide"
					onClick={handleSubmit(handleLogin)}>
					Login
				</button>

				<div className="mt-8">
					Don't have an account?
					<Link to="/register" className="ml-4 link link-secondary">
						<FaUserPlus className="inline-block mr-1 align-text-bottom" />
						Register here.
					</Link>
				</div>
			</form>
		</Container>
	);
}
