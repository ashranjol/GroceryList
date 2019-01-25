import React, { Component } from 'react';

function ListItems(props){
  const Items = props.items.map((added_element) =>
  <li key={added_element}>{added_element}</li>
);
  return (<ul>{Items}</ul>);
}




export default ListItems;
