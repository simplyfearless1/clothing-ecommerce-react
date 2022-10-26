import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/product-item/product-item.component";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
