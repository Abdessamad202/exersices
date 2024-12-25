import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap';

import reportWebVitals from './reportWebVitals';
import Form from './tp/form/Form';
import Controlled from './tp/form/Controlled';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Controlled />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
