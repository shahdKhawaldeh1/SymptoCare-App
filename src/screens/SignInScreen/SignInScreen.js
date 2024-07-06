import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text,Alert  } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomerButton from '../../components/CustomerButton';
import CustomerInput from '../../components/CustomerInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';


const SignInScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();

  const handleSignIn = async (data) => {
    const { email, password } = data;

    const apiUrl = 'http://10.0.2.2:8000/signin/';

    const payload = { email, password };
    console.log('Data sent to backend:', payload);  // Log the data being sent

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);  // Log the response data
      Alert.alert('Sign In Successful', 'You have successfully signed in!', [
        {
          text: 'OK',
          onPress: () => {
            reset(); // Reset form fields
            navigation.navigate('Home'); // Navigate to home screen
          },
        },
      ]);
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Sign In Error', `An error occurred while signing in. Please try again later. Error: ${error.message}`);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Sign In</Text>
        <CustomerInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        <CustomerInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password should be minimum 6 characters' },
          }}
        />

        <CustomerButton text="Sign In" onPress={handleSubmit(handleSignIn)} />
        <CustomerButton
          text="Forget Password?"
          onPress={() => navigation.navigate('ForgetPassword')}
          type="TERTIARY"
          style={{ marginTop: 10 }}
        />

        <CustomerButton
          text="Don't have an account? Create one"
          onPress={() => navigation.navigate('SignUp')}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default SignInScreen;
