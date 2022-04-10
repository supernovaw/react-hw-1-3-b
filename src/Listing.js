import React from 'react';

const Item = ({ item }) => {
  if (item.state === "removed") return null;

  const shortTitle = item.title && item.title.length > 50 ?
    item.title.substring(0, 50) + "…" : item.title;

  let price;
  switch (item.currency_code) {
    case "USD": price = "$" + item.price; break;
    case "EUR": price = "€" + item.price; break;
    default: price = item.price + " " + item.currency_code; break;
  }

  let quantityClass = "item-quantity ";
  if (item.quantity <= 10) quantityClass += "level-low";
  else if (item.quantity <= 20) quantityClass += "level-medium";
  else quantityClass += "level-high";

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}><img src={item.MainImage.url_570xN} alt="product" /></a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{price}</p>
        <p className={quantityClass}>{item.quantity} left</p>
      </div>
    </div>
  );
};

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map(item => <Item key={item.listing_id} item={item} />)}
    </div>
  )
};
