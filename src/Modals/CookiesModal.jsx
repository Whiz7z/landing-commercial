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
          <LightingSvg fill={"white"} w="14px" h="18px" />
        </div>

        <p>
          Если продолжаете использовать
          <br className={style.br} /> наш интернет-сайт,
          <br className={style.brMobile} /> то вы полностью
          <br className={style.brDesktop} /> соглашаетесь
          <br className={style.brMobile} /> с{" "}
          <a href="#">
            условиями обработки
            <br className={style.br} /> персональных данных
            <br className={style.brMobile} /> и файлов куки
            <br className={style.brDesktop} /> (англ. “cookies”)
            <br className={style.brMobile} />
          </a>{" "}
          и подтверждаете,
          <br className={style.brDesktop} />
          <br className={style.brMobile} /> что ознакомлены c документом
        </p>

        <button className={style.btn} onClick={closeModal}>
          Подтвердить и закрыть
        </button>
        <p popovertarget="my-popover" className={style.copyright}>
          {/* ооо «энерго-точка» · огрн: 123456789012345 */}
          
        </p>

        
      </div>
    </div>
  );
}

export default CookiesModal;
