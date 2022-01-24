import React, {FC, MouseEvent, useState} from "react";

import ToDoItem from "./ToDoItem";

const ToDoBlock: FC = () => {
    const [toDoList, setToDo] = useState([]);
    const [task, setTask] = useState<string>('');

const handleAddNew = (event:MouseEvent)=>{
    alert('hello')
    }
    
    return (
    <section className="to-do-block">
        <div className="to-do-block__items">
        <button className="to-do-block__add-new" onClick={handleAddNew}>Add new</button>
        <button className="to-do-block__reset">Reset</button>
        </div>
            <ToDoItem task={task}/>
    </section>
    ) 
}
export default ToDoBlock;