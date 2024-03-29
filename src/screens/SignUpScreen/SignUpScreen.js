import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomerButton from '../../components/CustomerButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'
const SignUpScreen = () => {


  const{control , handleSubmit} = useForm();

  const navigation = useNavigation();

  const onRegisterPresses = () => {
    navigation.navigate('Home');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSigInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressesd = () => {
    console.warn('onTermsOfUsePressesd');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomerInput
        name="username"
        control={control}
          placeholder="Username"
          rules={{ required: 'Username is required' }}

         
         />
        <CustomerInput
  placeholder="Email"
  name="email"
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
  placeholder="Password"
  name="password"
  control={control}
  secureTextEntry={true}
  rules={{
    required: 'Password is required',
    minLength: { value: 6, message: 'Password should be minimum 6 characters' },
    pattern: {
      value: /^(?=.*\d)(?=.*\W).*$/,
      message: 'Password must contain at least one number and one symbol',
    },
  }}  
/>

<CustomerInput
  placeholder="Confirm Password"
  name="cpassword"
  control={control}
  secureTextEntry={true}
  rules={{
    required: 'Confirm Password is required',
    validate: value => value === control.getValues('password') || 'Passwords do not match',
  }}
/>


        <CustomerButton text="Register" onPress={handleSubmit (onRegisterPresses)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressesd}>
            Terms of Use
          </Text>
          <Text style={styles.link} onPress={onPrivacyPressed}>
            {' '}
            and Privacy Policy
          </Text>
        </Text>
        <CustomerButton
          text="Sign in with Facebook"
          onPress={onSignInFacebook}
          bgColor="#85C2D7"
        />
        <CustomerButton
          text="Sign in with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomerButton
          text="Have an account? Sign in"
          onPress={onSigInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    marginBottom: 20,
  },
  text: {
    color: 'gray',
    marginVertical: 20,
  },
  link: {
    color: '#FD8075',
  },
});

export default SignUpScreen;
