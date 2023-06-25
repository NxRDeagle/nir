import React from 'react';

import '../styles/main.css';
import logoImg from '../img/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="head_container">
        <div className="head_leftside">
          <h1 className="head_name">/ИМЯ ПРОЕКТА/</h1>
          <img className="logo" src={logoImg} />
        </div>
        <ul className="nav_list">
          <li className="nav_element">
            <button
              className="nav_button"
              onClick={() => {
                navigate('/registration');
              }}>
              <p className="nav_sign">ВХОД / РЕГИСТРАЦИЯ</p>
            </button>
          </li>
          <li className="nav_element">
            <button
              className="nav_button"
              onClick={() => {
                navigate('/choosing');
              }}>
              <p className="nav_sign">ТЕСТ УЯЗВИМОСТИ</p>
            </button>
          </li>
          <li className="nav_element">
            <button className="nav_button">
              <p className="nav_sign">ПОМОЩЬ</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
