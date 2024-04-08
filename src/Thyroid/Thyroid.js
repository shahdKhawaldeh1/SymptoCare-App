import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThyroidLogo from '../../assets/images/Thyroid_logo.jpg';

const Thyroid = () => {
  const navigation = useNavigation();

  // Define state variables to store user-selected data
  const [formData, setFormData] = useState({
    age: '',
    genderFemale: 0, // Changed from 'sex' to 'genderFemale' with value 0 for male and 1 for female
    genderMale: 0, // Added state for male gender
    onThyroxine: 0,
    queryOnThyroxine: 0,
    onAntithyroidMedication: 0,
    sick: 0,
    pregnant: 0,
    thyroidSurgery: 0,
    I131Treatmenty: 0,
    queryHypothyroid: 0,
    queryHyperthyroid: 0,
  });

  const onNextPressed = () => {
    // Prepare the data to be sent
    const dataToSend = {
      age: formData.age,
      genderFemale: formData.genderFemale, // Changed from 'sex' to 'genderFemale'
      genderMale: formData.genderMale, // Added for male gender      onThyroxine: formData.onThyroxine,
      queryOnThyroxine: formData.queryOnThyroxine,
      onAntithyroidMedication: formData.onAntithyroidMedication,
      sick: formData.sick,
      pregnant: formData.pregnant,
      thyroidSurgery: formData.thyroidSurgery,
      I131Treatmenty: formData.I131Treatmenty,
      queryHypothyroid: formData.queryHypothyroid,
      queryHyperthyroid: formData.queryHyperthyroid,


      
    };
    navigation.navigate('Thyroid2');


  //   const apiUrl = 'https://example.com/api/endpoint'; 

  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
       
  //     },
  //     body: JSON.stringify(dataToSend),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(responseData => {
  //     console.log('API Response:', responseData);
  //     navigation.navigate('Thyroid2');
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

    console.log("Form Data:", formData);
   };

  // Function to update form data based on input
  const updateFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const handleGenderSelection = (gender) => {
    setFormData(prevState => {
      if (gender === 'female') {
        return {
          ...prevState,
          genderFemale: 1,
          genderMale: 0,
        };
      } else if (gender === 'male') {
        return {
          ...prevState,
          genderFemale: 0,
          genderMale: 1,
        };
      }
      return prevState; // No change if gender is neither female nor male
    });
  };
  
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={ThyroidLogo} style={styles.logo} />
        </View>
        {/* Input fields */}
        {/* Age */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={formData.age}
            onChangeText={(text) => updateFormData('age', text)}
            keyboardType="numeric"
            placeholder="Enter Age"
            placeholderTextColor="#999"
          />
        </View>
       {/* Gender */}
       <View style={styles.inputRow}>
  <Text style={styles.label}>Gender</Text>
  <View style={styles.genderContainer}>
    <TouchableOpacity
      style={[styles.genderOption, formData.genderFemale === 1 && styles.selectedGender]}
      onPress={() => handleGenderSelection('female')}
    >
      <Text>Female</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.genderOption, formData.genderMale === 1 && styles.selectedGender]}
      onPress={() => handleGenderSelection('male')}
    >
      <Text>Male</Text>
    </TouchableOpacity>
  </View>
</View>

       {/* Additional features */}
       {/* On Thyroxine */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>On Thyroxine</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.onThyroxine === 1 && styles.selectedGender]}
            onPress={() => updateFormData('onThyroxine', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.onThyroxine === 0 && styles.selectedGender]}
            onPress={() => updateFormData('onThyroxine', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Query on Thyroxine */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Query on Thyroxine</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryOnThyroxine === 1 && styles.selectedGender]}
            onPress={() => updateFormData('queryOnThyroxine', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryOnThyroxine === 0 && styles.selectedGender]}
            onPress={() => updateFormData('queryOnThyroxine', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* On Antithyroid Medication */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>On Antithyroid Medication</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.onAntithyroidMedication === 1 && styles.selectedGender]}
            onPress={() => updateFormData('onAntithyroidMedication', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.onAntithyroidMedication === 0 && styles.selectedGender]}
            onPress={() => updateFormData('onAntithyroidMedication', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Sick */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Sick</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.sick === 1 && styles.selectedGender]}
            onPress={() => updateFormData('sick', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.sick === 0 && styles.selectedGender]}
            onPress={() => updateFormData('sick', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Pregnant */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Pregnant</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.pregnant === 1 && styles.selectedGender]}
            onPress={() => updateFormData('pregnant', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.pregnant === 0 && styles.selectedGender]}
            onPress={() => updateFormData('pregnant', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Thyroid Surgery */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Thyroid Surgery</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.thyroidSurgery === 1 && styles.selectedGender]}
            onPress={() => updateFormData('thyroidSurgery', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.thyroidSurgery === 0 && styles.selectedGender]}
            onPress={() => updateFormData('thyroidSurgery', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* I131 Treatment */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>I131 Treatment</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.I131Treatmenty === 1 && styles.selectedGender]}
            onPress={() => updateFormData('I131Treatmenty', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.I131Treatmenty === 0 && styles.selectedGender]}
            onPress={() => updateFormData('I131Treatmenty', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Query Hypothyroid */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Query Hypothyroid</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryHypothyroid === 1 && styles.selectedGender]}
            onPress={() => updateFormData('queryHypothyroid', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryHypothyroid === 0 && styles.selectedGender]}
            onPress={() => updateFormData('queryHypothyroid', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Query Hyperthyroid */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Query Hyperthyroid</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryHyperthyroid === 1 && styles.selectedGender]}
            onPress={() => updateFormData('queryHyperthyroid', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.queryHyperthyroid === 0 && styles.selectedGender]}
            onPress={() => updateFormData('queryHyperthyroid', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
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
  genderContainer: {
    flexDirection: 'row',
  },
  genderOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: '#198EB6',
    borderColor: '#4287f5',
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#198EB6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:30
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Thyroid;
