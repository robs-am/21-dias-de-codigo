import React from "react";
import product_card from "./data/product_data";

const mainContent = () => {
  console.table(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
      </div>
      
    </div>
  ));

  return (
  <div className="main_content">
    {listItems}
  </div>
  )
};

export default mainContent;
