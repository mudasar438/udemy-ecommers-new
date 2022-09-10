import {  Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../navigation/navigation.component";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component'
const Shop = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element = {<Category/>}/>
      </Routes>
    </>
  );
};

export default Shop;
