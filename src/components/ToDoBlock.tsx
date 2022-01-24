import React, {FC, MouseEvent, useState} from "react";

import ToDoItem from "./ToDoItem";

interface NewTaskInterface{
    text?:string
}

const ToDoBlock: FC = () => {
    const [toDoList, setToDoList] = useState<{}[]>([]);
    const [task, setTask] = useState<string>('');

    const addNewHandler = (event: MouseEvent): void => {
    setToDoList([...toDoList, task])
    }


    return (
        <section className="to-do-block">
            <div className="to-do-block__buttons">
                <button className="to-do-block__add-new" onClick={addNewHandler}>Add new</button>
                <button className="to-do-block__reset">Reset</button>
            </div>
        <div className="to-do-block__items">
                {toDoList.map((e:NewTaskInterface, key:number) => {
                    return <ToDoItem setTask={setTask} setToDoList={setToDoList} toDoList={toDoList} value={task} key={key} id={key}/>
            })}
            {console.log(toDoList)}
        </div>
    </section>
    ) 
}
export default ToDoBlock;
