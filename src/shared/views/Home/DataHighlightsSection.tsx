export default function DataHighlightsSection() {
	return (
		<section className="flex flex-col items-center justify-center py-20 vh-75">
			<div className="pb-5 text-2xl">
				We're here to <b>pump</b>{' '}
				<span role="img" aria-label="Clapping Hands">
					👏
				</span>{' '}
				you up!
			</div>
			<div className="mb-10 shadow-lg bg-primary text-primary-content stats stats-vertical lg:stats-horizontal">
				<StatsCard title="Total Weight" value={500} desc="pounds" />
				<StatsCard title="Total Sets" value={500} desc="sets" />
				<StatsCard title="Total Repetitions" value={500} desc="reps" />
			</div>
			<div className="pb-5 text-2xl">
				We're going the <i>distance</i>!{' '}
				<span role="img" aria-label="Person Running">
					🏃
				</span>
			</div>
			<div className="shadow-lg stats bg-primary text-primary-content stats-vertical lg:stats-horizontal">
				<StatsCard title="Total Time" value={500} desc="minutes" />
				<StatsCard title="Total Distance" value={500} desc="miles" />
				<StatsCard title="Total Calroies" value={500} desc="kcal burned" />
			</div>
		</section>
	);
}

interface StatsCardProps {
	title: string;
	value: number | string;
	desc: string;
}

function StatsCard({ title, value, desc }: StatsCardProps) {
	return (
		<div className="stat place-items-center">
			<div className="stat-title text-secondary-content">{title}</div>
			<div className="stat-value">{value}</div>
			<div className="stat-desc text-secondary-content">{desc}</div>
		</div>
	);
}
