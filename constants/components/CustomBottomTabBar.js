import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // İlgili ikon kütüphanesini kullanabilirsiniz

function CustomBottomTabBar() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tab}>
                <Ionicons name="home" size={24} color="black" />
                <Text>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cateogry')} style={styles.tab}>
                <Ionicons name="list" size={24} color="black" />
                <Text>Kategori</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Testler')} style={styles.tab}>
                <Ionicons name="flask" size={24} color="black" />
                <Text>Testler</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white', // Arka plan rengi
        padding: 10, // İstediğiniz dolguyu ayarlayın
        borderRadius:10, // Border radius eklenir
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Gölgelendirme efekti
    },
    tab: {
        alignItems: 'center',
        flex: 1, // Tüm yatay alanı kaplar
    },
});

export default CustomBottomTabBar;
