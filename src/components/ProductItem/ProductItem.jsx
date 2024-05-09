import CPUSvg from "../../svgComponents/CPUSvg";
import LightingSvg from "../../svgComponents/LightingSvg";
import NutSvg from "../../svgComponents/NutSvg";
import PlugsSvg from "../../svgComponents/PlugsSvg";
import ShieldSvg from "../../svgComponents/ShieldSvg";
import WrenchSvg from "../../svgComponents/WrenchSvg";
import style from "./ProductItem.module.scss";
import PropTypes from "prop-types";

import useStore from "../../store/store";
import PhoneSvg from "../../svgComponents/PhoneSvg";

function ProductItem({ image, title, code, tags, generalType, calcRef }) {
  const { selectedItems, add, remove } = useStore((state) => ({
    selectedItems: state.selectedItems,
    add: state.add,
    remove: state.remove,
  }));

  const scrollToCall = () => {
    window.scroll(0, calcRef.current.offsetParent.offsetTop - 120, {
      behavior: "smooth",
    })

    setTimeout(() => {
      calcRef.current.focus();
    }, 500);
  };

  const callPhone =() =>[
    window.location.href = `tel:${import.meta.env.VITE_PHONE}`
  ]

  return (
    <div className={style.container}>
      <div className={` ${style.imageWrapper} ${style[generalType]}`}>
        <img src={image} alt="product" />
      </div>
      <div className={style.info}>
        <h3>{title}</h3>
        <p>
          артикул: <span>{code} </span>
        </p>
        <div className={style.tags}>
          {tags &&
            tags.map((tag, index) => (
              <span key={index} className={style.tag}>
                <span className={style.icon}>
                  {tag.icon === "lightning" && (
                    <LightingSvg w="12.31px" h="14.06px" fill="#757f7b" />
                  )}
                  {tag.icon === "shield" && (
                    <ShieldSvg w="11.25px" h="11.25px" fill="#757f7b" />
                  )}
                  {tag.icon === "plugs" && (
                    <PlugsSvg w="13.13px" h="13.13px" fill="#757f7b" />
                  )}
                  {tag.icon === "cpu" && (
                    <CPUSvg w="13.13px" h="13.13px" fill="#757f7b" />
                  )}
                  {tag.icon === "nut" && (
                    <NutSvg w="12.19px" h="13.13px" fill="#757f7b" />
                  )}
                  {tag.icon === "wrench" && (
                    <WrenchSvg w="12.15px" h="12.15px" fill="#757f7b" />
                  )}
                </span>
                <span
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: tag.text }}
                ></span>
              </span>
            ))}
        </div>

        {generalType === "stations" && (
          <div className={style.actions}>
            <button
              className={`${style.chooseBtn} ${
                selectedItems.find((item) => item.code === code)
                  ? style.choosedBtn
                  : null
              }`}
              onClick={() =>
                selectedItems.find((item) => item.code === code)
                  ? remove(code)
                  : add(code, title)
              }
            >
              {selectedItems.find((item) => item.code === code)
                ? "Выбрано"
                : "Выбрать"}
            </button>
            <button className={style.phoneBtn}>Заказать звонок</button>
            <button className={style.callBtn} onClick={() => callPhone()}>
              <PhoneSvg />
            </button>
          </div>
        )}

        {generalType === "services" && (
          <div className={style.actions}>
            <button
              className={`${style.chooseBtn} ${style.consultMe}`}
              onClick={() => callPhone()}
            >
              Проконсультировать меня
            </button>
          </div>
        )}

        {generalType === "details" && (
          <div className={style.actions}>
            <button
              className={`${style.chooseBtn} ${
                selectedItems.find((item) => item.code === code)
                  ? style.choosedBtn
                  : null
              }`}
              onClick={() =>
                selectedItems.find((item) => item.code === code)
                  ? remove(code)
                  : add(code, title)
              }
            >
              {selectedItems.find((item) => item.code === code)
                ? "Выбрано"
                : "Выбрать"}
            </button>
            <button className={style.phoneBtn} onClick={() => callPhone()}>
              Позвонить нам
            </button>
            <button className={style.callBtn} onClick={() => callPhone()}>
              <PhoneSvg />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  code: PropTypes.string,
  tags: PropTypes.array,
  generalType: PropTypes.any,
  calcRef: PropTypes.any,
};

export default ProductItem;
