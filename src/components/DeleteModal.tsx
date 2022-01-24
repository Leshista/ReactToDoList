import React, {FC} from 'react';

import './DeleteModal.css'

interface DeleteModalProps{
    onClick: () => void;
    onDelete: (taskToDelete: string) => void;
    id:any
}

const DeleteModal:FC<DeleteModalProps> = (props) =>{

    const confirmHandler = () =>{
        props.onClick()
        props.onDelete(props.id)
    }

    const cancelHandler = () => {
        props.onClick()
    }
    return (

        <div className="modal">
            <div className="delete-modal">
                <p className="delete-modal__title">Are you sure?</p>
                <div className="delete-modal__buttons">
                    <button className="delete-modal__cancel" onClick={cancelHandler}>Cancel</button>
                    <button className="delete-modal__confirm" onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
        </div>
    ) 
}
export default DeleteModal;