import './DeleteModal.css'

export default function DeleteModal() {
    return (
        <div className="modal">
            <div className="delete-modal">
                <p className="delete-modal__title">Are you sure?</p>
                <div className="delete-modal__buttons">
                    <button className="delete-modal__cancel">Cancel</button>
                    <button className="delete-modal__confirm">Confirm</button>
                </div>
            </div>
        </div>
    ) 
}