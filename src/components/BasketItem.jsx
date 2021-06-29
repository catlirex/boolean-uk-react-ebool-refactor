import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const BasketLi = styled.li`
margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--grey);
  
  &:last-of-type {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--grey);
`;

const BasketLiContent = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 3fr 1fr 1fr;
  column-gap: 2rem;
`;

export default function BasketItem({ targetDetail, cartItem, handleChange }) {
  return (
    <BasketLi>
      <BasketLiContent className="basket-container__item">
        <img src={targetDetail.image} alt={targetDetail.title} width="90" />
        <p>{targetDetail.title}</p>
        <p>
          Qty:
          <Select
            value={cartItem.quantity}
            onChange={(e) => handleChange(e, cartItem.id, targetDetail.price)}
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
        </p>
        <p>{`Item total: £${cartItem.subTotal}`}</p>
      </BasketLiContent>
    </BasketLi>
  );
}
