import React from "react";
import style from "./CookiesModal.module.scss";
import LightingSvg from "../svgComponents/LightingSvg";
function CookiesModal({ onClose }) {
  const closeModal = () => {
    onClose();
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
          <div className={style.icon}>
            <LightingSvg fill={"white"} w="14px" h='14px' />
          </div>

          <p>
            Если продолжаете использовать наш интернет-сайт, то вы полностью
            соглашаетесь с{" "}
            <a href="#">
              условиями обработки персональных данных и файлов куки (англ.
              “cookies”)
            </a>{" "}
            и подтверждаете, что ознакомлены c документом
          </p>

          <button className={style.btn} onClick={closeModal}>
            Подтвердить и закрыть
          </button>
          <p className={style.copyright}>
            ооо «энерго-точка» · огрн: 123456789012345
          </p>
      </div>
    </div>
  );
}

export default CookiesModal;
