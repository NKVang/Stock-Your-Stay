import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import CategoryButtons from "../../components/CategoryButtons";
import SortFilter from "../../components/SortFilter";
import ProductList from "../../components/ProductList";

import "../../assets/styles/view-all.css";

const ViewAll = () => {
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_TOKEN,
  }).base("appRWYLyPrYJ68yEu");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0)
      base("Products")
        .select({
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              const tempRecord = record._rawJson.fields;
              const newProduct = {
                title: tempRecord.title,
                price: tempRecord.price,
                image: tempRecord.image[0].url,
              };
              setProducts((oldProducts) =>
                !oldProducts.find(
                  (product) => product.title === newProduct.title
                )
                  ? [...oldProducts, newProduct]
                  : oldProducts
              );
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="productListContainer">
      <CategoryButtons />
      <div className="title">
        <h2>Waters</h2>
        <SortFilter />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ViewAll;
