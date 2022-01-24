import React, {ChangeEvent, FC, useState } from "react"

import Backdrop from './Backdrop';
import DeleteModal from './DeleteModal';

interface ToDoItemProps{
    setTask: React.Dispatch<React.SetStateAction<string>>;
}


const ToDoItem:FC<ToDoItemProps> = (props) =>{

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHolderOn = () =>{
        setModalIsOpen(true)
    }

    const deleteHolderOff = () =>{
        setModalIsOpen(false)
    }

    const changeHandler = (event:ChangeEvent<HTMLInputElement>): void => {
        props.setTask(event.target.value)
    }

    return (
        <div className="to-do-item">
        <input type="checkbox" id="" className="to-do-item__checkbox"/>
            <input type="text" id="" className="to-do-item__text" onChange={ changeHandler}/>
        <button className="to-do-item__delete-button">Change</button>
            <button className="to-do-item__delete-button" onClick={deleteHolderOn}>Delete</button>

            {modalIsOpen && <><Backdrop onClick= {deleteHolderOff}/><DeleteModal onClick= {deleteHolderOff} /></>}
    </div>
    )
}

export default ToDoItem;