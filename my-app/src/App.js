// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Todo from './myComp';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       term:'',
//       items:[]
//     };
//   }
  
//   addNew =(event) => {
// event.preventDefault();
//     this.state.items.push(this.state.term);
//     this.setState({items: this.state.items, term:''});
//   }
// inputChanged = (event) => {
//   this.setState({term: event.target.value});
// }
// addNew2 =(event) => {
//     this.state.items.push(event);
//     this.setState({items: this.state.items, term:''});
//   }
//   render() {
//     let input ={} ;
//     return (

//       <div className="list" >
//         <form onSubmit={this.addNew}>
//         <input value={this.state.term} placeholder= "enter new todo" onChange={this.inputChanged} />

//     <button> + </button>
//     </form>
// <input ref = {(node) => { input = node; }}/>
//     <button onClick = {()=> {this.addNew2(input.value)}}> Enter </button>

//         <Todo list = {this.state.items} />
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './myComp';
import TodoList from './Todo';

window.id = 0;
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    };
  }
  componentDidMount (){ 
    this.setState({items: [{text:"Michael",id: 0}]})
  }
  addNew2 =(value) => {
    this.state.items.push({text:value, id: ++window.id});
    this.setState({items: this.state.items});
  }
  removeItem(id){
    this.state.items = this.state.items.filter((todo) => {return (todo.id !== id); });
     this.setState({items: this.state.items});
  }

  render() {
   // let input ={} ;
    return (
      <div className="list">
        <Todo addNew2 = {this.addNew2} />
        <TodoList items={this.state.items} remove={this.removeItem.bind(this)} />
      </div>
    );
  }
}
export default App;

