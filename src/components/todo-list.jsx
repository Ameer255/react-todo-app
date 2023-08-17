export const TodoList = ({ todos, onchange }) => {

    console.log(todos[0].title)

    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map((todo, index) => {
                        
                        return (
                            <li key={index}>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 cursor-pointer"
                                        checked={todo.completed}
                                        onChange={()=>onchange(index)} 
                                    />
                                    <label className={`ml-2  ${todo.completed ? 'line-through' : ''}`}> {todo.title} </label>
                                </div>
                            </li>
                        )
                    })

                }
            </ul>
        </div>
    )
}