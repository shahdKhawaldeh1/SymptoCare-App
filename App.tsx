/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigaton';

import ChatScreen from './src/screens/ChatScreen/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import HeartDisease from './src/screens/HeartDisease';

const App=()=> {
  
  return (
    <SafeAreaView style={styles.root}>
     <Navigation/>
     {/* <DischargeSummaryPage/> */}
   {/* <ChatScreen/> */}
   {/* <HeartDisease/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  root:{
    flex:1  }
});

export default App;
