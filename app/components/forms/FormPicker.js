import { useFormikContext } from 'formik'

import AppPicker from '../Picker';
import PickerItem from '../PickerItem';
import ErrorMessage from './ErrorMessage';

function AppFormPicker ({ 
    items, 
    name, 
    numberOfColumns=1,
    PickerItemComponent=PickerItem,
    placeholder, 
    width }) {
    const { setFieldValue, errors, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}

            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;