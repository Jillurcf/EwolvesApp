import React from "react";
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface CustomIconProps {
    name: string,
    color: string,
    size: number,
    borderColor?: string,
    borderWidth?: number,
    padding?: number,
    borderRadius?: number,
}


const CustomIcon: React.FC<CustomIconProps> = ({
    name,
    color,
    size,
    borderColor = '#000',
    borderWidth = 1,
    padding = 8,
    borderRadius = 10,

}) => {
    return (
        <View style={{
            padding: padding,
            borderColor: borderColor,
            borderWidth: borderWidth,
            borderRadius: borderRadius,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
<Icon name={name} size={size} color={color} />
        </View>
    )
}

export default CustomIcon;