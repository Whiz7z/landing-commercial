import TelegramSvg from "../../svgComponents/TelegramSvg";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={style.topFooter}>
        <div className={style.info}>
          <div className={style.logo}>
            <a href="#">Shop</a>
          </div>
          <h2>электрические станции под ключ</h2>

          <div className={`${style.contact} ${style.contact_mobile} `}>
            <a href="#" className={style.telegram_link}>
              <TelegramSvg />
            </a>
            <div className={style.phone}>
              <p>Быстрая связь с нами:</p>
              <p>+3.4159265358</p>
            </div>

            <div className={style.gmail}>
              <p>Почта:</p>
              <p>info@gmail.com</p>
            </div>
          </div>

          <div className={style.docs}>
            <a href="#">
              документация и сертификация поставляемого оборудования{" "}
            </a>
            <a href="#">
              программа сотрудничества
              <br /> с оптовыми клиентами
            </a>
            <a href="#">
              политика конфиденциальности
              <br /> (условия обработки данных)
            </a>
          </div>
        </div>

        <div className={style.contact}>
          <a href="#" className={style.telegram_link}>
            <TelegramSvg />
          </a>
          <div className={style.phone}>
            <p>Быстрая связь с нами:</p>
            <p>+3.4159265358</p>
          </div>

          <div className={style.gmail}>
            <p>Почта:</p>
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>

      <div className={style.bottomFooter}>
        <p className={`${style.firstCopyright} ${style.desktopFirstCopyright}`}>
          настоящий интернет-сайт, а также вся информация о товарах и об
          услугах, предоставленная на нём, носит исключительно
          <br /> информационный характер и ни при каких условиях не является
          публичной офертой, определяемой действующим законодательством
        </p>

        <div
          className={`${style.firstCopyright} ${style.mobileFirstCopyright}`}
        >
          настоящий интернет-сайт, а также вся информация о товарах и об
          услугах, предоставленная на нём, носит исключительно информационный
          характер и ни при каких условиях
          <br /> не является публичной офертой, определяемой действующим
          <br /> российским законодательством
        </div>
        <p className={`${style.copyright} ${style.descktopCopyright}`}>
          ооо shop
        </p>
        <p className={`${style.copyright} ${style.mobileCopyright}`}>
          ооо shop
        </p>
      </div>
    </footer>
  );
}

export default Footer;
