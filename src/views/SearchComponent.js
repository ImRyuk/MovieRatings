import React, { useEffect, useState } from 'react';
import unirest from 'unirest';
import {View} from "react-native";
import Search from "./SearchMovie";
import SearchedList from "./SearchedList";

class SearchComponent extends React.Component {
    state = {
        movies: []
    }

    sendRequest = (title) => {
         const req = unirest("GET", "https://imdb8.p.rapidapi.com/title/find");
        req.query({
            "q": title
        });
        req.headers({
            "x-rapidapi-key": "b09ad61d4cmsh56cd8763fa4add3p1e86fejsnb114fb76bfe8",
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "useQueryString": true
        });
        req.end((res) => {
            if (res.error) throw new Error(res.error);
            const movies = res.body.results;
            this.setState({movies});
        });
    }
    render() {
        return (
            <View className="SearchComponent">
                <Search handleSendRequest={this.sendRequest}/>
                <SearchedList movies={this.state.movies} />
            </View>
        );
    }
}
export default SearchComponent;