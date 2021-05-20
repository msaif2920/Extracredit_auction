import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getLisitingSpeicific, postComment, postBid } from "../utils.js";

function ListingDetail() {
  const location = useLocation();
  const history = useHistory();
  const token = window.localStorage.getItem("Bearer");

  const [info, setInfo] = useState({ comments: [] });
  const [comment, setComment] = useState("");
  const [bid, setBid] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    getLisitingSpeicific(location.data, token).then((resp) => {
      setInfo(resp.data.data);
    });
  }, []);

  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <h1>{info.title}</h1>
      <h6>Posted: {info.createdAt}</h6>
      <h4>Description: {info.description}</h4>
      <div>
        <h5>Price: ${info.price}</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (bid > info.price) {
              setErr("");
              postBid(location.data, token, bid);
              setInfo((prev) => ({ ...prev, price: bid }));
            } else {
              setErr("Cannot bid lower than the listing price");
            }
          }}
        >
          <input
            type="number"
            className="input"
            style={{ width: "500px" }}
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Submit Bid
          </button>
        </form>
        <p style={{ color: "red" }}>{err}</p>
      </div>
      <div>
        <h3>Comments</h3>
        {info.comments.map((el) => {
          return (
            <div key={el.id}>
              <h6>{el.description}</h6>
              <h6>{el.createdAt}</h6>
            </div>
          );
        })}
      </div>
      <div style={{ marginBottom: "100px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postComment(location.data, token, comment).then((resp) => {
              setInfo(resp.data.data);
              history.push({ pathname: "/listingDetail", data: location.data });
            });
          }}
        >
          <input
            type="multi"
            className="input"
            style={{ width: "500px" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ListingDetail;
