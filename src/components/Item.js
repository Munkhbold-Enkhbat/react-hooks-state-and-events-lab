import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const liClass = inCart ? "in-cart" : ""
  const handleClick = () => setInCart(!inCart)

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={!inCart ? "add" : "remove"} onClick={handleClick}>{inCart ? "Remove From " : "Add to "} Cart</button>
    </li>
  );
}

export default Item;
