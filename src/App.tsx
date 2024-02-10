import { StrictMode } from 'react';
import './App.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routes/__root.tsx';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return (
		<>
			<StrictMode>
				<RouterProvider router={router} />
			</StrictMode>
		</>
	);
}

export default App;
