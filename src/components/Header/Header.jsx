
import LightingSvg from '../../svgComponents/LightingSvg';
import NutSvg from '../../svgComponents/NutSvg';
import WrenchSvg from '../../svgComponents/WrenchSvg';
import style from './Header.module.scss'

const Header = () => {
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
            <li className={`${style.active}`}>
              <a href="#">
                <span className={style.icon}>
                  <LightingSvg />
                </span>
                станции
              </a>
            </li>
            <li className={`${style.nonActive}`}>
              <a href="#">
                <span className={style.icon}>
                  <WrenchSvg />
                </span>
                услуги
              </a>
            </li>
            <li className={`${style.nonActive}`}>
              <a href="#">
                <span className={style.icon}>
                  <NutSvg />
                </span>
                дополнительные детали
              </a>
            </li>
          </menu>
        </section>
      </header>
    </>
  );
};

export default Header;
