import { useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action"
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.route";
import Category from "../category/category.route";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCateogriesMap = async() => {
        const categoriesArray = await getCategoriesAndDocuments()
        console.log(categoriesArray)
        dispatch(setCategories(categoriesArray))
    }
    getCateogriesMap();
  }, [dispatch])
  

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
