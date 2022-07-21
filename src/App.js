import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import VacancyForm from './components/forms/VacancyForm.component.jsx';
import Dashboard from './components/dashboard/dashboard.component.jsx';
import Sidebar from './components/sidebar/sidebar.component.jsx'
import FormInformation from './components/forms/FormInformation.component.jsx'
import CreateForm from './components/forms/CreateForm.component';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form-information" element={<FormInformation />} />
        <Route path="/create-form" element={<CreateForm />} />
      </Routes>

    </>
  );
}

export default App;
