import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import VacancyForm from './components/form/vacancyForm.component.jsx';
import Dashboard from './components/dashboard/dashboard.component.jsx';
import SideBar from './components/sideBar/sideBar.component.jsx'
import FormInformation from './components/form/formInformation.component.jsx'

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Form-information" element={<FormInformation />} />
      </Routes>

    </>
  );
}

export default App;
