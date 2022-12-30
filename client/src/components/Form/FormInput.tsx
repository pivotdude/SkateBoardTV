import React, {HTMLInputTypeAttribute} from 'react';
interface FormInputProps {
    type: HTMLInputTypeAttribute,
    name: string,
    placeholder: string,
    // onChange?: Function,
    // value?: string,
}
const FormInput = (props: FormInputProps) => {
    return (
        <div className='form-el'>
            <input {...props} className='form-el__input'/>
        </div>
    );
};

export default FormInput;