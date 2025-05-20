import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exercise1 from './Exercise1';
import EmployeeList from './Exercise2';
import EmployeeTable from './Exercise3';
import AverageAgeDisplay from './Exercise4';
import EmployeeDropdown from './Exercise5';
import ITEmployeeList from './Exercise6';
import SortedEmployeeList from './Exercise7';
import GroupedEmployeeList from './Exercise8';
import TeenagerCheck from './Exercise9';
import EmployeeSearch from './Exercise10';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Exercise1/>
   <EmployeeList/>
   <EmployeeTable/>
   <AverageAgeDisplay/>
   <EmployeeDropdown/>
   <ITEmployeeList/>
    <SortedEmployeeList/>
  <GroupedEmployeeList/>
  <TeenagerCheck/>
  <EmployeeSearch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
