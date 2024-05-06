import CPUSvg from "../../svgComponents/CPUSvg";
import LightingSvg from "../../svgComponents/LightingSvg";
import PlugsSvg from "../../svgComponents/PlugsSvg";
import ShieldSvg from "../../svgComponents/ShieldSvg";
import style from "./ProductItem.module.scss";
import PropTypes from "prop-types";

function ProductItem({image, title, code, tags }) {
  
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
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
                </span>
                <span
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: tag.text }}
                ></span>
              </span>
            ))}
        </div>
        <div className={style.actions}>
          <button className={style.chooseBtn}>Выбрать</button>
          <button className={style.phoneBtn}>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  code: PropTypes.string,
  tags: PropTypes.array,
};

export default ProductItem;
