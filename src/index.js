import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListStudents from "./cc1/part1/ListeStudents";
import ListePersonnalisable from "./cc1/part2/ListePersonnalisable";
import Login from "./tp/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div>
          <Login />
      </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
