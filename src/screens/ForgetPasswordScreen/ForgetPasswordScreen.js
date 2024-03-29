import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomerButton from '../../components/CustomerButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ForgetPasswordScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const onResetPasswordPressed = (data) => {
    // Handle reset password logic
    console.log(data);
    // You may want to navigate to a confirmation screen or handle the logic accordingly
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>

        <CustomerInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
        />

        <CustomerButton text="Reset Password" onPress={handleSubmit(onResetPasswordPressed)} />

        <Text style={styles.text}>
          Remember your password?{' '}
          <Text style={styles.link} onPress={onSignInPressed}>Sign in</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20
  },
  link: {
    color: '#FD8075'
  }
});

export default ForgetPasswordScreen;
