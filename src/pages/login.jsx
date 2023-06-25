import React from 'react';

import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="input_container">
      <div className="input_header_container">
        <h1 className="input_header">Добро пожаловать в /ИМЯ ПРОЕКТА/!</h1>
      </div>
      <h1 className="action_sign">авторизация</h1>
      <div className="input_container_inner">
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
        <p className="action_hdr">Еще нет аккаунта?</p>
        <h1
          className="action_ref"
          onClick={() => {
            navigate('/registration');
          }}>
          Зарегестрироваться
        </h1>
      </div>
      <button className="btn_input">
        <p className="btn_sign"> Войти</p>
      </button>
    </div>
  );
};

export default Login;
