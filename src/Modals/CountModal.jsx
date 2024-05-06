import React, { useState } from 'react'
import style from './CountModal.module.scss'
import CrossSvg from './../svgComponents/CrossSvg';

function CountModal({onClose}) {
  const [number , setNumber] = useState('')
  const closeModal = () => {
    onClose();
  }

  const sendPhoneNumber = () => {
    console.log(number)
    onClose();
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className={style.icon} onClick={closeModal}>
          <CrossSvg />
        </div>

        <div className={style.logo}>
          <a href="#">energotochka</a>
        </div>
        <h2>электрические станции под ключ</h2>

        <p className={style.text}>
          Напишите ваш номер телефона,
          <br /> чтобы вам перезвонить и ответить на все ваши вопросы и запросы
        </p>

        <input
          type="text"
          placeholder="Напишите номер телефона"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button
          className={`${style.btn} ${
            number.length > 7 ? style.active : style.nonActive
          }`}
          onClick={sendPhoneNumber}
          disabled={number.length < 8}
        >
          Подтвердить и отправить
        </button>
      </div>
    </div>
  );
}

export default CountModal