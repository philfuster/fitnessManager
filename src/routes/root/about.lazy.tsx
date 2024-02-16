import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/about')({
	component: About,
});

function About() {
	return (
		<>
			<h1>About Fitness Manager</h1>
			<p>
				Welcome to Fitness Manager, a tool for managing your fitness routines and goals. Here you
				can create <em>exercises</em> and incorporate them in <em>workouts</em>. Whenever you are
				ready to workout, you can choose one of your pre-defined workouts or create one on the fly,
				and start training and tracking your progress.
			</p>
			<p>
				Workouts don't always go as planned. Maybe you feel like doing different workouts, certain
				machines are taken, or maybe the number of sets/reps or amount of weight change. You can
				add, remove, and modify exercises on the fly.
			</p>
			<p>
				When you are done working out, make sure to end it, and you can see the results of your
				training. You can see the exercises you did, the number of sets/reps, and the weight you
				used.
			</p>
			<p>
				As the number of workouts you perform increase, you will be able to view the numbers behind
				your training and see the progress you have made. For example, for an individual exercise,
				you can see the number of repetitions you have performed, the sets, the max weight, and the
				average weight across all your workouts.
			</p>
		</>
	);
}
