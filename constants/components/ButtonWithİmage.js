import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const ButtonWithImage = ({  onPress, disabled, imageSource,height}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {imageSource && (
                    <Image source={imageSource} style={{ width: 34, height: 34, marginRight:260 }} />
                )}
             
            </View>
        </TouchableOpacity>
    );
};

export default ButtonWithImage;
