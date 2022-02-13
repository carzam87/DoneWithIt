import React from 'react';
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function RegisterScreen (props) {
    return (
        <Screen>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Name"
                    textContentType="name"
                />



                <AppFormField
                    name="email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" ></SubmitButton>
            </AppForm>
        </Screen>
    );
}

export default RegisterScreen;