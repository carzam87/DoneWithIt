import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Text from './Text';

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}></Image>
            <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow:'hidden'
    },
    detailsContainer:{
        padding:20
    },
    image:{
        width:'100%',
        height:200
    },
    subTitle:{
        color: colors.secondary,
        fontWeight:'bold'
    },
    title:{
        marginBottom:7
    }
})

export default Card;
