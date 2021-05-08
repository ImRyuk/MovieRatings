import React from 'react';
import { setMovie } from '../services/movies';
import {View, TextInput, StyleSheet} from "react-native";
import {Button, Input, Text} from 'react-native-elements';
import {useController, useForm} from "react-hook-form";

export function NewMovie() {
    const { control, handleSubmit } = useForm();

    const Input = ({name, control, placeholder}) => {

        const {field} = useController({
            control,
            rules: { required: true },
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                placeholder={placeholder}
                selectionColor='#477FA2'
                style={styles.textInput}
                value={field.value}
                onChangeText={field.onChange}
            />
        );
    };

    const InputRating = ({name, control}) => {

        const {field} = useController({
            control,
            rules: { required: {value: true, message: 'required'} },
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                placeholder="Note/5"
                value={field.value}
                onChangeText={field.onChange}

                keyboardType='numeric'
                maxLength={1}
                selectionColor='#477FA2'
                style={styles.textInput}
            />

        );
    };

    const onSubmit = (e) => {
        setMovie(e);
        alert("Le film " + JSON.stringify(e.Title) + " a bien été ajouté!");
    };

    return(
        <View style={styles.container} className="wrapper">
            <Text h2>Nouveau film</Text>
            <View>
                <Input control={control} name="Title" placeholder="Title" />
                <Input control={control} name="Desc" placeholder="Description"/>
                <InputRating control={control} name="Rating" />
                <Button
                    buttonStyle={styles.button}
                    title="submit"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlignVertical: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textInput: {
        width: 350,
        height: 40,
        margin: 5,
        paddingLeft: 6,
        borderBottomWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 3
    },
    button: {
        backgroundColor: '#E7414D',
        width: 300
    }
});
