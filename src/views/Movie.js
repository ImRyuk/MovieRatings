import React from 'react';
import {View, Text} from "react-native";

export const Movie = ({route, navigation}) => {
    const { movie } = route.params;
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
};
