import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ProductSection = styled.section`
  margin: 3rem auto;
`;
const ProductUl = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  grid-gap: 2rem;
`;

export default function ProductPage({ productList }) {
  const { id } = useParams();
  let history = useHistory();

  const [filteredItems, setFilteredItem] = useState([]);
  useEffect(() => {
    id && productList.some((target) => target.categoryId === Number(id))
      ? setFilteredItem(
          productList.filter((product) => product.categoryId === Number(id))
        )
      : id
      ? history.push("/404notfound")
      : setFilteredItem([]);
  }, [id, productList]);

  return (
    <main>
      <ProductSection className="products-container main-wrapper">
        <ProductUl className="products-container__list">
          {!id
            ? productList.map((product) => (
                <ProductCard
                  key={`${product.id} - ${product.title}`}
                  product={product}
                />
              ))
            : null}
          {id && filteredItems
            ? filteredItems.map((product) => (
                <ProductCard
                  key={`${product.id} - ${product.title}`}
                  product={product}
                />
              ))
            : null}
        </ProductUl>
      </ProductSection>
    </main>
  );
}
