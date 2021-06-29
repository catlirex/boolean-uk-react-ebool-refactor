import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const { search } = useParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products?q=${search}`)
      .then((resp) => resp.json())
      .then((data) => setSearchResult(data));
  }, [search]);

  console.log(searchResult);

  if (!searchResult)
    return (
      <>
        <h1>Search: {search}</h1>
        <h2>Loading...</h2>
      </>
    );

  if (searchResult.length === 0) {
    return (
      <>
        <h1>Search: {search}</h1>
        <h2>No Product find</h2>
      </>
    );
  }

  return (
    <>
      <h2>Search result: {search}</h2>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {searchResult.map((product) => (
            <ProductCard
              key={`${product.id} - ${product.title}`}
              product={product}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
