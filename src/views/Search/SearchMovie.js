import React, {useState} from 'react';
import {View, Button, TextInput} from "react-native";
import {Input} from "react-native-elements/dist/input/Input";

export const Search = (props) => {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        props.handleSendRequest(title)
        setTitle(title)
    }

    return (
            <View className="search">
                <Input placeholder="Chercher un film" className="search-box" type="text" onChangeText={title => setTitle(title)} value={title}/>
                <Button className="button" type="submit" onPress={handleSubmit} title="Chercher"/>
            </View>
        )
}
export default Search;