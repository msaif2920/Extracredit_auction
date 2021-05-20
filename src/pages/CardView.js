import React, { useEffect, useState } from "react";
import { getUser } from "../utils.js";
import { useHistory } from "react-router-dom";

function CardView({ time, description, price, title, userId, id }) {
  const token = window.localStorage.getItem("Bearer");
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => history.push({ pathname: "/listingDetail", data: id })}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      style={{ cursor: "pointer", width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
}

export default CardView;
