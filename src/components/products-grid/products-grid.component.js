import ProductItem from "../product-item/product-item.component";

import { ProductGridContainer } from "./products-grid.styles";

const ProductsGrid = ({ products }) => {
  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductGridContainer>
  );
};
export default ProductsGrid;
