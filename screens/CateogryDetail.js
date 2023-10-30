import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CategoryDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();

    // Kategori adını alın
    const categoryName = route.params.categoryName;

    return (
        <View style={styles.categoryDetail}>
            <Text style={styles.title}>Kategori Detayı</Text>
            <Text style={styles.categoryName}>{categoryName}</Text>
            <Image
                source={require('../assets/images/category-detail-image.png')}
                style={styles.categoryImage}
            />
            <Text style={styles.message}>Soru çözmeye hazır mısın?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // Buraya soru çözmeye başlamak için bir işlev ekleyebilirsiniz
                }}
            >
                <Text style={styles.buttonText}>Evet, Hazırım!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryDetail: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryName: {
        fontSize: 18,
        marginBottom: 10,
    },
    categoryImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CategoryDetail;
