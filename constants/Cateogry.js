import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CustomComponent from './components/Container';
import SearchInput from './components/SearchInput';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

    const handleSearch = (searchText) => {
        navigation.navigate('Cateogry',{searchText});
    };

    const handleCategoryPress = (categoryId) => {
        navigation.navigate('CategoryDetail', { categoryId });
    };

    const categories = [
        {
            id: 1,
            name: 'Coğrafya',
            backgroundColor: 'red',
            image: require('../assets/cateogry/geography.png'),
            width: 200,
            imageHeight: "80%",
            imageWidth: "70%"
        },
        {
            id: 2,
            name: 'Tarih',
            backgroundColor: 'cyan',
            image: require('../assets/cateogry/history-book.png'),
            width: 130,
            imageHeight: "60%",
            imageWidth: "40%"
        },
        {
            id: 3,
            name: 'Türkçe',
            backgroundColor: 'pink',
            image: require('../assets/cateogry/languages.png'),
            width: 130,
            imageHeight: "60%",
            imageWidth: "40%"
        },
    ];

    return (
        <View style={styles.category}>
            <SearchInput onSearch={handleSearch} />
            <View style={styles.textDesign}>
                <Text style={styles.text}>Kategoriler</Text>
                <Text style={styles.text1}>Tümü</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.categories}>
                    <TouchableOpacity
                        key={categories[0].id}
                        onPress={() => handleCategoryPress(categories[0].id)}
                    >
                        <CustomComponent
                            key={categories[0].id}
                            height={180}
                            backgroundColor={categories[0].backgroundColor}
                            image={categories[0].image}
                            width={categories[0].width}
                            text={categories[0].name}
                            imageHeight={categories[0].imageHeight}
                            imageWidth={categories[0].imageWidth}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.categories}>
                    {categories.slice(1).map((category) => (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => handleCategoryPress(category.id)}
                        >
                            <CustomComponent
                                key={category.id}
                                height={90}
                                backgroundColor={category.backgroundColor}
                                image={category.image}
                                width={category.width}
                                text={category.name}
                                imageHeight={category.imageHeight}
                                imageWidth={category.imageWidth}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10
    },
    textDesign: {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "5%"
    },
    text1: {
        marginLeft: "60%",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    categories: {
        margin: 10,
    }
});

export default Category;