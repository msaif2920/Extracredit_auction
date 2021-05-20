import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCategories, getListingByCategory } from "../utils.js";
import "./SearchPage.css";
import CardView from "./CardView.js";

function SearchResult() {
  const location = useLocation();
  const token = window.localStorage.getItem("Bearer");
  const [id, setID] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {
    getCategories(token).then((resp) => {
      resp.data.data.forEach((el) => {
        if (el.name === location.data) {
          setID(el.id);
        }
      });
    });
  }, []);

  useEffect(() => {
    getListingByCategory(id, token).then((resp) =>
      setResult(resp.data.data.listing)
    );
  }, [id]);

  console.log(result);

  return (
    <div>
      <h1 className="category__text">Search Result for {location.data}</h1>
      <div className="search__result">
        {result.map((el) => {
          return (
            <CardView
              key={el.id}
              id={el.id}
              description={el.description}
              price={el.price}
              title={el.title}
              userId={el.userId}
              time={el.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
