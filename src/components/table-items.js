import React from 'react';

import {sellerList, priceList} from 'data';

const ListItem = ({seller, product, price, count, sum, be, percent, salary}) => { 

  let sellerName = sellerList.find((item) => (item.id === seller));
  let productName = priceList.find((item) => (item.id === product));
  let percentText = percent + '%';
  if (percent < 1) percentText = '-';

  return (
    <>      
      <td>{sellerName.text}</td>
      <td>{productName.text}</td>
      <td>{price} руб.</td>
      <td>{count} шт.</td>
      <td>{sum} руб.</td>
      <td>{be.toFixed(2)} БЕ</td>
      <td>{percentText}</td>
      <td>{salary} руб.</td> 
    </>
  );
};

export default ListItem;
