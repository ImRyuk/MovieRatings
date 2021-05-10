import React, { useEffect, useState } from 'react';
import {View} from "react-native";
import Search from "./SearchMovie";
import SearchedList from "./SearchedList";
import axios from "axios";

export function SearchComponent() {

    const [movies, setMovies] = useState([]);

    const sendRequest = (title) => {
        axios.get('https://imdb8.p.rapidapi.com/title/find?q=' + title,
            {
                headers: {
                    "x-rapidapi-key": "b09ad61d4cmsh56cd8763fa4add3p1e86fejsnb114fb76bfe8",
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "useQueryString": true
                }
            })
            .then(function (response) {
                const movies = response.data.results;
                setMovies(movies);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return(
        <View className="SearchComponent">
            <Search handleSendRequest={sendRequest}/>
            <SearchedList movies={movies} />
        </View>
    )
}
export default SearchComponent;