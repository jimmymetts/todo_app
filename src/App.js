import React, { Component } from 'react';

import './App.css';

class App extends Component {
 
      constructor(props){
        super(props);

        this.state={
          newItem:"",
          list:[]

        }
      }

      addItem() {
        // create item with unique id
        const newItem={
          id: 1 + Math.random(),
          
        }
      }

      render() {
      return (
        <div className="App">
          <div>
          Add an item...
          <br/>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateItem("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem} >
            Add
            
          </button>
          </div>
    </div>
  );
} 
}


export default App;
