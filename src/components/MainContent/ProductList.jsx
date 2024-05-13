import React, { useEffect, useRef } from "react";
import { smoothScroll } from "../../util/smoothScroll";
import ProductItem from "../ProductItem/ProductItem";
import style from "./MainContent.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import {
  productsSlowCurrentStation,
  productsFastCurrentStation,
  productsServices,
  productsDetails,
} from "../../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
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

          .swiper-wrapper,
          .swiper-slide{
            -moz-transform-style: flat;
            -webkit-transform-style: flat;
            -ms-transform-style: flat;
            transform-style: flat;
          }

          .swiper-slide{
            visibility: hidden;
          }

          .swiper-slide-active, .swiper-slide-prev, .swiper-slide-next{
            visibility: visible;
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
        element={
          <ItemsList
            calcRef={calcRef}
            productType={productType}
            listType="services"
          />
        }
        exact
      ></Route>
      <Route
        path="/details"
        element={
          <ItemsList
            calcRef={calcRef}
            productType={productType}
            listType="details"
          />
        }
        exact
      ></Route>
    </Routes>
  );
}

const StationsList = ({ productType, currentType, calcRef }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        //element.scrollIntoView({ behavior: "smooth", block: "start" });
        //smoothScroll(element, 800);
        const scroll = new SmoothScroll(`<div id="${id}"></div>`, {
          speed: 800, // The lower the number, the faster the scroll.
          speedAsDuration: true, // Use speed as the total duration of the scroll animation.
        });
        scroll.animateScroll(element.offsetTop);
      }
    }
  }, [location]);

  if (currentType === "all") {
    const combinedArray = [
      ...productsSlowCurrentStation,
      ...productsFastCurrentStation,
    ];
    return (
      <>
        {styleTag}
        <div className={style.category_decor} id="stations">
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
        <div className={`${style.slider_products}`}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {combinedArray.map((product, index) => (
              <SwiperSlide key={index}>
                {(isActive, isNext, isPrev) => (
                  <>
                    {isNext || isActive || isPrev ? (
                      <ProductItem
                        {...product}
                        generalType="stations"
                        calcRef={calcRef}
                      />
                    ) : null}
                  </>
                )}
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
        <div className={style.category_decor}>
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
        <div className={`${style.slider_products}`} id="stations">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {productsSlowCurrentStation.map((product, index) => (
              <SwiperSlide key={index}>
                {(isActive) => (
                  <>
                    {isActive && (
                      <ProductItem
                        {...product}
                        generalType="stations"
                        calcRef={calcRef}
                      />
                    )}
                  </>
                )}
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
        <div className={style.category_decor}>
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
        <div className={`${style.slider_products}`} id="stations">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, A11y]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {productsFastCurrentStation.map((product, index) => (
              <SwiperSlide key={index}>
                {(isActive) => (
                  <>
                    {isActive && (
                      <ProductItem
                        {...product}
                        generalType="stations"
                        calcRef={calcRef}
                      />
                    )}
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
};

const ItemsList = ({ calcRef, productType, listType }) => {


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      console.log(id)
      if (element) {
        //element.scrollIntoView({ behavior: "smooth", block: "start" });
        //smoothScroll(element, 800);

        const scroll = new SmoothScroll(`<div id="${id}"></div>`, {
          speed: 800, // The lower the number, the faster the scroll.
          speedAsDuration: true, // Use speed as the total duration of the scroll animation.
        });
         scroll.animateScroll( element.offsetTop );
        
      }
    }
  }, [location]);
  return (
    <>
      {styleTag}
      <div className={style.category_decor} id={listType}>
        {listType === "services" ? "услуги" : "дополнительные детали"}
        <span>
          <DecorArrowSvg />
        </span>
      </div>
      <div className={`${style.products}`}>
        {listType === "details"
          ? productsDetails.map((product, index) => (
              <ProductItem key={index} {...product} generalType="details" />
            ))
          : productsServices.map((product, index) => (
              <ProductItem key={index} {...product} generalType="services" />
            ))}
      </div>
      <div className={`${style.slider_products}`} id="items">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          modules={[Navigation, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {listType === "details"
            ? productsDetails.map((product, index) => (
                <SwiperSlide key={product.code}>
                  <ProductItem {...product} generalType="details" />
                </SwiperSlide>
              ))
            : productsServices.map((product, index) => (
                <SwiperSlide key={product.code}>
                  <ProductItem {...product} generalType="services" />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductList;
