import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

function WelcomeScreen(props) {
    return (
       <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
           <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>   
           </View>
           <View style={styles.buttonsContainer}>
           <Button title="Login"/>
            <Button title="Register" color='secondary' />
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
    },
    
    logo:{
        width:100,
        height:100,
        bottom:5
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center',
        
    },
    buttonsContainer:{
        padding:20,
        width:'100%'
    },
    tagLine:{
      fontSize:25,
      fontWeight:'600',
      paddingVertical:20  
    }
})

export default WelcomeScreen;