import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomerButton from '../../components/CustomerButton';

const HomeScreen = ({ navigation }) => {
  const [pressedButton, setPressedButton] = useState(null);
  const { navigate } = useNavigation();

  const onChat = () => {
    setPressedButton('chat');
    // Navigate to the 'Chat' screen
    navigate('Chat');
  };

  const onHeartDisease = () => {
    setPressedButton('heart');

    navigate('HeartDisease');

    // Handle action for Heart Disease button
  };

  const onKidneyDisease = () => {
    setPressedButton('kidney');
    // Handle action for Kidney Disease button
  };

  const onThyroid = () => {
    setPressedButton('Thyroid');
    navigate('Thyroid')
    // Handle action for Thyroid button
  };

  const onOther = () => {
    setPressedButton('other');
    // Handle action for Other button
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.heading}>Select a Patient</Text>
        <Text style={styles.subheading}>Choose the patient you suspect may have health concerns.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomerButton 
          text="Heart Diseases" 
          onPress={onHeartDisease} 
          bgColor={pressedButton === 'heart' ? "#13566F" : "#198EB6"} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomerButton 
          text="Kidney Diseases" 
          onPress={onKidneyDisease} 
          bgColor={pressedButton === 'kidney' ? "#13566F" : "#198EB6"} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomerButton 
          text="Thyroid" 
          onPress={onThyroid} 
          bgColor={pressedButton === 'thyroid' ? "#13566F" : "#198EB6"} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomerButton 
          text="Other" 
          onPress={onOther} 
          bgColor={pressedButton === 'other' ? "#13566F" : "#198EB6"} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomerButton 
          text="New Chat!" 
          onPress={onChat} 
          bgColor={pressedButton === 'chat' ? "#7A7A7A" : "grey"} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  boxContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333333',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666666',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});

export default HomeScreen;
