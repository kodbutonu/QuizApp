import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderComponent = ({ image, text, backgroundColor, onValueChange }) => {
    return (
        
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                onValueChange={onValueChange}
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
            />
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        width:350,
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        flexDirection: "row",
        marginBottom:5,
        marginTop:30,
        marginRight:60
    },
    imageContainer: {
        flex: 1,
        width: '100%', // Resmin tam ekran genişliğinde olmasını sağlar
        height: 200, // Resmin yüksekliğini ayarlayın
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        height: 180, // Metin kutusunun yüksekliğini ayarlayın
        width: '40%', // Metin kutusunun tam ekran genişliğinde olmasını sağlar
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:30,
        textAlign:"justify"
    },
    image: {
        width: '80%',
        height: '70%',
    },
    text: {
        fontSize:23,
        fontWeight: 'bold',
        color:"orange",


    },
    slider: {
        height:0,
        width:0,
        alignSelf: 'center',
    },
});

export default SliderComponent;
