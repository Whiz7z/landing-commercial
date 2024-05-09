import React, { useEffect, useRef } from "react";

import ProductItem from "../ProductItem/ProductItem";
import style from "./MainContent.module.scss";
import { Routes, Route } from "react-router-dom";
import {
  productsSlowCurrentStation,
  productsFastCurrentStation,
  productsServices,
  productsDetails,
} from "../../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DecorArrowSvg from "../../svgComponents/DecorArrowSvg";

const styleTag = (
  <style>{`
          .swiper {
            width: 330px;
            height: 100%;
            overflow: visible
          }

          .swiper-wrapper {
            margin: 0 auto;
            width: 330px;
            
          }

          .slide {
            width: 330px;
            height: auto;
            margin: 0 auto;
          }
        `}</style>
);

function ProductList({ productType, currentType, calcRef }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <StationsList
            productType={productType}
            currentType={currentType}
            calcRef={calcRef}
          />
        }
        exact
      ></Route>
      <Route
        path="/stations"
        element={
          <StationsList
            productType={productType}
            currentType={currentType}
            calcRef={calcRef}
          />
        }
        exact
      ></Route>
      <Route
        path="/services"
        element={<ServicesList calcRef={calcRef} />}
        exact
      ></Route>
      <Route
        path="/details"
        element={<DetailsList calcRef={calcRef} />}
        exact
      ></Route>
    </Routes>
  );
}

const StationsList = ({ productType, currentType, calcRef }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    // targetRef.current.scrollIntoView({ behavior: "smooth" });

    console.log(targetRef.current.offsetTop);

    // const scrolledY = window.scrollY;

    // if (scrolledY) {
    //   window.scroll(0, targetRef.current.offsetTop + 50);
    // }

    window.scroll(0, targetRef.current.offsetTop - 50);
  }, [currentType, productType]);

  if (currentType === "all") {
    const combinedArray = [
      ...productsSlowCurrentStation,
      ...productsFastCurrentStation,
    ];
    return (
      <>
        {styleTag}
        <div className={style.category_decor} >
          станции
          <span>
            <DecorArrowSvg />
          </span>
        </div>
        <div className={`${style.products}`}>
          {combinedArray
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <ProductItem key={index} {...product} generalType="stations" />
            ))}
        </div>
        <div className={`${style.slider_products}`} ref={targetRef}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {combinedArray.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem
                  {...product}
                  generalType="stations"
                  calcRef={calcRef}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else if (currentType === "slow") {
    return (
      <>
        {styleTag}
        <div className={style.category_decor} >
          станции
          <span>
            <DecorArrowSvg />
          </span>
        </div>
        <div className={`${style.products}`}>
          {productsSlowCurrentStation
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <ProductItem key={index} {...product} generalType="stations" />
            ))}
        </div>
        <div className={`${style.slider_products}`} ref={targetRef}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {productsSlowCurrentStation.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem
                  {...product}
                  generalType="stations"
                  calcRef={calcRef}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else if (currentType === "fast") {
    return (
      <>
        {styleTag}
        <div className={style.category_decor} >
          станции
          <span>
            <DecorArrowSvg />
          </span>
        </div>
        <div className={`${style.products}`}>
          {productsFastCurrentStation
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <ProductItem key={index} {...product} generalType="stations" />
            ))}
        </div>
        <div className={`${style.slider_products}`} ref={targetRef}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {productsFastCurrentStation.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem {...product} generalType="stations" calcRef={calcRef}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
};

const ServicesList = ({ calcRef }) => {
  const targetRef = useRef(null);
  useEffect(() => {
    //targetRef.current.scrollIntoView({ behavior: "smooth" });
    window.scroll(0, targetRef.current.offsetTop - 50);
  }, []);
  return (
    <>
      {styleTag}
      <div className={style.category_decor} ref={targetRef}>
        услуги
        <span>
          <DecorArrowSvg />
        </span>
      </div>
      <div className={`${style.products}`}>
        {productsServices.map((product, index) => (
          <ProductItem key={index} {...product} generalType="services" />
        ))}
      </div>
      <div className={`${style.slider_products}`} id="items">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productsServices.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem
                key={index}
                {...product}
                generalType="services"
                calcRef={calcRef}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const DetailsList = ({ calcRef }) => {
  const targetRef = useRef(null);
  useEffect(() => {
    window.scroll(0, targetRef.current.offsetTop - 50);
  }, []);
  return (
    <>
      {styleTag}
      <div className={style.category_decor} ref={targetRef}>
        дополнительные детали
        <span>
          <DecorArrowSvg />
        </span>
      </div>
      <div className={`${style.products}`}>
        {productsDetails.map((product, index) => (
          <ProductItem key={index} {...product} generalType="details" />
        ))}
      </div>
      <div className={`${style.slider_products}`} id="items">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productsDetails.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem
                key={index}
                {...product}
                generalType="details"
                calcRef={calcRef}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductList;
