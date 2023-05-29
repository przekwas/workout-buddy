import { BsCode, BsGithub } from 'react-icons/bs';

// Image paths imported and represented by variables
import Headshot from '../../../assets/headshot.jpg';

export default function DevTeamSection() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-base-100">
			<div className="flex flex-col items-center justify-center my-10 md:my-20">
				<h2 className="pb-5 text-5xl font-bold">About Me.</h2>
				<figure>
					<img className="mask mask-hexagon" src={Headshot} alt="Luke's headshot" />
				</figure>
				<div className="shadow-xl card w-96 bg-base-300">
					<div className="card-body">
						<h3 className="card-title">Luke Przekwas</h3>
						<div className="flex items-center">
							<div className="mr-1 badge badge-sm badge-primary badge-outline">
								Codes
							</div>
							<div className="mr-1 badge badge-sm badge-primary badge-outline">
								Enthusiastic
							</div>
							<div className="mr-1 badge badge-sm badge-secondary badge-outline">
								Loud
							</div>
							<div className="badge badge-sm badge-secondary badge-outline">Dork</div>
						</div>
						<p className="pb-5">
							Ten years a barista and now four years a developer. I love playing and
							watching competetive Super Smash Bros. Melee and speedrunning Super
							Punch Out. I've started working out for my health (mental and physical)
							recently, and this application is a side project of mine.
						</p>
						<div className="items-center justify-between card-actions">
							<a
								href="https://github.com/przekwas"
								target="_blank"
								rel="noreferrer noopener"
								className="gap-2 btn btn-outline">
								My Github
								<BsGithub className="w-8 h-8" />
							</a>
							<a
								href="https://github.com/przekwas/workout-tracker"
								target="_blank"
								rel="noreferrer noopener"
								className="gap-2 btn btn-outline">
								This Repo
								<BsCode className="w-8 h-8" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
