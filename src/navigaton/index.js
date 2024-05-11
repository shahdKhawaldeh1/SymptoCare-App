import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailPassword from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen'; 
import onBoardScreen from '../screens/onBoardScreen';
import NewPassword from '../screens/NewPassword';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import HeartDisease from '../screens/HeartDisease';
import Thyroid from '../Thyroid';
import Thyroid2 from '../Thyroid2';
import Thyroid3 from '../Thyroid3';
import DischargeSummaryPage from '../screens/DischargeSummaryPage';

import Kideny from '../screens/Kideny';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="onBoardScreen"
          component={onBoardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{ headerShown: false }}
        />
        {/* New Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

          <Stack.Screen
          name="NewPassword"
          component={ NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ ChatScreen}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="HeartDisease"
          component={HeartDisease}
          options={{ headerShown: false }}
        />



<Stack.Screen
          name="Thyroid"
          component={Thyroid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Thyroid2"
          component={Thyroid2}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Thyroid3"
          component={Thyroid3}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="DischargeSummaryPage"
          component={DischargeSummaryPage }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kideny"
          component={Kideny}
          options={{ headerShown: false }}
        />

        
      </Stack.Navigator>
   
    </NavigationContainer>
  );
};

export default Navigation;
