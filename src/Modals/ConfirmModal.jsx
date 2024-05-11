import React from "react";
import style from "./ConfirmModal.module.scss";
function ConfirmModal({onClose}) {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <p>
          Мы в ближайшие минуты с вами свяжемся и предоставим ответы на все ваши
          вопросы
        </p>
        <button onClick={()=> onClose()}>Подтвердить и закрыть</button>
      </div>
    </div>
  );
}

export default ConfirmModal;
