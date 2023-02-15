import React from 'react'
// ajouter /client pour la 1.18
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'

// utiliser cette méthode pour la compatibilité 1.18 react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
