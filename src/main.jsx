import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './App.jsx';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.render(
	<React.StrictMode>
		<Helmet>
			<title>Amedseg | Clínica Médica e Serviços de Saúde</title>
		</Helmet>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
