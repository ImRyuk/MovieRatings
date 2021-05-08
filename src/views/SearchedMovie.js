import React from 'react';
import {View, Text, Image} from "react-native";


class Movie extends React.Component {
    render() {
        const {Title, Poster, Year} = this.props;
        return (
            <View className="movie">
                <View className="title-year">
                    <Text className="title">{Title}</Text>
                    <Text className="year">{Year}</Text>
                </View>
                <View className="poster">
                    <Image src={Poster} alt="my movie poster"/>
                </View>
            </View>
        )
    }
}
export default Movie;