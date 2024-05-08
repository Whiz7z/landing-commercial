import React from "react";

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

function ProductList({ productType, currentType }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <StationsList productType={productType} currentType={currentType} />
        }
        exact
      ></Route>
      <Route
        path="/stations"
        element={
          <StationsList productType={productType} currentType={currentType} />
        }
        exact
      ></Route>
      <Route path="/services" element={<ServicesList />} exact></Route>
      <Route path="/details" element={<DetailsList />} exact></Route>
    </Routes>
  );
}

const StationsList = ({ productType, currentType }) => {
  if (currentType === "all") {
    const combinedArray = [
      ...productsSlowCurrentStation,
      ...productsFastCurrentStation,
    ];
    return (
      <>
        <style>{`
          .swiper {
            width: 330px;
            //outline: 2px solid blue;
            
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

          // .swiper .swiper-wrapper .swiper-slide, swiper-slide-active {
          //   width: 330px;
          //   height: auto;
          //   margin: 0 auto;
          //   outline: 2px solid red;
          // }
        `}</style>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {combinedArray
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem {...product} generalType="stations" />
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
  }
  return (
    <>
      {currentType === "slow"
        ? productsSlowCurrentStation
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <ProductItem key={index} {...product} generalType="stations" />
            ))
        : productsFastCurrentStation
            .filter((el) => el.type === productType)
            .map((product, index) => (
              <ProductItem key={index} {...product} generalType="stations" />
            ))}
    </>
  );
};

const ServicesList = () => {
  return (
    <>
      {productsServices.map((product, index) => (
        <ProductItem key={index} {...product} generalType="services" />
      ))}
    </>
  );
};

const DetailsList = () => {
  return (
    <>
      {productsDetails.map((product, index) => (
        <ProductItem key={index} {...product} generalType="details" />
      ))}
    </>
  );
};

export default ProductList;
