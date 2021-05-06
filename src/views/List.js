import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/movies';
import {View, Text, FlatList} from "react-native";
import {Card, Icon, Button, Rating} from 'react-native-elements';

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
                <Text>Liste des films</Text>
                <Button
                    title="go to home"
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                />
                <FlatList
                    data={list}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        <View >
                            <Card>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider/>
                                <Card.Image source={{ uri: item.image }}>
                                    <Text style={{marginBottom: 10}}>
                                        {item.description}
                                    </Text>
                                </Card.Image>
                                <Text style={{textAlign:'center',marginTop:'5%'}}>
                                    <Rating imageSize={20} readonly startingValue={item.rating}/>
                                </Text>
                                <Button
                                    icon={<Icon name='code' color='#ffffff' />}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='En savoir plus'
                                    onPress={() => {
                                        /* 1. Navigate to the Details route with params */
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
