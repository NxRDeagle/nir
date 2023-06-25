import React from 'react';

import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="input_container">
      <div className="input_header_container">
        <h1 className="input_header">Добро пожаловать в /ИМЯ ПРОЕКТА/!</h1>
      </div>
      <h1 className="action_sign">регистрация</h1>
      <div className="input_container_inner">
        <div className="input_container_element">
          <p className="input_left_sign">Имя:</p>
          <input
            className="input_box"
            type="text"
            id="name"
            name="name"
            required
            minLength="2"
            maxLength="20"
          />
        </div>
        <div className="input_container_element">
          <p className="input_left_sign">Фамилия:</p>
          <input
            className="input_box"
            type="text"
            id="surname"
            name="surname"
            required
            minLength="2"
            maxLength="20"
          />
        </div>
        <div className="input_container_element">
          <p className="input_left_sign">Никнейм:</p>
          <input
            className="input_box"
            type="text"
            id="nickname"
            name="nickname"
            required
            minLength="4"
            maxLength="12"
          />
        </div>
        <div className="input_container_element">
          <p className="input_left_sign">Номер телефона:</p>
          <input className="input_box" type="tel" id="tel" name="tel" required />
        </div>
        <div className="input_container_element">
          <p className="input_left_sign">Пароль:</p>
          <input
            className="input_box"
            type="password"
            id="pswrd"
            name="pswrd"
            required
            minLength="6"
            maxLength="12"
          />
        </div>
      </div>
      <div className="action_div">
        <p className="action_hdr">Ужe есть аккаунт?</p>
        <h1
          className="action_ref"
          onClick={() => {
            navigate('/login');
          }}>
          Войти
        </h1>
      </div>
      <button className="btn_input">
        <p className="btn_sign"> Зарегистрироваться</p>
      </button>
    </div>
  );
};

export default Registration;
