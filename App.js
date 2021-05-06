import React from 'react';
import {List} from "./src/views/List";
//import {Movie} from "./src/views/Movie";
import {NewMovie} from "./src/views/NewMovie";
import {SearchMovie} from "./src/views/SearchMovie";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { Text, View, Image} from "react-native";

const Stack = createStackNavigator();

const Movie = ({route, navigation}) => {
    const { movie } = route.params;
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
};

const Login = ({ navigation, route }) => {
    return (
        <View>
            <Text>Ceci est l'écran de login</Text>
            <Button
                title="go to home"
                onPress={() => {
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

function Home() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="List" component={List}/>
            <Tab.Screen name="NewMovie" component={NewMovie} />
            <Tab.Screen name="SearchMovie" component={SearchMovie} />
        </Tab.Navigator>);}

const Tab = createBottomTabNavigator();

export default function App() {

  return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Movie"
                    component={Movie}
                    initialParams={{ previousPage: "no previous page" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}
