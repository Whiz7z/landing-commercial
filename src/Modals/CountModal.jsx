import React, { useState } from "react";
import style from "./CountModal.module.scss";
import CrossSvg from "./../svgComponents/CrossSvg";
import useStore from "../store/store";

import InputMask from "react-input-mask";

const countries = [
  { code: "RU", dial_code: "+7" },
  { code: "UA", dial_code: "+380" },
  { code: "BL", dial_code: "+375" },

  // Add more countries and their dial codes here
];

function CountModal({ onClose }) {
  const { selectedItems, add, remove } = useStore((state) => ({
    selectedItems: state.selectedItems,
    add: state.add,
    remove: state.remove,
  }));

  const [countryCode, setCountryCode] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [number, setNumber] = useState("");
  const [openCodeSelect, setOpenCodeSelect] = useState(false);
  const closeModal = () => {
    onClose();
  };

  const sendPhoneNumber = () => {
    console.log(number);
    console.log(selectedItems);
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

        <div>
          <InputMask
            mask={`${countryCode.dial_code} (999) 999-99-99`}
            maskChar=" "
            placeholder={`${countryCode.dial_code} (_ _ _) _ _ _-_ _-_ _`}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
            {(inputProps) => (
              <div className={style.input_container}>
                <div
                  className={style.country_code_selected}
                  onClick={() => setOpenCodeSelect(true)}
                >
                  {countryCode.code}
                </div>
                {openCodeSelect && (
                  <div className={style.country_code_select} onMouseLeave={() => setOpenCodeSelect(false)}>
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setCountryCode(country);
                          setOpenCodeSelect(false);
                        }}
                      >
                        {country.code}
                        <span>{country.dial_code}</span>
                      </div>
                    ))}
                  </div>
                )}

                <input {...inputProps} type="tel" />
              </div>
            )}
          </InputMask>
        </div>

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

export default CountModal;
