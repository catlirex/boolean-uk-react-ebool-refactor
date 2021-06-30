import Header from "./components/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductPage from "./page/ProductsPage";
import CategoriesPage from "./page/CategoriesPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { useEffect, useState } from "react";
import BasketPage from "./page/BasketPage";
import SearchPage from "./page/SearchPage";
import useStore from "./store";

function App() {
  const setProductList = useStore((state) => state.setProductList);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((allData) => {
        setProductList(allData);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>

          <Route path="/products" exact>
            <ProductPage />
          </Route>
          <Route path="/categories" exact>
            <CategoriesPage />
          </Route>

          <Route path="/basket" exact>
            <BasketPage />
          </Route>

          <Route path="/products/:id" exact>
            <ProductDetailPage />
          </Route>

          <Route path="/categories/:id" exact>
            <ProductPage />
          </Route>

          <Route path="/search/:search">
            <SearchPage />
          </Route>

          <Route>
            <h2>Page not found!! What are you looking for?</h2>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
