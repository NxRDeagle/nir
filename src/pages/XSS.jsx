import React from 'react';

const XSS = () => {
  return (
    <div className="XSS_container">
      <div className="choosing_header_container">
        <h1 className="choosing_header">
          Уязвимость <strong>"XSS"</strong>
        </h1>
      </div>
      <div className="XSS_container_inner">
        <div className="description_container">
          <h1 className="description_header">Описание</h1>
          <p className="description">/Здесь описание уязвимости/</p>
        </div>
        <div className="instruction_container">
          <h1 className="instruction_header">Инструкция</h1>
          <p className="instruction">/Здесь инструкция по уязвимости/</p>
        </div>
      </div>
      <div className="split"></div>
      <div className="attack_container">
        <h1 className="attack_header">Атака</h1>

        <h1 className="attack_header_action">Заполнение таблицы данными</h1>
        <div className="filling_container">
          <p className="input_left_sign" id="kolvo">
            Кол-во записей:
          </p>
          <input type="text" id="filling" className="filling_input" required maxLength="6" />
        </div>
        <button className="choosing_btn">
          <p className="choosing_btn_sign" id="fill_btn">
            Заполнить
          </p>
        </button>
      </div>
      <div className="split"></div>
      <div className="defense_container">
        <h1 className="defense_header">Защита</h1>

        <div className="regular_container">
          <p className="input_left_sign" id="regular_sign">
            Регулярное выражение:
          </p>
          <input type="text" id="regular" className="input_box" required />
        </div>
        <div className="regular_container">
          <p className="input_left_sign" id="nick_sign">
            Ник:
          </p>
          <input type="text" id="nick" className="input_box" />
        </div>
        <div className="regular_container">
          <p className="input_left_sign" id="review_sign">
            Отзыв:
          </p>
          <input type="text" id="review" className="input_box" />
        </div>
        <button className="choosing_btn">
          <p className="choosing_btn_sign" id="send_btn">
            Отправить
          </p>
        </button>
      </div>
      <div className="split"></div>
      <div className="reviews_container">
        <p>/тут будут отзывы/</p>
      </div>
    </div>
  );
};

export default XSS;
