import { createRoot } from 'react-dom/client'

import App from './app.jsx'
import './style.css'

const root = createRoot(document.getElementById('app'));

root.render(
    <App />
)
