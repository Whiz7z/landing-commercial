import CheckCircle from "../../svgComponents/CheckCircle";
import RadioSvg from "../../svgComponents/RadioSvg";
import ProductItem from "../ProductItem/ProductItem";
import style from "./MainContent.module.scss";
import { Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  productsSlowCurrentStation,
  productsFastCurrentStation,
} from "../../data/products";
import { useEffect, useRef, useState } from "react";
import CountModal from "../../Modals/CountModal";
import ProductList from "../MainContent/ProductList";
import SelectArrowSvg from "../../svgComponents/SelectArrowSvg";

import useStore from "../../store/store";
import InputMask from "react-input-mask";
import CheckLineSvg from "../../svgComponents/CheckLineSvg";
import GradientLineSvg from "../../svgComponents/GradientLineSvg";

let currentTypes = [
  {
    id: 1,
    value: "all",
    text: "Выберите тип тока",
  },
  {
    id: 2,
    value: "slow",
    text: "Медленный переменный ток",
  },
  {
    id: 3,
    value: "fast",
    text: "Быстрый постоянный ток",
  },
];

const countries = [
  { code: "RU", dial_code: "+7" },
  { code: "UA", dial_code: "+380" },
  { code: "BL", dial_code: "+375" },

  // Add more countries and their dial codes here
];

function extractNumbers(phoneNumber) {
  return phoneNumber.replace(/\D/g, ""); // \D matches any non-digit character and replaces it with ''
}

function MainContent() {
  const [currentType, setCurrentType] = useState("all");
  const [productType, setProductType] = useState("wall");

  const [number, setNumber] = useState("");

  const [countModal, setCountModal] = useState(false);

  const [openSelect, setOpenSelect] = useState(false);

  const [countryCode, setCountryCode] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberMobile, setNumberMobile] = useState("");
  const [openCodeSelect, setOpenCodeSelect] = useState(false);
  const calcRef  = useRef(null);

  const { selectedItems, add, remove } = useStore((state) => ({
    selectedItems: state.selectedItems,
    add: state.add,
    remove: state.remove,
  }));

  const openTypeSelect = () => {
    setOpenSelect(true);
  };

  const chooseCurrent = (id) => {
    setCurrentType(currentTypes.find((item) => item.id === id).value);
    setOpenSelect(false);

    console.log("currentType", currentType);
  };

  const sendProducts =() => {
    console.log(selectedItems);
    console.log(numberMobile);
  }
  useEffect(() => {
    console.log("selectedItems", extractNumbers(numberMobile).length);
  }, [numberMobile]);

  return (
    <div className={style.container}>
      {countModal && <CountModal onClose={() => setCountModal(false)} />}

      <aside>
        <div className={style.chooseCurrent}>
          <h2>
            Электрические станции
            <br /> от производителя
          </h2>
          <p>более 10 моделей · более 50 комплектаций</p>
          <div
            name="current"
            id="current"
            value={currentType}
            className={style.select}
            onMouseLeave={() => setOpenSelect(false)}
          >
            {!openSelect && (
              <div
                className={style.selectPreview}
                onClick={() => openTypeSelect(true)}
              >
                {currentTypes.find((item) => item.value == currentType)?.text}
                <span>
                  <SelectArrowSvg />
                </span>
              </div>
            )}

            {openSelect
              ? currentTypes.map((item) => (
                  <div
                    key={item.id}
                    className={`${style.option} ${
                      item.checked ? `${style.active}` : `${style.nonactive}`
                    }`}
                    onClick={() => chooseCurrent(item.id)}
                  >
                    {item.text}
                    <span>
                      <SelectArrowSvg />
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>

        <div className={style.info}>
          <div className={style.lineContainer}>
            {/* <span>
              <CheckCircle />
            </span>
            <div className={style.line}></div> */}
            <CheckLineSvg />
          </div>
          <h2>
            Выберите себе станцию, <br />
            либо просто позвоните нам
          </h2>
          <ul>
            <li>
              <span className={style.circle}></span>
              <p>
                покажем все станции,
                <br /> под ваши цели и нужды
              </p>
            </li>
            <li>
              <span className={style.circle}></span>
              <p>
                с полным сопровождением,
                <br /> обучением и монтажом
              </p>
            </li>
          </ul>
        </div>

        <div className={style.calculate}>
          <div className={style.lineContainer}>
            {/* <span className={style.checkContainer}>
              <CheckCircle />
            </span>
            <span style={{ width: "100%" }} className={style.spanLineContainer}>
              <GradientLineSvg />
            </span> */}
            <CheckLineSvg />
          </div>
          <h2>
            Рассчитаем стоимость
            <br /> станции <span>под ключ</span>
          </h2>
          <div className={style.mobile_calc} id="calc">
            <div>
              <InputMask
                mask={`${countryCode.dial_code} 999 999 99 99`}
                maskChar=""
                placeholder={`${countryCode.dial_code} _ _ _  _ _ _  _ _  _ _`}
                value={numberMobile}
                onChange={(e) =>
                  setNumberMobile(extractNumbers(e.target.value))
                }
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
                    )}

                    <input {...inputProps} type="tel" ref={calcRef} />
                  </div>
                )}
              </InputMask>
            </div>
            <button
              className={`${
                style.btnActive
              }`}
              onClick={() => sendProducts()}
              // disabled={selectedItems.length === 0 || numberMobile.length < 8}
            >
              Рассчитать за 2 минуты
            </button>
          </div>
          <button
            className={`${
              selectedItems.length > 0 ? style.btnActive : style.btnNonActive
            } ${style.desktop_calc}`}
            onClick={() => setCountModal(true)}
            disabled={selectedItems.length === 0}
          >
            Рассчитать за 2 минуты
          </button>
        </div>
      </aside>

      <div className={style.mainContent}>
        <div className={style.topBar}>
          <Routes>
            <Route
              path="/"
              element={
                <StationsCategories
                  onProductTypeChange={setProductType}
                  productType={productType}
                />
              }
              exact
            ></Route>

            <Route
              path="/stations"
              element={
                <StationsCategories
                  onProductTypeChange={setProductType}
                  productType={productType}
                  currentType={currentType}
                />
              }
              exact
            ></Route>
            <Route
              path="/services"
              element={<ServicesCategories />}
              exact
            ></Route>
            <Route
              path="/details"
              element={<DetailsCategories />}
              exact
            ></Route>
          </Routes>
          <div className={style.consult}>
            <span>
              <CheckCircle bg="#959595" />
            </span>
            <span>бесплатная консультация</span>
          </div>
        </div>
        <ProductList
          productType={productType}
          currentType={currentType}
          calcRef={calcRef}
        />
      </div>
    </div>
  );
}

