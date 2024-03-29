import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomerInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? 'red' : 'gray' }]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, { color: error ? 'red' : 'black' }]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    // You can add additional styles for the TextInput here if needed
  },
});

export default CustomerInput;
