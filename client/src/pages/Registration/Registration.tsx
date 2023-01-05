import React from 'react';
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import useInput from "../../hooks/useInput";
import {regAction} from "../../redux/actions";
import {StateModel} from "../../Models";
import {useSelector} from "react-redux";
const Registration = () => {
    const nameInput = useInput()
    const emailInput = useInput()
    const passwordInput = useInput()
    const repeatPasswordInput = useInput()

    const regUser: any = useSelector((state: StateModel) => state.authorization.reg)
    if (regUser.success === true || regUser.success === false) {
        console.log(regUser)
    }

    return (
        <Form header='Registration form' callback={
            regAction({
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                repeatPassword: repeatPasswordInput.value
            })
        }>
            <FormInput placeholder="Your nickname" type="text" name="name" {...nameInput} />
            <FormInput placeholder="Your email" type="email" name="email" {...emailInput}/>
            <FormInput placeholder="Your password" type="password" name="password" {...passwordInput}/>
            <FormInput placeholder="Repeat password" type="password" name="repeatPassword" {...repeatPasswordInput}/>
        </Form>
    );
};

export default Registration;