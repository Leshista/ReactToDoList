import { FC, ReactElement } from "react";
import '../componentsStyles/css/Todo.css'
import TodoProps from "../interfaces/TodoProps";

const Todo: FC<TodoProps> = ({ text, id, completed, setTodos }): ReactElement => {
    const deleteHandler = () => {
        
    }
    
    return (
    <div className="todo" id= {String(id)}>
        <input type="checkbox" className="todo__checkbox"/>
            <p className="todo__text">{text}</p>
            <button className="todo__delete">X</button>
        </div>
    )
};

export default Todo;