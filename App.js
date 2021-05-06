import React from 'react';
import {List} from "./src/views/List";
import {Movie} from "./src/views/Movie";
import {NewMovie} from "./src/views/NewMovie";
import {SearchMovie} from "./src/views/SearchMovie";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from 'react-native-elements'

import { Text, View, Image} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();


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
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#E7414D',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Ma Liste',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )}}
                name="List"
                component={List}/>
            <Tab.Screen
                options={{
                tabBarLabel: 'Chercher un film',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                )}}
                name="SearchMovie"
                component={SearchMovie} />
            <Tab.Screen
                options={{
                tabBarLabel: 'Ajouter un film',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus" color={color} size={size} />
                )}}
                name="NewMovie"
                component={NewMovie} />
        </Tab.Navigator>);}

const Tab = createBottomTabNavigator();

export default function App() {

  return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Se connecter',
                        headerStyle: {
                            backgroundColor: '#1E375A',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Accueil',
                        headerStyle: {
                            backgroundColor: '#1E375A',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Movie"
                    component={Movie}
                    options={{
                        title: 'Voir un film',
                        headerStyle: {
                            backgroundColor: '#1E375A',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}
