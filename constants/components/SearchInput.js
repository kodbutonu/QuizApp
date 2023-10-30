import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchInput = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Arama yap..."
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.button}>
                <EvilIcons name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: 350,
        marginTop: 0,
        height: 60
    },
    input: {
        flex: 1,
        padding: 0,
        marginLeft: 20,
    },
    button: {
        padding: 10,
    },
});

export default SearchInput;
