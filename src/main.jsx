import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './variables.css';
import RouterApp from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
