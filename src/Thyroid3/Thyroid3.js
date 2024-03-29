import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Thyroid_logo from '../../assets/images/Thyroid_logo.jpg'

const Thyroid3= () => {
  const navigation = useNavigation();

  const onNextPressed = () => {
    navigation.navigate('KidenyDiseases2');
  };

  const [TT4, setTT4] = useState('');
  const [T4U, setT4U] = useState('');
  const [referralSource, setReferralSource] = useState('');
  const [classFeature, setClassFeature] = useState('');
  const [datasetName, setDatasetName] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={Thyroid_logo} style={styles.logo} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>TT4</Text>
          <TextInput
            style={styles.input}
            value={TT4}
            onChangeText={setTT4}
            keyboardType="numeric"
            placeholder="Enter TT4"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>T4U</Text>
          <TextInput
            style={styles.input}
            value={T4U}
            onChangeText={setT4U}
            keyboardType="numeric"
            placeholder="Enter T4U"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Referral Source</Text>
          <TextInput
            style={styles.input}
            value={referralSource}
            onChangeText={setReferralSource}
            placeholder="Enter Referral Source"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Class</Text>
          <TextInput
            style={styles.input}
            value={classFeature}
            onChangeText={setClassFeature}
            placeholder="Enter Class"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Dataset Name</Text>
          <TextInput
            style={styles.input}
            value={datasetName}
            onChangeText={setDatasetName}
            placeholder="Enter Dataset Name"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={onNextPressed}>
          <Text style={styles.submitText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width and height
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  label: {
    marginRight: 20,
    fontWeight: 'bold',
    color: '#333',
    width: 150, // Adjust as needed
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#198EB6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Thyroid3;
