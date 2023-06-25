import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Registration from './pages/registration';
import Login from './pages/login';
import Choosing from './pages/choosing';
import XSS from './pages/XSS';
import SQL_injection from './pages/SQL_injection';

import '../src/styles/main.css';

const App = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  return (
    <div className="main_container">
      <Header />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choosing" element={<Choosing />} />
        <Route path="/xss" element={<XSS />} />
        <Route path="/sql_injection" element={<SQL_injection />} />
      </Routes>
    </div>
  );
};

export default App;
