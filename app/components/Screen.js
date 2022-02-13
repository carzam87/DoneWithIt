import React from 'react';
import { StyleSheet, SafeAreaView, View  } from 'react-native';
import Constants from 'expo-constants'

const Screen = ({ style, children }) => {
    return (
        <SafeAreaView style={[styles.screen]}>
            <View style={[styles.container]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flex:1
    },
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})


export default Screen;
