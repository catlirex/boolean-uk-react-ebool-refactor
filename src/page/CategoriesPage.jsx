import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import useFetch from "../hook/useFetch";

const CatUl = styled.ul`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 2rem;
  place-content: center;

  & a {
    display: grid;
    height: 300px;
    background-color: var(--random-colour);
    place-items: center;
    text-transform: capitalize;
    text-align: center;
    color: var(--white);
    font-size: 2.5rem;
  }

  & a:hover {
    color: var(--random-colour);
    border: 2px solid var(--random-colour);
    background-color: var(--white);
  }
`;

const CatContainer = styled.section`
  height: 100%;
  margin: 0 auto;
`;

export default function CategoriesPage() {
  const [catList] = useFetch("http://localhost:4000/categories");

  return (
    <main>
      <CatContainer className="categories-container main-wrapper">
        <CatUl className="categories-container__list">
          {/* <!-- Single category --> */}
          {catList.map((cat) => (
            <CategoryCard key={`${cat.id} - ${cat.name}`} cat={cat} />
          ))}
        </CatUl>
      </CatContainer>
    </main>
  );
}
