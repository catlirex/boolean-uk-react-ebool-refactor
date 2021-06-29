import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductItem = styled.article`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-row-gap: 2rem;
  height: 100%;
  padding: 2rem;
  place-items: center;
  background-color: var(--white);
  border: 1px solid var(--grey);

  h3 {
    font-weight: 400;
  }
`;

export default function ProductCard({ product }) {
  const { id, image, title } = product;
  return (
    <li>
      <Link to={`/products/${id}`}>
        {
          <ProductItem className="product-item">
            <img src={image} alt={title} />
            <h3>{`${title.slice(0, 20)}...`}</h3>
          </ProductItem>
        }
      </Link>
    </li>
  );
}
