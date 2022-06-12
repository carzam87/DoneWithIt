import { useFormikContext } from 'formik'
import React from 'react';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function FormField ({ name, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormField;