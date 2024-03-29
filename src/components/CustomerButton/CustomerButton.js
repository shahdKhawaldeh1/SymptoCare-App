import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomerButton = ({ onPress, text, type="PRIMARY" , bgColor, fgColor, }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor : bgColor} : {} ]}>
      <Text style={[styles.text, styles[`text_${type}`] , fgColor ? { color: fgColor}  : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center', // Add this line to center text vertically
  },
  container_PRIMARY: {
    backgroundColor: '#198EB6',
  },
  container_SECONDARY:{
    borderColor:'#198EB6',
    borderWidth:2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  text_TERTIARY: {
    color: 'gray',
  },
  text_SECONDARY:{
    color:'#198EB6'
  }
});

export default CustomerButton;
