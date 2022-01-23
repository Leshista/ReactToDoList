import { useState } from "react"

import Backdrop from './Backdrop';
import DeleteModal from './DeleteModal';

export default function ToDoItem() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHolderOn = () =>{
        setModalIsOpen(true)
    }

    const deleteHolderOff = () =>{
        setModalIsOpen(false)
    }

    return (
        <div className="to-do-item">
        <input type="checkbox" id="" className="to-do-item__checkbox"/>
        <input type="text" id="" className="to-do-item__text" />
        <button className="to-do-item__delete-button">Change</button>
            <button className="to-do-item__delete-button" onClick={deleteHolderOn}>Delete</button>

            {modalIsOpen && <><Backdrop onClick= {deleteHolderOff}/><DeleteModal onClick= {deleteHolderOff} /></>}
    </div>
    )
}