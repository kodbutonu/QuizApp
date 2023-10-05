import React, { Component } from 'react';
import {
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View          // Container component
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from '../constants/components/Swiper';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class Screens extends Component {
    render() {
        return (
            <Swiper>
                {/* First screen */}
                <View style={[styles.slide, { backgroundColor: 'cyan' }]}>
                    <Ionicons name="information-circle-outline" size={54} color="white" />
                    <Text style={styles.header}>Test Etme</Text>
                    <Text style={styles.text}>Kendi bilgi seviyenizi test edin, yüksek puanlar elde edin ve liderlik tablosunda zirveye ulaşmak için KPPS Quiz Game'e katılın!</Text>
                </View>
                {/* Second screen */}
                <View style={[styles.slide, { backgroundColor: 'red' }]}>
                    <MaterialCommunityIcons name="weather-cloudy" size={54} color="white" />
                    <Text style={styles.header}>Bilgi</Text>
                    <Text style={styles.text}>KPPS Quiz Game, geniş soru havuzu ve farklı kategorilerdeki zorluk seviyeleri ile bilgi düzeyinizi sınamanızı sağlar.</Text>
                </View>
                {/* Third screen */}
                <View style={[styles.slide, { backgroundColor: 'pink' }]}>
                    <Ionicons name="umbrella-outline" size={54} color="white" />
                    <Text style={styles.header}>Eğlence </Text>
                    <Text style={styles.text}>Eğlenceli ve öğretici sorularla dolu bu oyun, arkadaşlarınıza karşı yarışırken aynı zamanda yeni bilgiler öğrenmenizi sağlar.</Text>
                </View>
            </Swiper>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'justify',
        
    },
});

