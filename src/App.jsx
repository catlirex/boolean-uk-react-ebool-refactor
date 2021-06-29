import Header from "./components/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductPage from "./page/ProductsPage";
import useFetch from "./hook/useFetch";
import CategoriesPage from "./page/CategoriesPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { useState } from "react";
import BasketPage from "./page/BasketPage";
import SearchPage from "./page/SearchPage";

function App() {
  const [productList] = useFetch("http://localhost:4000/products");
  const [basketList, setBasketList] = useState([]);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>

          <Route path="/products" exact>
            <ProductPage productList={productList} />
          </Route>
          <Route path="/categories" exact>
            <CategoriesPage />
          </Route>

          <Route path="/basket" exact>
            <BasketPage
              basketList={basketList}
              productList={productList}
              setBasketList={setBasketList}
            />
          </Route>

          <Route path="/products/:id" exact>
            <ProductDetailPage
              productList={productList}
              setBasketList={setBasketList}
              basketList={basketList}
            />
          </Route>

          <Route path="/categories/:id" exact>
            <ProductPage productList={productList} />
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
