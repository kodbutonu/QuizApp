import React from 'react';
import { View, Text, Image } from 'react-native';

const CustomComponent = ({ height, backgroundColor, image, width, text, imageHeight,imageWidth,padding }) => {
    return (
        <View style={{ height, backgroundColor, display: "flex", flexDirection: "column", borderRadius: 10,paddingTop:padding, width, marginTop: 10, alignItems: "center",zIndex:4 }}>
            <Image source={image} style={{ width:imageWidth, height: imageHeight,zIndex:10 }} />
            <Text style={{ fontSize: 18, marginLeft: 8, color: "white" }}>{text}</Text>
        </View>
    );
};

export default CustomComponent;
