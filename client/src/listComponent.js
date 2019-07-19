import React, {Component} from 'react';
import axios from 'axios';

const Obj = props => (
  <li>{props.obj.name}</li>
)

export default class DisplayList extends Component {
  constructor(props){
    super(props);
    this.state = {objs:[]};
  }
  componentDidMount(){
    axios.get('http://localhost:4000/zguy/')
      .then(response => {
        this.setState({objs: response.data});
      }).catch(function(error){
        console.log(error);
      })
  }
  objList(){
    return this.state.objs.map(function(currentObj, i){
      return <Obj obj={currentObj} key={i}/>;
    })
  }
  render(){
    return(
      <div>
        <ol>
          {this.objList()}
        </ol>
      </div>
    )
  }
}
