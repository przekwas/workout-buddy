export default function DataHighlightsSection() {
	return (
		<section
			className="flex flex-col items-center justify-center py-20 vh-75">
			<div className="pb-5 text-2xl">
				We're here to <b>pump</b>{' '}
				<span role="img" aria-label="Clapping Hands">
					👏
				</span>{' '}
				you up!
			</div>
			<div className="mb-10 shadow-lg stats stats-vertical lg:stats-horizontal">
				<div className="stat place-items-center">
					<div className="stat-title">Total Weight</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">pounds</div>
				</div>
				<div className="stat place-items-center">
					<div className="stat-title">Total Sets</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">sets</div>
				</div>
				<div className="stat place-items-center">
					<div className="stat-title">Total Repetitions</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">reps</div>
				</div>
			</div>
			<div className="pb-5 text-2xl">
				We're going the <i>distance</i>!{' '}
				<span role="img" aria-label="Person Running">
					🏃
				</span>
			</div>
			<div className="shadow-lg stats stats-vertical lg:stats-horizontal">
				<div className="stat place-items-center">
					<div className="stat-title">Total Time</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">minutes</div>
				</div>
				<div className="stat place-items-center">
					<div className="stat-title">Total Distance</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">miles</div>
				</div>
				<div className="stat place-items-center">
					<div className="stat-title">Total Calories</div>
					<div className="stat-value">{500}</div>
					<div className="stat-desc">kcal burned</div>
				</div>
			</div>
		</section>
	);
}
