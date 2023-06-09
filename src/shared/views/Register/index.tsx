import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaUserMinus } from 'react-icons/fa';
import { Container } from '@/components';
import { regex } from '@/utils';

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleRegister = () => {
		console.log('register');
	};

	return (
		<Container>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">First Name</span>
					</label>
					<input
						type="text"
						placeholder="Fox"
						autoComplete="given-name"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('firstName', {
							required: 'First name is required',
							maxLength: {
								value: 50,
								message: 'First name must be less than 50 characters'
							}
						})}
					/>
					{errors.firstName && (
						<label className="label">
							<span className="text-red-500 label-text-alt">
								{errors.firstName.message as string}
							</span>
						</label>
					)}
				</div>

				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Last Name</span>
					</label>
					<input
						type="text"
						placeholder="McCloud"
						autoComplete="family-name"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('lastName', {
							required: 'Last name is required',
							maxLength: {
								value: 50,
								message: 'Last name must be less than 50 characters'
							}
						})}
					/>
					{errors.lastName && (
						<label className="label">
							<span className="text-red-500 label-text-alt">
								{errors.lastName.message as string}
							</span>
						</label>
					)}
				</div>

				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Username</span>
					</label>
					<input
						type="text"
						placeholder="StarFox"
						autoComplete="username"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('username', {
							required: 'Username is required',
							maxLength: {
								value: 50,
								message: 'Username must be less than 50 characters'
							}
						})}
					/>
					{errors.username && (
						<label className="label">
							<span className="text-red-500 label-text-alt">
								{errors.username.message as string}
							</span>
						</label>
					)}
				</div>

				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="email"
						placeholder="fox@mccloud.com"
						autoComplete="email"
						maxLength={50}
						className="w-full max-w-xs input input-bordered"
						{...register('email', {
							required: 'Email is required',
							maxLength: {
								value: 50,
								message: 'Email must be less than 50 characters'
							},
							pattern: {
								value: regex.EMAIL_PATTERN,
								message: 'Invalid email format'
							}
						})}
					/>
					{errors.email && (
						<label className="label">
							<span className="text-red-500 label-text-alt">
								{errors.email.message as string}
							</span>
						</label>
					)}
				</div>

				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="20xxMultishine"
						autoComplete="new-password"
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
					{errors.password && (
						<label className="label">
							<span className="text-red-500 label-text-alt">
								{errors.password.message as string}
							</span>
						</label>
					)}
				</div>

				<button
					type="button"
					className="mt-5 btn btn-primary btn-wide"
					onClick={handleSubmit(handleRegister)}>
					Register
				</button>

				<div className="mt-8">
					Already have an account?
					<Link to="/login" className="ml-4 link link-secondary">
						<FaUserMinus className="inline-block mr-1 align-text-bottom" />
						Login here.
					</Link>
				</div>
			</form>
		</Container>
	);
}
