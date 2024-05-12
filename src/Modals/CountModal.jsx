import React, { useState } from "react";
import style from "./CountModal.module.scss";
import CrossSvg from "./../svgComponents/CrossSvg";
import useStore from "../store/store";

import InputMask from "react-input-mask";
import useSendEmail from "../hooks/useSenEmail";
import CheckCircle from "../svgComponents/CheckCircle";
import TransparentCircle from "../svgComponents/TransparentCircle";

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

  const [sendEmail, submitting, success] = useSendEmail();
  const closeModal = () => {
    onClose();
  };

  const sendPhoneNumber = () => {
    console.log(number);
    console.log(selectedItems);
    const formattedString = selectedItems
      .map((device) => `${device.code} - ${device.title}`)
      .join("\n");
    console.log(formattedString);

    sendEmail(number, formattedString);

    setTimeout(() => {
      onClose();
    }, 2000);
    // onClose();
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

        {success ? (
          <p className={style.text}>
            Мы в ближайшие минуты
            <br /> с вами свяжемся и предоставим
            <br /> ответы на все ваши вопросы
          </p>
        ) : (
          <p className={style.text}>
            Напишите ваш номер телефона,
            <br /> чтобы предоставить ответы
            <br /> по всем вопросам и запросам
          </p>
        )}

        {success ? (
          <>
            <div className={style.doneIcon}>
              <TransparentCircle />
            </div>
            <span className={style.doneText}>Готово</span>
          </>
        ) : (
          <>
            <div>
              <InputMask
                // mask={`${countryCode.dial_code} 999 999 99 99`}
                mask={`+7 (999) 999-99-99`}
                maskChar=""
                // placeholder={`${countryCode.dial_code} _ _ _  _ _ _  _ _  _ _`}
                placeholder="+7"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              >
                {(inputProps) => (
                  <div className={style.input_container}>
                    {/* <div
                  className={style.country_code_selected}
                  onClick={() => setOpenCodeSelect(true)}
                >
                  {countryCode.code}
                </div>
                {openCodeSelect && (
                  <div
                    className={style.country_code_select}
                    onMouseLeave={() => setOpenCodeSelect(false)}
                  >
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
                )} */}

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
              Подтвердить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CountModal;
