import BDCS1 from "../assets/images/products/fastCurrent/BDC-S1.png";
import BDESC from "../assets/images/products/fastCurrent/BDESC.png";
import BGDC from "../assets/images/products/fastCurrent/BGDC.png";
import BDCDW from "../assets/images/products/fastCurrent/BDC-D-W.png";
import BDDC from "../assets/images/products/fastCurrent/BDDC.png";
import BDCP1 from "../assets/images/products/fastCurrent/BDC-P1.png";
import BADCS2 from "../assets/images/products/fastCurrent/BADC-S2.png";
import BDCD2 from "../assets/images/products/fastCurrent/BDC-D2.png";
import BADCD3 from "../assets/images/products/fastCurrent/BADC-D3.png";

import BCMA1 from "../assets/images/products/slowCurrent/BCM-A1.png";
import BCPA1 from "../assets/images/products/slowCurrent/BCP-A1.png";
import BCMA2 from "../assets/images/products/slowCurrent/BCM-A2.png";
import BCPA2 from "../assets/images/products/slowCurrent/BCP-A2.png";
import BCPCV from "../assets/images/products/slowCurrent/BCPCV.png";


import BCPPA1 from "../assets/images/products/slowCurrent/BCPP-A1.png";
import BCPPA2 from "../assets/images/products/slowCurrent/BCPP-A2.png";

import C1 from "../assets/images/details/C-1.png";
import DLB1 from "../assets/images/details/DLB-1.png";

import serviceImage from "../assets/images/services/service.png"


export const productsServices = [
  {
    image: serviceImage,
    title: "Монтирование любой электрической<br/> зарядной станции",
    code: "M-100",
    type: "mounting",
    tags: [
      {
        icon: "wrench",
        text: "настенные станции",
      },
      {
        icon: "wrench",
        text: "напольные станции",
      },

      {
        icon: "shield",
        text: "под ключ",
      },
      {
        icon: "shield",
        text: "с гарантиями",
      },
    ],
  },

  {
    image: serviceImage,
    title: "Ремонтирование любой электрической<br/> зарядной станции",
    code: "R-100",
    type: "fixing",
    tags: [
      {
        icon: "wrench",
        text: "настенные станции",
      },
      {
        icon: "wrench",
        text: "напольные станции",
      },
      {
        icon: "wrench",
        text: "портативные станции",
      },
      {
        icon: "shield",
        text: "с гарантиями",
      },
    ],
  },
];

export const productsDetails = [
  {
    image: C1,
    title: "Кабель-удлинитель для пистолета станции",
    code: "C-1",
    type: "cabel",
    tags: [
      {
        icon: "nut",
        text: "переменный ток",
      },
      {
        icon: "nut",
        text: "постоянный ток",
      },
      {
        icon: "shield",
        text: "защита",
      },
      {
        icon: "shield",
        text: "IP66",
      },

      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "высокая совместимость со станциями",
        textMobile: "высокая совместимость",
      },
    ],
  },

  {
    image: DLB1,
    title: "Блок динамического балансирования нагрузки",
    code: "DLB-1",
    type: "cabel",
    tags: [
      {
        icon: "nut",
        text: "переменный ток",
      },
      {
        icon: "nut",
        text: "постоянный ток",
      },
      {
        icon: "shield",
        text: "межсетевое взаимодействие",
      },
      {
        icon: "shield",
        text: "защита",
      },
      {
        icon: "shield",
        text: "IP66",
      },

      {
        icon: "cpu",
        text: "резервирование очереди зарядки",
        textMobile: "резервирование зарядки",
      },

      {
        icon: "cpu",
        text: "интеллектуальная система управления",
        textMobile: "интеллектуальная система",
      },
    ],
  },
];

