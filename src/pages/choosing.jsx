import React from 'react';
import { useNavigate } from 'react-router-dom';

const Choosing = () => {
  const navigate = useNavigate();

  return (
    <div className="choosing_container">
      <div className="choosing_header_container">
        <h1 className="choosing_header">Выберите уязвимость:</h1>
      </div>
      <button
        className="choosing_btn"
        onClick={() => {
          navigate('/xss');
        }}>
        <p className="choosing_btn_sign">XSS</p>
      </button>
      <button
        className="choosing_btn"
        onClick={() => {
          navigate('/sql_injection');
        }}>
        <p className="choosing_btn_sign">SQL-инъекция</p>
      </button>
      <button className="choosing_btn">
        <p className="choosing_btn_sign">Непроизвольное исполнение кода</p>
      </button>
      <button className="choosing_btn">
        <p className="choosing_btn_sign">BruteForce</p>
      </button>
    </div>
  );
};

export default Choosing;
