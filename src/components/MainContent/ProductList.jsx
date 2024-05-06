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

  if(currentType === "all"){
    const combinedArray = [...productsSlowCurrentStation, ...productsFastCurrentStation];
    return (
      <>
        {combinedArray
          .filter((el) => el.type === productType)
          .map((product, index) => (
            <ProductItem key={index} {...product} generalType="stations" />
          ))}
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
