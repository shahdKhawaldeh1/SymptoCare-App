import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomerButton from '../../components/CustomerButton';
import CustomerInput from '../../components/CustomerInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';


const SignInScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSignInPresses = (data) => {
    navigation.navigate('Home');
  };

  const onForgetPasswordPresses = () => {
    navigation.navigate('ForgetPassword');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <CustomerInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
        />
        <CustomerInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password should be minimum 6 characters' },
            pattern: {
              value: /^(?=.*\d)(?=.*\W).*$/,
              message: 'invalid Password',
            },
          }}
        />

        <CustomerButton text="Sign In" onPress={handleSubmit(onSignInPresses)} />
        <CustomerButton
          text="Forget Password?"
          onPress={onForgetPasswordPresses}
          type="TERTIARY"
          style={{ marginTop: 10 }}
        />

        <CustomerButton text="Sign in with Facebook" onPress={onSignInFacebook} bgColor="#85C2D7" />
        <CustomerButton text="Sign in with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomerButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
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