export const productsFastCurrentStation = [
  {
    image: BDCS1,
    title: "Напольная зарядная станция постоянного тока",
    code: "BDC-S1",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 30 кВт до 240 кВт</span>",
        textMobile: "от 30 кВт до 240 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "1 пистолет",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },

  {
    image: BADCS2,
    title: "Напольная зарядная станция постоянного тока",
    code: "BADC-S2",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 52 кВт до 262 кВт</span>",
        textMobile: "от 52 кВт до 262 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "2 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },

  {
    image: BDESC,
    title: "Напольная зарядная станция постоянного тока",
    code: "BDESC",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>60 кВт или 80 кВт (+42)</span>",
        textMobile: "60 кВт или 80 кВт (+42)",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP54",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },

      {
        icon: "plugs",
        text: "CCS2",
      },
      {
        icon: "plugs",
        text: "система организации проводов",
        textMobile: "организация проводов",
      },
      {
        icon: "cpu",
        text: "современная система управления",
        textMobile: "система управление",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
    ],
  },

  {
    image: BDCD2,
    title: "Напольная зарядная станция постоянного тока",
    code: "BDC-D2",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 60 кВт до 240 кВт</span>",
        textMobile: "от 60 кВт до 240 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "2 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },
  {
    image: BADCD3,
    title: "Напольная зарядная станция постоянного тока",
    code: "BADC-D3",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 82 кВт до 262 кВт</span>",
        textMobile: "от 82 кВт до 262 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "3 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },

  {
    image: BGDC,
    title: "Напольная зарядная станция постоянного тока",
    code: "BGDC",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 60 кВт до 120 кВт</span>",
        textMobile: "от 60 кВт до 120 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "2 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },

  {
    image: BDCDW,
    title: "Напольная зарядная станция постоянного тока",
    code: "BDC-D-W",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>320 кВт или 360 кВт</span>",
        textMobile: "320 кВт или 360 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "shield",
        text: "500А",
      },
      {
        icon: "plugs",
        text: "2 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
    ],
  },

  {
    image: BDDC,
    title: "Напольная зарядная станция постоянного тока",
    code: "BDDC",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 360 кВт до 600 кВт</span>",
        textMobile: "от 360 кВт до 600 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },

      {
        icon: "plugs",
        text: "CHAdeMO",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "plugs",
        text: "2 пистолета",
      },
      {
        icon: "cpu",
        text: "современная система",
      },
    ],
  },
  //wall
  {
    image: BDCP1,
    title: "Настенная зарядная станция постоянного тока",
    code: "BDC-P1",
    type: "wall",
    tags: [
      {
        icon: "lightning",
        text: "быстрый постоянный ток: <span class='textLight'>от 20 кВт до 40 кВт</span>",
        textMobile: "от 20 кВт до 40 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "OCPP 1.6J",
      },
      {
        icon: "plugs",
        text: "CCS1",
      },
      {
        icon: "plugs",
        text: "CCS2",
      },
      {
        icon: "plugs",
        text: "GBT",
      },
      {
        icon: "cpu",
        text: "приложение",
      },
      {
        icon: "cpu",
        text: "RFID",
      },

      {
        icon: "cpu",
        text: "современная система управления",
        textMobile: "система управления",
      },
    ],
  },
];

export const productsSlowCurrentStation = [
  {
    image: BCPPA1,
    title: "Медленное портативное устройство переменного тока",
    code: "BCPP-A1",
    type: "portable",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>3.7 кВт</span>",
        textMobile: "3.7 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP66",
      },
      {
        icon: "shield",
        text: "одна фаза",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "современная система управления",
        textMobile: "система управления",
      },
      {
        icon: "cpu",
        text: "OLED",
      },
    ],
  },

  {
    image: BCPPA2,
    title: "Медленное портативное устройство переменного тока",
    code: "BCPP-A2",
    type: "portable",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>7.4 кВт или 22 кВт</span>",
        textMobile: "7.4 кВт или 22 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP65",
      },
      {
        icon: "shield",
        text: "разные фаза",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "современная система управления",
        textMobile: "система управления",
      },
      {
        icon: "cpu",
        text: "OLED",
      },
    ],
  },

  {
    image: BCMA1,
    title: "Настенная зарядная станция переменного тока",
    code: "BCM-A1",
    type: "wall",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>от 7.4 кВт до 22 кВт</span>",
        textMobile: "от 7.4 кВт до 22 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "DLB",
      },
      {
        icon: "plugs",
        text: "T2S",
      },
      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "мобильное приложение",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
      {
        icon: "cpu",
        text: "Wi-Fi",
      },
    ],
  },
  {
    image: BCPA1,
    title: "Настенная зарядная станция переменного тока",
    code: "BCP-A1",
    type: "wall",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>от 7.4 кВт до 22 кВт</span>",
        textMobile: "от 7.4 кВт до 22 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "разные фазы",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "мобильное приложение",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
      {
        icon: "cpu",
        text: "Wi-Fi",
      },
    ],
  },
  {
    image: BCMA2,
    title: "Настенная зарядная станция переменного тока",
    code: "BCM-A2",
    type: "wall",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>от 7.4 кВт до 22 кВт</span>",
        textMobile: "от 7.4 кВт до 22 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "DLB",
      },
      {
        icon: "plugs",
        text: "T2S",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "светодиодный экран",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
      {
        icon: "cpu",
        text: "Wi-Fi",
      },
    ],
  },
  {
    image: BCPA2,
    title: "Настенная зарядная станция переменного тока",
    code: "BCP-A2",
    type: "wall",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>от 7.4 кВт до 22 кВт</span>",
        textMobile: "от 7.4 кВт до 22 кВт",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "разные фазы",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "мобильное приложение",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
      {
        icon: "cpu",
        text: "Wi-Fi",
      },
    ],
  },
  {
    image: BCPCV,
    title: "Напольная зарядная станция переменного тока",
    code: "BCPCV",
    type: "floor",
    tags: [
      {
        icon: "lightning",
        text: "медленный переменный ток: <span class='textLight'>22 кВт (2 пистолета)</span>",
        textMobile: "22 кВт (2 пистолета)",
      },
      {
        icon: "shield",
        text: "полная защита",
      },
      {
        icon: "shield",
        text: "IP55",
      },
      {
        icon: "shield",
        text: "DLB",
      },
      {
        icon: "plugs",
        text: "T2S",
      },

      {
        icon: "plugs",
        text: "высокая совместимость с электромобилями",
        textMobile: "высокая совместимость",
      },
      {
        icon: "cpu",
        text: "светодиодный экран",
      },
      {
        icon: "cpu",
        text: "RFID",
      },
      {
        icon: "cpu",
        text: "Wi-Fi",
      },
    ],
  },
];
