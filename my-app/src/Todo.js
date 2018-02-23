import React from 'react';

const TodoList = ({items,remove})=>{

	return(
		
		<ul>
		{
			items.map((item,id) =>
				<span>
				
			<li key ={item.id}><button onClick={()=> remove(item.id)} > X </button>  {item.text} </li>
			
			</span>
		)}

				

		</ul>
		)
}
export default TodoList;