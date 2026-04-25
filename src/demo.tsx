import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmailBuilder } from './index';
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <EmailBuilder />
    </React.StrictMode>
);
