import React, {FC, MouseEvent, useState} from "react";

import ToDoItem from "./ToDoItem";

interface NewTaskInterface{
    text:string
}

const ToDoBlock: FC = () => {
    const [toDoList, setToDoList] = useState<{}[]>([]);
    const [task, setTask] = useState<string>('');

    const addNewHandler = (event: MouseEvent): void => {
        const newTask: NewTaskInterface = {
            text: ""
        }
    setToDoList([...toDoList, newTask])
    }

    return (
    <section className="to-do-block">
        <div className="to-do-block__items">
        <button className="to-do-block__add-new" onClick={addNewHandler}>Add new</button>
        <button className="to-do-block__reset">Reset</button>
        </div>
            <ToDoItem setTask={setTask} />
            {console.log(toDoList)}
    </section>
    ) 
}
export default ToDoBlock;
