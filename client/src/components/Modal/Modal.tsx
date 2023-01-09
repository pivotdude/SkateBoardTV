import React, {useEffect} from 'react';
import './Modal.scss'
import {useDispatch} from "react-redux";
import {hideModal} from "../../redux/actions";

interface ModalProps {
    message: string
}

const Modal = (props: ModalProps) => {

    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return function () { document.body.style.overflow = "" }
    }, [])

    function hide() {
        dispatch(hideModal())
    }

    return (
        <div className='Modal' onClick={hide}>
            <div className='Modal-container'>
                <div className='Modal-box'>
                    <p className='Modal-box__content'>{props.message}</p>
                </div>
            </div>
        </div>

    );
};

export default Modal;