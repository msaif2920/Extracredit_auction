import React, { useState } from "react";
import "./CreateListing.css";
import { postListing } from "../utils.js";

function CreateListing() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const token = window.localStorage.getItem("Bearer");
  return (
    <div style={{ minHeight: "110vh" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postListing(token, title, price, description, category).then(
            (resp) => {
              console.log(resp);
            }
          );
        }}
      >
        <h4>Enter Category for listing</h4>
        <input
          className="input create__listing"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        ></input>
        <h4>Enter Title</h4>
        <input
          className="input create__listing"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <h4>Description</h4>
        <input
          className="input create__listing"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <h4>Listing Price</h4>
        <input
          className="input create__listing"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        ></input>
        <br></br>
        <button className="btn btn-primary btn__create" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateListing;
