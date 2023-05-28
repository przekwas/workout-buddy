import { BsCode, BsGithub, BsMailbox } from 'react-icons/bs';

// Shared components
import { Container } from '@/components';

// Decomposed components
import HeroSection from './HeroSection';

// Image paths imported and represented by variables
import Headshot from '../../../assets/headshot.jpg';
import DataHighlightsSection from './DataHighlightsSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<DataHighlightsSection />
			<div className="flex items-center justify-center min-h-screen bg-base-100">
				<div className="flex flex-col items-center justify-center my-10 md:my-20">
					<h2 className="pb-5 text-5xl font-bold">About Me.</h2>
					<figure>
						<img className="mask mask-hexagon" src={Headshot} alt="Luke's headshot" />
					</figure>
					<div className="shadow-xl card w-96 bg-base-100">
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
								<div className="badge badge-sm badge-secondary badge-outline">
									Dork
								</div>
							</div>
							<p className="pb-5">
								Ten years a barista and now four years a developer. I love playing
								and watching competetive Super Smash Bros. Melee and speedrunning
								Super Punch Out. I've started working out for my health (mental and
								physical) recently, and this application is a side project of mine.
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
			<div className=" bg-primary-content">
				<Container>
					<div className="min-h-screen hero text-base-100">
						<div className="flex-col hero-content lg:flex-row-reverse">
							<div className="max-w-sm rounded-lg shadow-2xl mockup-code">
								<pre data-prefix="$">
									<code>npm i working-on-it</code>
								</pre>
								<pre data-prefix=">" className="text-success-content">
									<code>installing...</code>
								</pre>
								<pre data-prefix=">" className="bg-warning text-warning-content">
									<code>Error, dev is human!</code>
								</pre>
							</div>
							<div>
								<h1 className="text-5xl font-bold">Notice a bug?</h1>
								<p className="py-6">
									There's probably ... a lot! I code a lot and don't bother
									testing like a <i>real</i> professional developer (
									<span role="img" aria-label="Eyes">
										👀
									</span>
									). Shoot me an email (<b>luke@covalence.io</b>) or open an issue
									on GitHub! Or hell, fix it yourself and submit a pull request.{' '}
									<span role="img" aria-label="Folded Hands">
										🙏
									</span>
								</p>
								<button
									onClick={() =>
										(window.location.href =
											'mailto:luke@covalence.io?subject=Your+Code+Sucks%2C+Idiot.')
									}
									className="gap-2 btn btn-primary">
									Email Me
									<BsMailbox className="w-6 h-6" />
								</button>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
