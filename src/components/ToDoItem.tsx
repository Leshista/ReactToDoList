import React, {ChangeEvent, FC, useState } from "react"

import Backdrop from './Backdrop';
import DeleteModal from './DeleteModal';

interface ToDoItemProps{
    setTask: React.Dispatch<React.SetStateAction<string>>;
    setToDoList: React.Dispatch<React.SetStateAction<{}[]>>;
    toDoList: {}[];
    value: string;
    id: number;
}


const ToDoItem:FC<ToDoItemProps> = (props) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHolderOn = (): void =>{
        setModalIsOpen(true)
    }
    const deleteHolderOff = (): void =>{
        setModalIsOpen(false)
    }
    const deleteItem = (taskToDelete:string): void => {
        props.setToDoList(props.toDoList.filter(e => {
            return e != taskToDelete;
        }))
    }

    const changeHandler = (event:ChangeEvent<HTMLInputElement>): void => {
        props.setTask(event.target.value)
    }

    return (
        <div className="to-do-item" id={String(props.id)}>
        <input type="checkbox" id='' className="to-do-item__checkbox"/>
            <input type="text" id="" value={props.value} className="to-do-item__text" onChange={ changeHandler}/>
        <button className="to-do-item__delete-button">Change</button>
            <button className="to-do-item__delete-button" onClick={deleteHolderOn}>Delete</button>

            {modalIsOpen && <><Backdrop onClick= {deleteHolderOff}/><DeleteModal onClick= {deleteHolderOff} onDelete={deleteItem} id={props.id}/></>}
    </div>
    )
}

export default ToDoItem;