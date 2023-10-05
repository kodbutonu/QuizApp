import React from 'react';
import { View, Text, Image } from 'react-native';

const CustomComponent = ({ height, backgroundColor, image, width,text }) => {
    return (
        <View style={{ height, backgroundColor,display:"flex",flexDirection:"row" }}>
            <Image source={image} style={{ width, height: '100%' }} />
            <Text>{text}</Text>
        </View>
    );
};

export default CustomComponent;
