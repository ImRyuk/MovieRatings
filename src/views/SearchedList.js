import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import {Button, Card, Rating} from "react-native-elements";


class SearchedList extends React.Component {
    render() {
        const {movies} = this.props;
        return (
            <View className="movies">
                <Text h2>Ma liste de films</Text>
                <FlatList
                    data={movies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        <View >
                            <Card>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider/>
                                {item.image ? <Card.Image source={{ uri: item.image.url }}/>: null }

                                <Button
                                    buttonStyle={{backgroundColor: '#E7414D',borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='En savoir plus'
                                    onPress={() => {
                                        navigation.navigate('Movie', {
                                            movie: item
                                        });
                                    }}/>
                            </Card>
                        </View>
                    }
                />
            </View>
        )
    }
}
export default SearchedList;