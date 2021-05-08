import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/movies';
import {View, FlatList} from "react-native";
import {Card, Text, Button, Rating} from 'react-native-elements';

const theme = {
    Button: {
        titleStyle: {
            color: 'red',
        },
    },
};

export function List({navigation}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getMovies()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        });
    }, [])

    return(
            <View className="wrapper">
                <Text h2>Ma liste de films</Text>
                <FlatList
                    data={list}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        <View >
                            <Card>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider/>
                                <Card.Image source={{ uri: item.image }}>
                                </Card.Image>
                                <Text>
                                    <Rating imageSize={20} readonly startingValue={item.rating}/>
                                </Text>
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
