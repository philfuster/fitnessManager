import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<h1>Fitness Manager</h1>
			<section>
				<p>Document your fitness journey here.</p>
				<p>
					Create Re-usable workout templates with the exercises you intend to perform. Detail the
					weight, repetitions, and sets for each exercise. Create workout instances from these
					templates and fill them out during/after your workout. Modify the current workout as
					necessary and view workout metrics to track your progress.
				</p>
			</section>
		</>
	);
}
