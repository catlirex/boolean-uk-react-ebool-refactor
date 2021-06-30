import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import useStore from "../store";

const ProductDetail = styled.section`
  display: grid;
  margin: 0 auto;
  column-gap: 2rem;
  grid-template-columns: 4fr 6fr;
  padding: 2rem;
  height: 100%;

  & > img {
    align-self: center;
  }

  .product-detail__side {
    position: relative;
    display: grid;
    grid-template-rows: 20% auto;
    align-content: start;
    padding-left: 1rem;
    border-left: 2px solid;
  }

  .product-detail__side h3 {
    align-self: start;
  }

  .product-detail__side h2 {
    margin: 1rem 0;
  }

  .product-detail__side p {
    max-width: 50%;
    max-height: 150ch;
    margin-top: 1rem;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  .product-detail__side button {
    max-width: 33%;
    padding: 1rem;
    border: 2px solid var(--black);
    justify-self: end;
    margin-top: 5rem;
  }

  .product-detail__side button:hover {
    background-color: var(--blue);
    color: var(--white);
  }
`;

export default function ProductDetailPage() {
  const productList = useStore((state) => state.productList);
  const basketList = useStore((state) => state.basketList);
  const setBasketList = useStore((state) => state.setBasketList);

  const { id } = useParams();
  let history = useHistory();
  let matchProduct = productList.find((product) => product.id === Number(id));
  if (!matchProduct) {
    history.push("/404notfound");
    return null;
  }

  function handleClick() {
    if (basketList.some((item) => item.id === Number(id)))
      setBasketList(
        basketList.map((item) =>
          item.id === Number(id)
            ? {
                id: item.id,
                quantity: item.quantity + 1,
                subTotal: matchProduct.price * (item.quantity + 1),
              }
            : item
        )
      );
    else
      setBasketList([
        ...basketList,
        { id: matchProduct.id, quantity: 1, subTotal: matchProduct.price },
      ]);
    history.push("/basket");
  }
  return (
    <main>
      <ProductDetail className="product-detail main-wrapper">
        <img src={matchProduct.image} alt={matchProduct.title} />
        <div
          className="product-detail__side"
          style={{ ["--random-colour"]: "var(--yellow)" }}
        >
          <h2>{matchProduct.title}</h2>
          <p>{matchProduct.description}</p>
          <p>{`£${matchProduct.price}`}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <Button onClick={handleClick}>Add to basket</Button>
        </div>
      </ProductDetail>
    </main>
  );
}
