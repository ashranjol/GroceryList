import React, { Component } from 'react';

function GroceryInput(props){
    return (
      <form onSubmit={props.addItem}>
      <input  type="text" name="item" placeholder = 'Enter Name of Item' onChange={props.handleInput} />
      <button>Add Item</button>
      </form>
    );
}


export default GroceryInput;
