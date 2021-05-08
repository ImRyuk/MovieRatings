import React from 'react';
import {View, Button, TextInput} from "react-native";

class Search extends React.Component {
    state= {
        title: ''
    }
    handleSubmit = () => {
        const {title} = this.state;
        this.props.handleSendRequest(title)
        this.setState({title: ''})
    }
    handleInputTitle = (event) => {
        console.log(event.target.value);
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }
    render() {
        const {title} = this.state;
        return (
            <View className="search">
                <TextInput className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>
                <Button className="button" type="submit" onPress={this.handleSubmit} title="Search"/>
            </View>
        )
    }
}
export default Search;