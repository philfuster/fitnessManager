import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './index.css';

// biome-ignore lint: Forbidden Null Assertion - demoing
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
