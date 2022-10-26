import ProductItem from "../product-item/product-item.component";

import {
  CategoryLink,
  CategoryProductsGrid,
  CategoryPreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryLink to={title}>{title.toUpperCase()}</CategoryLink>
      </h2>
      <CategoryProductsGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </CategoryProductsGrid>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
