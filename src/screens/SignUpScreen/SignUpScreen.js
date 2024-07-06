import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomerButton from '../../components/CustomerButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const SignUpScreen = () => {
  const { control, handleSubmit, getValues, reset } = useForm();
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSignUp = async (data) => {
    const { name, email, password, cpassword } = data;

    // Check if password and confirm password match
    if (password !== cpassword) {
      Alert.alert('Signup Error', 'Passwords do not match');
      return;
    }

    // Prepare data array
    const dataArray = [name, email, password];

    const apiUrl = 'http://10.0.2.2:8000/signup/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataArray }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      Alert.alert('Signup Successful', 'You have successfully signed up!', [
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
      Alert.alert('Signup Error', 'An error occurred while signing up. Please try again later.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomerInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{ required: 'Name is required' }}
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
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          }}
        />
        <CustomerButton text="Register" onPress={handleSubmit(handleSignUp)} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={() => console.warn('Terms of Use pressed')}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => console.warn('Privacy Policy pressed')}>
            Privacy Policy
          </Text>
        </Text>
        <CustomerButton
          text="Sign in with Facebook"
          onPress={() => console.warn('Sign in with Facebook')}
          bgColor="#85C2D7"
        />
        <CustomerButton
          text="Sign in with Google"
          onPress={() => console.warn('Sign in with Google')}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomerButton
          text="Have an account? Sign in"
          onPress={() => navigation.navigate('SignIn')}
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
