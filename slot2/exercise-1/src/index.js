import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from './NamePerson';
import PeopleList from './PeopleList';
import PeopleTable from './PeopleTable';
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import SortedPeopleList from './SortedPeopleList';
import GroupedByOccupation from './GroupedByOccupation';
import OldestAndYoungest from './OldestAndYoungest';
import AverageAgeByOccupation from './AverageAgeByOccupation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson/>
    <PeopleList/>
    <PeopleTable/>
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortedPeopleList/>
    <GroupedByOccupation/>
    <OldestAndYoungest/>
    <AverageAgeByOccupation/>
  </React.StrictMode>
);

reportWebVitals();
