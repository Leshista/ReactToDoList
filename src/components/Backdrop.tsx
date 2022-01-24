import React, {FC} from 'react';

import './Backdrop.css'

interface BackdropProps{
    onClick: () => void;
}

const Backdrop:FC<BackdropProps> = (props) => {
    return <div className="backdrop" onClick={props.onClick}/>
}

export default Backdrop