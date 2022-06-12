import React from 'react';
import * as Yup from 'yup'

import { Form, FormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function RegisterScreen (props) {
    return (
        <Screen>
            <Form
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    name="name"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Name"
                    textContentType="name"
                />



                <FormField
                    name="email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="email"
                    textContentType="emailAddress"
                />

                <FormField
                    autoCapitalize="none"
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" ></SubmitButton>
            </Form>
        </Screen>
    );
}

export default RegisterScreen;