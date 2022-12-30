import React, {useEffect} from 'react';
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import useInput from "../../hooks/useInput";
import {authAction} from "../../redux/actions";
import {useSelector} from "react-redux";
import {authUserModel, StateModel} from "../../Models";
const Login = () => {
    const emailInput = useInput()
    const passwordInput = useInput()

    const authUser: any = useSelector((state: StateModel) => state.authorization.auth)


    useEffect(() => {

        // if (authUser.success === true || authUser.success === false) {
        //     console.log(authUser)
        // }
        if (authUser.success) {
            localStorage.setItem('token', authUser.token)
        }
    }, [authUser])

    return (
    <Form header='Login form' callback={
        authAction({
            email: emailInput.value,
            password: passwordInput.value
        })
    }>
        <FormInput placeholder="Your email" type="email" name="email" {...emailInput} />
        <FormInput placeholder="Your password" type="password" name="password" {...passwordInput}/>
    </Form>
    );
};

export default Login;