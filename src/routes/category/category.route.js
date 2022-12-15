import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductItem from "../../components/product-item/product-item.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";


const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      { 
        isLoading ? <Spinner /> : (
          <CategoryContainer>
            {products &&
              products.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
          </CategoryContainer>   
        )
      }
    </Fragment>
  );
};
export default Category;
