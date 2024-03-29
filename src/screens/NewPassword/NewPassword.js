import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomerButton from '../../components/CustomerButton';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
   
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
    navigation.navigate('Home')
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('SignIn')

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomerInput
          placeholder="Confirm your code"
          value={code}
          setValue={setCode}
          style={{ backgroundColor: 'gray' }}
        />
        <CustomerInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
          style={{ backgroundColor: 'gray' }}
          secureTextEntry={true} // Hide entered text for passwords
        />

        <CustomerButton text="Submit" onPress={onSubmitPressed} />
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
});

export default NewPassword;
