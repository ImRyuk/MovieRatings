import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export const Movie = ({route}) => {
    const { movie } = route.params;
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                    uri: movie.image,
                }}
            />
            <Text>{movie.title}</Text>
        </View>
    );
};
