import React, { useEffect, useState } from 'react';
import { getMovies, setMovie } from '../services/movies';
import {View, Text, FlatList, TextInput, Alert} from "react-native";
import {Card, Icon, Button} from 'react-native-elements';
import {useController, useForm} from "react-hook-form";

export function List() {
    const [list, setList] = useState([]);
    const [movieInput, setMovieInput] = useState(
        {object: {
                title: "",
                description: ""
            }
        })
    const { control, handleSubmit } = useForm();

    const Input = ({name, control}) => {
        const {field} = useController({
            control,
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
            />
        );
    };

    const onSubmit = (e) => {
        console.log(e);
       setMovie(e);
    };

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

    const renderItem = ({ item }) => (
        <Item objet={item} />
    );

    const Item = ({ objet }) => (
        <View >
            <Card>
                <Card.Title>{objet.title}</Card.Title>
                <Card.Divider/>
                <Card.Image source={{ uri: objet.image }}>
                    <Text style={{marginBottom: 10}}>
                        {objet.description}
                    </Text>
                </Card.Image>
                <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>{objet.rating}</Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='En savoir plus' />
            </Card>
        </View>
    );

    return(
            <View style={{paddingBottom: '20%'}} className="wrapper">
                <Text h1>Movie Ratings</Text>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
                <Text>HELOOO</Text>
                <View>
                    <Text>New Movie</Text>
                    <Text>Title</Text>
                    <Input control={control} name="Title" />
                    <Input control={control} name="Desc" />
                    <Button
                        title="submit"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>
    )
}
