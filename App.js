import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {List} from "./src/views/List";
import {Header} from "react-native-elements";

export default function App() {

  return(
      <SafeAreaProvider>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <List />
      </SafeAreaProvider>
  )
}
