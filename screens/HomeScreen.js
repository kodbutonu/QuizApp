import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Slider from '../constants/Slider';
import Cateogry from '../constants/Cateogry';
import CustomBottomTabBar from '../constants/components/CustomBottomTabBar';

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
                    <Slider style={styles.slider} />
                    <Cateogry style={styles.category} />
                </View>
            </ImageBackground>
            <CustomBottomTabBar />
        </View>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1, // Ana içerik konteynırı genişliği
        marginTop: '10%', // Yüzde olarak yükseklik
        marginLeft: '5%', // Yüzde olarak genişlik
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    textCon: {
        height: 'auto', // Yüksekliği içeriğe göre otomatik ayarla
        width: 'auto', // Genişliği içeriğe göre otomatik ayarla
    },
    text1: {
        marginTop: '2%', // Yüzde olarak yükseklik
        color: "grey",
        fontSize: 16,
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    slider: {
        flex: 1, // Slider'ın yükseklik ve genişlikte tüm boş alanı kaplamasını sağlar
    },
    category: {
        flex: 1, // Kategori bileşeninin yükseklik ve genişlikte tüm boş alanı kaplamasını sağlar
    },
});

export default HomeScreen;
