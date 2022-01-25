import { FC, MouseEvent, ReactElement } from "react";
import '../componentsStyles/css/Todo.css'
import TodoProps from "../interfaces/TodoProps";

const Todo: FC<TodoProps> = ({ text, id, completed, todo, todos, setTodos }): ReactElement => {
    const deleteHandler = () => {
        setTodos(todos.filter(e=> e.id !== todo.id))
    }
    
    return (
    <div className="todo" id= {String(id)}>
        <input type="checkbox" className="todo__checkbox"/>
            <p className="todo__text">{text}</p>
            <button className="todo__delete" onClick={deleteHandler}>X</button>
        </div>
    )
};

export default Todo;