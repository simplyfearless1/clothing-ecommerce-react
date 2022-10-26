import {
  Content,
  DirectoryItemContainer,
  Background,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  let { title, img } = category;

  return (
    <DirectoryItemContainer>
      <Background imageUrl={img} />
      <Content>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Content>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
