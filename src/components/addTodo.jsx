import { useEffect, useState } from "react";


export const AddTodo = ({ addTodo }) => {

    let [newTodo, setNewTodo] = useState({
        title: '',
        completed: false
    });

    return (
        <div className="add-todo-container text-center my-5">
           <input type="text" 
           placeholder="Enter todo text" 
           className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 px-4"
           onChange={(e)=>setNewTodo({...newTodo, title: e.target.value})}
           value={newTodo.title}
           />
           <br />
           <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 rounded my-2 text-sm"
           onClick={()=>{
            setNewTodo({...newTodo, title: ''});
            addTodo(newTodo);
           }}
           >
            Add To List
            </button>

        </div>
    )
}