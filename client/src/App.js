import React, {Component} from 'react';
import axios from 'axios';

import ListObj from "./listComponent.js";
import CreateObj from "./createComponent.js";

class App extends Component {
  render(){
    return (
      <div>
        <CreateObj/>
        <ListObj/>
      </div>
    );
  }
}

export default App;
