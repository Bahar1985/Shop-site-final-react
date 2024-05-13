import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useProducts } from "../context/ProductContext";


import styles from "./ProductsPage.module.css";

import Card from "../components/Card";
import Loader from "../components/Loader";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();
  // console.log(products);

  const [displayed, setDisplayed] = useState([]); //data filter && search
  const [search, setSearch] = useState(""); //value von input handel
  const [query, setQuery] = useState({}); //ijad query baraye search && category
  const [searchParams, setSearchParams] = useSearchParams(); 

  useEffect(() => {
    setDisplayed(products);

  setQuery(getInitialQuery(searchParams));

  }, [products]);

  //emal kardan filter search
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);



  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar   query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
