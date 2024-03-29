import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';

// biome-ignore lint: Forbidden Null Assertion - root element is defined in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
