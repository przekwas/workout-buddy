import { Link } from 'react-router-dom';

// Image paths imported and represented by variables
import HelloThere from '../../../assets/hello-there.jpg';

export default function HeroSection() {
	return (
		<section
			className="hero vh-75"
			style={{
				backgroundImage: `url(${HelloThere})`
			}}
			aria-label="A workout tracking app">
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="text-center hero-content text-neutral-content">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there.</h1>
					<p className="py-6">
						Workout Buddy is your new digital partner for tracking workouts. With our
						emphasis on data collection, you'll have comprehensive insights into your
						performance right at your fingertips.
					</p>
					<p className="pb-6">
						Visualize your progress, identify your strengths, work on your weaknesses,
						and watch yourself improve. It's time to level up your fitness game!
					</p>
					<Link to="/login" className="btn btn-secondary">
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
}
