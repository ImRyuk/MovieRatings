import React from 'react';
import { setMovie } from '../services/movies';
import {View, Text, TextInput, ScrollView} from "react-native";
import {Button} from 'react-native-elements';
import {useController, useForm} from "react-hook-form";

export function NewMovie() {
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

    const InputRating = ({name, control}) => {
        const {field} = useController({
            control,
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                keyboardType='numeric'
            />
        );
    };

    const onSubmit = (e) => {
        console.log(e);
        setMovie(e);
    };

    return(
        <View className="wrapper">
            <Text>New Movie</Text>
            <View>
                <Text>Title</Text>
                <Input control={control} name="Title" />
                <Input control={control} name="Desc" />
                <InputRating control={control} name="Rating" />
                <Button
                    title="submit"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}
