import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import useStore from "../store";

const ProductSection = styled.section`
  margin: 3rem auto;
`;
const ProductUl = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  grid-gap: 2rem;
`;

export default function ProductPage() {
  const productList = useStore((state) => state.productList);
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
            ? productList.map((target) => (
                <ProductCard
                  key={`${target.id} - ${target.title}`}
                  product={target}
                />
              ))
            : null}
          {id && filteredItems
            ? filteredItems.map((target) => (
                <ProductCard
                  key={`${target.id} - ${target.title}`}
                  product={target}
                />
              ))
            : null}
        </ProductUl>
      </ProductSection>
    </main>
  );
}
