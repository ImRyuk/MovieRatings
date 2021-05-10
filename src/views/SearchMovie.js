import React, {useState} from 'react';
import {View, Button, TextInput} from "react-native";

export function Search(props) {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        props.handleSendRequest(title)
        setTitle(title)
    }
    const handleInputTitle = (event) => {
        console.log(event.value);
        console.log(event.target.value);
        event.preventDefault();
        const title = event.target.value;
        setTitle(title);
    }
    return (
            <View className="search">
                <TextInput className="search-box" type="text" onChangeText={title => setTitle(title)} value={title}/>
                <Button className="button" type="submit" onPress={handleSubmit} title="Search"/>
            </View>
        )
}
export default Search;