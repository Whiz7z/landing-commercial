import CheckCircle from '../../svgComponents/CheckCircle';
import RadioSvg from '../../svgComponents/RadioSvg';
import ProductItem from '../ProductItem/ProductItem';
import style from './MainContent.module.scss'
import { Routes, Route } from "react-router-dom";

import {
  productsSlowCurrentStation,
  productsFastCurrentStation,
} from "../../data/products";
import { useEffect, useState } from 'react';
import CountModal from '../../Modals/CountModal';
import ProductList from '../MainContent/ProductList';


function MainContent() {

  const [currentType, setCurrentType] = useState('all')
  const [productType, setProductType] = useState("wall");

  const [countModal, setCountModal ] = useState(false);

  useEffect(() => {
    console.log(currentType);
  }, [currentType]);

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
          <select
            name="current"
            id="current"
            value={currentType}
            onChange={(e) => setCurrentType(e.target.value)}
            
          >
            <option value="all">Выберите тип тока</option>
            <option value="slow">Медленный переменный ток</option>
            <option value="fast">Быстрый постоянный ток</option>
          </select>
        </div>

        <div className={style.info}>
          <div className={style.lineContainer}>
            <span>
              <CheckCircle />
            </span>
            <div className={style.line}></div>
          </div>
          <h2>
            Выберите себе станцию,
            <br /> либо просто позвоните нам
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
            <span>
              <CheckCircle />
            </span>
            <div className={style.line}></div>
          </div>
          <h2>
            Рассчитаем стоимость
            <br /> станции <span>под ключ</span>
          </h2>
          <button
            className={`${style.btnActive}`}
            onClick={() => setCountModal(true)}
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
        <div className={style.products}>
          {/* {currentType === "slow"
            ? productsSlowCurrentStation
                .filter((el) => el.type === productType)
                .map((product, index) => (
                  <ProductItem key={index} {...product} />
                ))
            : productsFastCurrentStation
                .filter((el) => el.type === productType)
                .map((product, index) => (
                  <ProductItem key={index} {...product} />
                ))} */}
          <ProductList productType={productType} currentType={currentType}/>
        </div>
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


export default MainContent