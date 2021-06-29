import { useEffect, useState } from "react";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";

const BasketSection = styled.section`
  width: 50vw;
  margin: 0 auto;

  & > h2 {
    margin: 2rem 0;
    font-size: 2.5rem;
  }

  & > ul {
    border: 1px solid var(--grey);
    border-radius: 5px;
    height: 60vh;
    padding: 2rem;
    overflow-y: auto;
    scrollbar-width: thin;
    background-color: var(--white);
  }

  & h3 {
    margin-top: 2rem;
    margin-right: 2rem;
    text-align: right;
  }
`;

export default function BasketPage({ setBasketList, basketList, productList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    basketList.map((item) => setTotal((total) => total + item.subTotal));
  }, [basketList, setTotal]);

  function handleChange(e, id, price) {
    setBasketList(
      basketList.map((item) => {
        if (item.id === id)
          return {
            ...item,
            quantity: e.target.value,
            subTotal: price * e.target.value,
          };
        return item;
      })
    );
  }

  return (
    <main>
      <BasketSection className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basketList.map((cartItem) => {
            let targetDetail = productList.find(
              (product) => cartItem.id === product.id
            );
            return (
              <BasketItem
                targetDetail={targetDetail}
                key={targetDetail.id}
                cartItem={cartItem}
                handleChange={handleChange}
              />
            );
          })}
        </ul>
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £{total.toFixed(2)}</h3>
      </BasketSection>
    </main>
  );
}
