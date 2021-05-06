import React from 'react';
import {View, Text} from "react-native";

export const Movie = ({ movie }) => {
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
};
