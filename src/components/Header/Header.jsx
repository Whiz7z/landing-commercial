
import LightingSvg from '../../svgComponents/LightingSvg';
import NutSvg from '../../svgComponents/NutSvg';
import WrenchSvg from '../../svgComponents/WrenchSvg';
import style from './Header.module.scss'
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();

  console.log(pathname);
  return (
    <>
      <header className={style.headerContainer}>
        <section className={style.headerTop}>
          <div className={style.infoText}>
            <p>
              официальный представитель торгово-производственной компании
              <br /> и эксклюзивный дистрибьютор оборудования премиум-качества
              бренда «beny»
            </p>
          </div>
          <div className={style.contact}>
            <p>Быстрая связь с нами:</p>
            <span>+7 (495) 182-00-11 </span>
          </div>
        </section>
        <section className={style.headerBottom}>
          <div className={style.logo}>
            <a href="#">energotochka</a>
          </div>
          <menu className={style.menu}>
            <li
              className={
                pathname === "/" || pathname === "/stations"
                  ? `${style.active}`
                  : `${style.nonActive}`
              }
            >
              <NavLink to="/stations">
                <span className={style.icon}>
                  <LightingSvg />
                </span>
                станции
              </NavLink>
            </li>
            <li
              className={
                pathname === "/services"
                  ? `${style.active}`
                  : `${style.nonActive}`
              }
            >
              <NavLink to="/services">
                <span className={style.icon}>
                  <WrenchSvg />
                </span>
                услуги
              </NavLink>
            </li>
            <li
              className={
                pathname === "/details"
                  ? `${style.active}`
                  : `${style.nonActive}`
              }
            >
              <NavLink to="/details">
                <span className={style.icon}>
                  <NutSvg />
                </span>
                дополнительные детали
              </NavLink>
            </li>
          </menu>
        </section>
      </header>
    </>
  );
};

export default Header;
