// import React from 'react';

// const Todo = (prop) => {
// 	let input={};
// 	return (
// 		<div>
		
// 		<h2> My Todo App </h2>
// 		<ul>
// 		{
// 			prop.list.map((item,id) =>
// 			<li key ={id}> {item} </li>
// 		)}

// 		</ul>
// 		</div> )
// }
// export default Todo;

import React from 'react';

const Todo = (prop) => {
	let input;
	return (
		<div>
		
		<h2> My Todo App </h2>
		 <input ref = {(node) => { input = node; }} placeholder="Enter a new todo"/>
    <button onClick = { ()=> {prop.addNew2(input.value); input.value='';}}> Enter </button>
		
		</div> )
}
export default Todo;
