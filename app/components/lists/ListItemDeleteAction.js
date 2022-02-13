import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons color={colors.white} name='trash-can' size={35} />
            </View>
        </TouchableWithoutFeedback>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

})

export default ListItemDeleteAction;
