import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { getListingByCategory } from "../utils.js";
import CardView from "./CardView.js";
import { useHistory } from "react-router-dom";

function SearchPage() {
  const token = window.localStorage.getItem("Bearer");
  const history = useHistory();

  const [graphics, setGraphics] = useState([]);
  const [headPhone, setHeadPhone] = useState([]);
  const [phonecase, setPhoneCase] = useState([]);
  const [processor, setProcessor] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getListingByCategory(10, token).then((resp) =>
      setGraphics(resp.data.data.listing)
    );
    getListingByCategory(11, token).then((resp) =>
      setHeadPhone(resp.data.data.listing)
    );
    getListingByCategory(12, token).then((resp) =>
      setPhoneCase(resp.data.data.listing)
    );
    getListingByCategory(13, token).then((resp) =>
      setProcessor(resp.data.data.listing)
    );
  }, [token]);

  return (
    <div className="search__page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push({ pathname: "/result", data: searchVal });
        }}
      >
        <div className="search__input">
          <input
            type="text"
            placeholder="Search"
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          />
        </div>
      </form>

      <h1 className="suggestion__header">Some Item you might Prefer</h1>
      <div className="search__suggestion">
        <h1 className="category__text">Graphics Card</h1>
        <div className="search__categories">
          {graphics.map((el) => {
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
        <h1 className="category__text">Processors</h1>
        <div className="search__categories">
          {processor.map((el) => {
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
        <h1 className="category__text">HeadPhones</h1>
        <div className="search__categories">
          {headPhone.map((el) => {
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
        <h1 className="category__text">Phone Case</h1>
        <div className="search__categories" style={{ marginBottom: "100px" }}>
          {phonecase.map((el) => {
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
    </div>
  );
}

export default SearchPage;
