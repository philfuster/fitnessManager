import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/roadmap')({ component: Roadmap });

function Roadmap() {
	return (
		<>
			<h2>Fitness Manager's Roadmap</h2>
			<h3>Complete</h3>
			<ul>
				<li>Basic UI</li>
				<li>Basic Routing</li>
			</ul>
			<h3>On the Roadmap</h3>
			<ul>
				<li>Create Workout Template</li>
				<li>Add Exercises to Workout Templates</li>
				<li>Create Workout Template Instance and fill out</li>
				<li>Modify Workout Template Instance</li>
				<li>
					Create Workout metrics by analyzing workouts individually and the exercises included.
					Track things like total weight lifted, total reps, total sets, average weight lifted,
					average reps, average sets, etc. For workouts and maybe in total/across workouts.
				</li>
				<li>Calendar feature to plan out exercises in advance</li>
			</ul>
		</>
	);
}

export default Route;
