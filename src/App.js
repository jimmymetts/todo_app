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
      render() {
      return (
        <div className="App">
          <div>
          Test Text
          </div>
    </div>
  );
}
}


export default App;
