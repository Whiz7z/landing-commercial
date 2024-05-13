import CheckCircle from "../../svgComponents/CheckCircle";
import RadioSvg from "../../svgComponents/RadioSvg";
import ProductItem from "../ProductItem/ProductItem";
import style from "./MainContent.module.scss";
import { Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence, transform } from "framer-motion";
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
import ConfirmModal from "../../Modals/ConfirmModal";
import useSendEmail from "../../hooks/useSenEmail";
import { smoothScroll } from "../../util/smoothScroll";
import SmoothScroll from "smooth-scroll";
import animateScrollTo from "animated-scroll-to";

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

const arrowVariants = {
  all: {
    y: 0,
  },
  slow: {
    y: 48,
  },
  fast: {
    y: 98,
  },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: {
      opacity: { duration: 0 },
      height: { duration: 0.3 },
    },
  },

  initial: {
    heightL: 50,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,

      opacity: { delay: 0.1, duration: 0.2 },
      height: { duration: 0.5 },
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

function MainContent() {
  const [currentType, setCurrentType] = useState("all");
  const [productType, setProductType] = useState("wall");

  const [countModal, setCountModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [openSelect, setOpenSelect] = useState(false);

  const [numberMobile, setNumberMobile] = useState("");
  const [hovered, setHovered] = useState(false);

  const [sendEmail] = useSendEmail();
  const calcRef = useRef(null);

  const closeTimeoutRef = useRef(null);

  const handleSelectOpen = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenSelect((prev) => !prev);
  };

  const closeSelect = () => {
    setOpenSelect(false);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closeSelect();
    }, 3500);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    ///setOpenSelect();
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const { selectedItems, add, remove } = useStore((state) => ({
    selectedItems: state.selectedItems,
    add: state.add,
    remove: state.remove,
  }));

  const chooseCurrent = (id) => {
    setCurrentType(currentTypes.find((item) => item.id === id).value);
    setOpenSelect(false);

    const element = document.getElementById("stations");

    if (element) {

      console.log('offset', element.offsetTop);
      // const scroll = new SmoothScroll(`<div id="stations"></div>`, {
      //   speed: 500,
      //   speedAsDuration: true,
      //   easing: "easeInOutCubic",
      // });
      // scroll.animateScroll(element.offsetTop - 120, { duration: 500 });

      //smoothScroll(element, 1000);

      window.scroll({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });

      //element.scrollIntoView({ behavior: "smooth", block: "start" });

      animateScrollTo(element.offsetTop - 140);


      console.log("off --- ", element.offsetTop);
      console.log("currentType", currentType);
    }
  };

  const sendProducts = () => {
    console.log(selectedItems);
    console.log(numberMobile);

    if (selectedItems.length === 0 || numberMobile.length < 8) {
      setConfirmModal(true);
      return;
    }

    const formattedString = selectedItems
      .map((device) => `${device.code} - ${device.title}`)
      .join("\n");
    console.log(formattedString);

    sendEmail(numberMobile, formattedString);

    setConfirmModal(true);
  };

  useEffect(() => {
    console.log("selectedItems", extractNumbers(numberMobile).length);
  }, [numberMobile]);

  return (
    <div className={style.container}>
      {countModal && <CountModal onClose={() => setCountModal(false)} />}
      {confirmModal && <ConfirmModal onClose={() => setConfirmModal(false)} />}

      <aside>
        <div className={style.chooseCurrent}>
          <h2>
            Электрические станции
            <br /> от производителя
          </h2>
          <p>более 10 моделей · более 50 комплектаций</p>
          <AnimatePresence>
            <motion.div
              initial="initial"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              name="current"
              id="current"
              value={currentType}
              className={style.select}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              onMouseEnter={handleMouseEnter}
            >
              {!openSelect && (
                <motion.div
                  className={`${style.selectPreview} ${
                    currentType !== "all" && style.activePreview
                  }`}
                  onClick={() => handleSelectOpen()}
                >
                  {currentTypes.find((item) => item.value == currentType)?.text}
                  <span>
                    <SelectArrowSvg />
                  </span>
                </motion.div>
              )}

              {/* <div onClick={() => handleSelectOpen()}>{currentTypes[0].text}</div> */}

              <motion.div
                className={style.select_container}
                initial="hidden"
                animate={openSelect ? "visible" : "hidden"}
                exit="hidden"
                variants={dropdownVariants}
              >
                {currentTypes.map((item) => (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={itemVariants}
                    key={item.id}
                    className={`${style.option} ${
                      item.checked ? `${style.active}` : `${style.nonactive}`
                    } ${item.value == "all" ? style.noArrow : null}`}
                    onClick={() => chooseCurrent(item.id)}
                    onMouseEnter={() => {
                      setHovered(item.value);
                    }}
                  >
                    {item.text}
                  </motion.div>
                ))}

                {/* {currentTypes.find((item) => item.value == currentType)?.text} */}
                <motion.span
                  initial={{ y: 0 }}
                  animate={
                    hovered === "all"
                      ? "all"
                      : hovered === "slow"
                      ? "slow"
                      : hovered === "fast"
                      ? "fast"
                      : currentType
                  }
                  variants={arrowVariants}
                  className={style.optionArrow}
                >
                  <SelectArrowSvg />
                </motion.span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
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
                mask={`+7 (999) 999-99-99`}
                maskChar=""
                placeholder="+7"
                value={numberMobile}
                onChange={(e) =>
                  setNumberMobile(extractNumbers(e.target.value))
                }
              >
                {(inputProps) => (
                  <div className={style.input_container}>
                    <input {...inputProps} type="tel" ref={calcRef} />
                  </div>
                )}
              </InputMask>
            </div>
            <button
              className={`${style.btnActive}`}
              onClick={() => sendProducts()}
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
          <a href="#" title={"настенные"}>
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
          <a href="#" title={"напольные"}>
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
            <a href="#" title={"портативные"}>
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