const StationsCategories = ({
  onProductTypeChange,
  productType,
  currentType,
}) => {
  const changeProductType = (productType) => {
    onProductTypeChange(productType);
  };

  return (
    <div className={style.categories}>
      <ul>
        <li
          className={
            productType === "wall" ? `${style.active}` : `${style.nonactive}`
          }
          onClick={() => changeProductType("wall")}
        >
          <a href="#">
            <span className={style.radio}>
              <RadioSvg innerFill={productType === "wall" ? null : "none"} />
            </span>
            настенные
          </a>
        </li>
        <li
          className={
            productType === "floor" ? `${style.active}` : `${style.nonactive}`
          }
          onClick={() => changeProductType("floor")}
        >
          <a href="#">
            <span className={style.radio}>
              <RadioSvg innerFill={productType === "floor" ? null : "none"} />
            </span>
            напольные
          </a>
        </li>
        {currentType === "fast" ? null : (
          <li
            className={
              productType === "portable"
                ? `${style.active}`
                : `${style.nonactive}`
            }
            onClick={() => changeProductType("portable")}
          >
            <a href="#">
              <span className={style.radio}>
                <RadioSvg
                  innerFill={productType === "portable" ? null : "none"}
                />
              </span>
              портативные
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

const DetailsCategories = () => {
  return (
    <div className={style.categories}>
      <ul>
        <li className={style.disabled}>
          <span className={style.radio}>
            <RadioSvg innerFill={"#959595"} outerFill={"#959595"} />
          </span>
          кабели
        </li>
        <li className={style.disabled}>
          <span className={style.radio}>
            <RadioSvg innerFill={"#959595"} outerFill={"#959595"} />
          </span>
          блоки
        </li>
      </ul>
    </div>
  );
};

const ServicesCategories = () => {
  return (
    <div className={style.categories}>
      <ul>
        <li className={style.disabled}>
          <span className={style.radio}>
            <RadioSvg innerFill={"#959595"} outerFill={"#959595"} />
          </span>
          ремонтирование
        </li>
        <li className={style.disabled}>
          <span className={style.radio}>
            <RadioSvg innerFill={"#959595"} outerFill={"#959595"} />
          </span>
          монтирование
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
