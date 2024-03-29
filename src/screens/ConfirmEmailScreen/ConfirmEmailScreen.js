import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomerButton from '../../components/CustomerButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailPassword = () => {
  const navigation = useNavigation(); // Move useNavigation inside the component

  const [code, setCode] = useState('');

  const onConfirmPresses = () => {
    navigation.navigate('Home');
  };

  const onResendPressed = () => {
    console.warn(' onResendPressed');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomerInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          style={{ backgroundColor: 'gray' }}
        />

        <CustomerButton text="Confirm" onPress={onConfirmPresses} />

        <CustomerButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomerButton
          text="Back to Sign in"
          onPress={onSignInPressed}
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

export default ConfirmEmailPassword;
