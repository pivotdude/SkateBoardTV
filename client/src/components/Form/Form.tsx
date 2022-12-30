import React, {ReactNode} from 'react';
import {useDispatch} from "react-redux";
import './Login.scss'

interface FormProps {
    header: string,
    callback: any,
    children?: ReactNode,
}

const Form = (props: FormProps) => {
    const dispatch = useDispatch()
    //
    const SubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(props.callback)
    }

    return (
        <form onSubmit={SubmitHandler} className='form'>
            <div className='form-cup'>
                <p className='form-cup__header'>{props.header}</p>
            </div>
            {props.children}
            <input className="form__button" type="submit"/>
        </form>
    );
};

export default Form;