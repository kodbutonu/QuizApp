import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import Slider from '../constants/Slider';
import SearchButton from '../constants/components/SearchInput';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/background-app.png')}
            >
            <View style={styles.app}>
            <View style={styles.textCon}>
                        <Text style={styles.text}>Hoşgeldin</Text>
                        <Text style={styles.text1}>Hadi testi yap ve bilgi seviyeni ölç...</Text>
            </View>
              <Slider/>
              <SearchButton/>
            </View>
            
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    app:{
        marginTop:100,
        marginLeft:20
    },
    text:{
        color:"black",
        fontSize:30,
        fontWeight:"bold"

    },
    textCon:{
        height:50,
        width:'auto'
    },
    text1:{
        marginTop:5,
        color:"grey",
        fontSize:16,

    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    backgrounddef: {
        height: 250,
        width: 350,
        marginTop: 180,
        borderRadius: 10, // Yuvarlama miktarı burada belirtiliyor
        justifyContent: 'center',
        marginLeft: 20,
        overflow: 'hidden', // Bu satırı ekleyin
    },
});

export default HomeScreen;
