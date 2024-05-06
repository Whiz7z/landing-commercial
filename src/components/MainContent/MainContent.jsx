import CheckCircle from '../../svgComponents/CheckCircle';
import RadioSvg from '../../svgComponents/RadioSvg';
import ProductItem from '../ProductItem/ProductItem';
import style from './MainContent.module.scss'

import {productsFloorStation} from '../../data/products'


function MainContent() {
  return (
    <div className={style.container}>
      <aside>
        <div className={style.chooseCurrent}>
          <h2>
            Электрические станции
            <br /> от производителя
          </h2>
          <p>более 10 моделей · более 50 комплектаций</p>
          <select name="current" id="current">
            <option value="slow">Медленный переменный ток</option>
            <option value="fast">Быстрый фазовый ток</option>
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
          <button className={`${style.btnActive}`}>
            Рассчитать за 2 минуты
          </button>
        </div>
      </aside>
      <div className={style.mainContent}>
        <div className={style.topBar}>
          <div className={style.categories}>
            <menu>
              <li className={`${style.active}`}>
                <a href="#">
                  <span className={style.radio}>
                    <RadioSvg />
                  </span>
                  настенные
                </a>
              </li>
              <li className={`${style.nonactive}`}>
                <a href="#">
                  <span className={style.radio}>
                    <RadioSvg innerFill={"none"} />
                  </span>
                  напольные
                </a>
              </li>
              <li className={`${style.nonactive}`}>
                <a href="#">
                  <span className={style.radio}>
                    <RadioSvg innerFill={"none"} />
                  </span>
                  портативные
                </a>
              </li>
            </menu>
          </div>
          <div className={style.consult}>
            <span>
              <CheckCircle bg="#959595" />
            </span>
            <span>бесплатная консультация</span>
          </div>
        </div>
        <div className={style.products}>
          {productsFloorStation.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
          {productsFloorStation.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
          {productsFloorStation.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
          {productsFloorStation.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent