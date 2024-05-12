import React from "react";
import style from "./ConfirmModal.module.scss";
import TransparentCircle from "../svgComponents/TransparentCircle";
function ConfirmModal({onClose}) {
  return (
    <div className={style.modalWrapper} onClick={onClose}>
      <div className={style.modal}>
        <span>
          <TransparentCircle w="25" h="25" />
        </span>
        <p>Готово</p>
      </div>
    </div>
  );
}

export default ConfirmModal;
