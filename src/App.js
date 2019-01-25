import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems.js';
import AddItemButton from './components/button.js';
import GroceryInput from './components/GroceryInput.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      items : [],
      currentItem : ''
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    console.log(itemText)
    this.setState({
      currentItem:itemText,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    const items = [...this.state.items,newItem];

    this.setState({
      items:items
    });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Grocery List</p>
        </header>

      <GroceryInput addItem={this.addItem} handleInput = {this.handleInput} />
      <ListItems items={this.state.items} />

      </div>
    );
  }
}

export default App;
