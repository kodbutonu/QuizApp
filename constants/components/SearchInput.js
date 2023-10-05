import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchInput = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText); // Arama işlemi başlatmak için onSearch işlevini çağırın
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
                <Text>Ara</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        padding: 10,
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
