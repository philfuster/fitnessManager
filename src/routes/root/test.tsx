import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '.';
import './test.css';

export const testRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/test',
	component: () => {
		return (
			<>
				<div>
					<h1>Test</h1>
					<div className="card">
						<h3>Welcome to FakeApp</h3>
						<p>This is a test card.</p>
						<p>I want to see how the contrast looks</p>
						<div className="buttonContainer">
							<button type="button">Start tour</button>
							<button type="button">Omit</button>
						</div>
					</div>
				</div>
			</>
		);
	},
});
