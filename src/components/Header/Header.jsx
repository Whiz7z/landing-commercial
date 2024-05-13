import LightingSvg from "../../svgComponents/LightingSvg";
import NutSvg from "../../svgComponents/NutSvg";
import WrenchSvg from "../../svgComponents/WrenchSvg";
import style from "./Header.module.scss";
import PhoneSvg from "../../svgComponents/PhoneSvg";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


const Header = () => {
  const location = useLocation();

  const {pathname} = location;
  const phoneNumber = import.meta.env.VITE_PHONE ?? '447935867519';

  console.log(phoneNumber);

  useEffect(() => {
    // if current url contains #services - remove the hash
    console.log(location);
    if (
      location.hash.includes("#services") ||
      location.hash.includes("#details") ||
      location.hash.includes("#stations")
    ) {
      console.log("includes");
      window.location.hash = "";
    }
  }, [location]);
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
          <a href={`tel:${phoneNumber}`} className={style.callBtn}>
            <span>
              <PhoneSvg />
            </span>
            позвонить
          </a>
          <div className={style.contact}>
            <p className={style.contactText}>Быстрая связь с нами:</p>
            <p className={style.ourNumberText}>Наш номер</p>
            <span>+7 (495) 182-00-11 </span>
          </div>
        </section>

        <section className={style.headerBottom}>
          <div className={style.logo}>
            <a href="#">energotochka</a>
            <h2 className={style.subLogo}>электрические станции под ключ</h2>
          </div>
          <menu className={style.menu}>
            <li
              className={
                pathname === "/" || pathname === "/stations"
                  ? `${style.active}`
                  : `${style.nonActive}`
              }
            >
              <NavLink to="/stations#stations">
                <span className={style.icon}>
                  <LightingSvg  />
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
              <NavLink to="/services#services">
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
              <NavLink to="/details#details">
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
