import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name:''
    }
  }

  onChangeName(e){
    console.log(e.target.value);
    this.setState({
      name:e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log(`Name:${this.state.name}`);

    const newObj = {
      name:this.state.name
    }

    axios.post('http://localhost:4000/zguy/add', newObj)
      .then(res => console.log(res.data));

    this.setState({
      name:''
    });
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChangeName}/>
        <input type="button" value="Submit" onClick={this.onSubmit}/>
      </div>
    );
  }
}
