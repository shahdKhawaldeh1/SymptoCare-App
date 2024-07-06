import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import heart_logo from '../../../assets/images/heart_logo.png';

const HeartDisease = () => {
  // Define state variables to store user-selected data
  const [formData, setFormData] = useState({
    name: "",
    phone: "", // New phone field
    email:"",
    age: 0,
    restingBP: 0,
    cholestrol: 0,
    fasting: 0,
    maxHR: 0,
    oldpeak: 0,
    gender: 0, // 0: female / 1: male
    ChestPainType_ASY: 0,
    ChestPainType_ATA: 0,
    ChestPainType_NAP: 0,
    ChestPainType_TA: 0,
    RestingECG_LVH: 0,
    RestingECG_Normal: 0,
    RestingECG_ST: 0,
    ExerciseAngina: 0,
    ST_Slope_Down: 0,
    ST_Slope_Flat: 0,
    ST_Slope_Up: 0,
  });

  // Define state variables to store prediction and probability
  const [prediction, setPrediction] = useState('');
  const [probability, setProbability] = useState('');
  const [predictionMessage, setPredictionMessage] = useState('');

  const onNextPressed = () => {
    // Read the values from formData state
    const dataArray = [
      formData.name,
      formData.phone, // Add phone number to data array
      formData.email,
      formData.age,
      formData.restingBP,
      formData.cholestrol,
      formData.fasting,
      formData.maxHR,
      formData.oldpeak,
      formData.gender,
      formData.ChestPainType_ASY,
      formData.ChestPainType_ATA,
      formData.ChestPainType_NAP,
      formData.ChestPainType_TA,
      formData.RestingECG_LVH,
      formData.RestingECG_Normal,
      formData.RestingECG_ST,
      formData.ExerciseAngina,
      formData.ST_Slope_Down,
      formData.ST_Slope_Flat,
      formData.ST_Slope_Up,
     
    ];

    console.log('data:', dataArray); // Log the data array

    const apiUrl = 'http://10.0.2.2:8000/predict/heart/';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: dataArray }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        if (responseData.prediction !== undefined) {
          const predictionValue = responseData.prediction;
          let predictionMessage = '';
          if (predictionValue === 1) {
            predictionMessage = 'The patient has the disease.';
          } else {
            predictionMessage = 'The patient is free of disease.';
          }
          // Set prediction message and probability to state
          setPredictionMessage(predictionMessage);
          setProbability((responseData.probability * 100).toFixed(2) + '%');
          console.log('Prediction:', predictionMessage);
          console.log('Probability:', responseData.probability);
        } else {
          console.warn('No prediction provided in the response');
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

  // Function to update form data based on input
  const updateFormData = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleGenderSelection = (gender) => {
    setFormData(prevState => {
      if (gender === 'female') {
        return {
          ...prevState,
          gender: 0,
        };
      } else if (gender === 'male') {
        return {
          ...prevState,
          gender: 1,
        };
      }
      return prevState;
    });
  };

  const handleChestPainSelection = (pain) => {
    let chestPainValues = {
      ChestPainType_ASY: 0,
      ChestPainType_ATA: 0,
      ChestPainType_NAP: 0,
      ChestPainType_TA: 0,
    };
    switch (pain) {
      case 'ASY':
        chestPainValues.ChestPainType_ASY = 1;
        break;
      case 'ATA':
        chestPainValues.ChestPainType_ATA = 1;
        break;
      case 'NAP':
        chestPainValues.ChestPainType_NAP = 1;
        break;
      case 'TA':
        chestPainValues.ChestPainType_TA = 1;
        break;
      default:
        break;
    }
    setFormData(prevState => ({
      ...prevState,
      ...chestPainValues,
    }));
  };

  const handleRestingECGSelection = (ecg) => {
    let ecgValues = {
      RestingECG_LVH: 0,
      RestingECG_Normal: 0,
      RestingECG_ST: 0,
    };
    switch (ecg) {
      case 'LVH':
        ecgValues.RestingECG_LVH = 1;
        break;
      case 'NORMAL':
        ecgValues.RestingECG_Normal = 1;
        break;
      case 'ST':
        ecgValues.RestingECG_ST = 1;
        break;
      default:
        break;
    }
    setFormData(prevState => ({
      ...prevState,
      ...ecgValues,
    }));
  };

  const handleStSlopeSelection = (slope) => {
    let slopeValues = {
      ST_Slope_Down: 0,
      ST_Slope_Flat: 0,
      ST_Slope_Up: 0,
    };
    switch (slope) {
      case 'DOWN':
        slopeValues.ST_Slope_Down = 1;
        break;
      case 'FLAT':
        slopeValues.ST_Slope_Flat = 1;
        break;
      case 'UP':
        slopeValues.ST_Slope_Up = 1;
        break;
      default:
        break;
    }
    setFormData(prevState => ({
      ...prevState,
      ...slopeValues,
    }));
  };

  const handleFastingSelection = (value) => {
    setFormData(prevState => ({
      ...prevState,
      fasting: value,
    }));
  };

  const handleExerciseAngina = (value) => {
    setFormData(prevState => ({
      ...prevState,
      ExerciseAngina: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={heart_logo} style={styles.logo} />
        </View>
        {/* Input fields */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => updateFormData('name', text)}
            placeholder="Name"
            placeholderTextColor="#999"
          />
        </View>
         {/* email fields */}
         <View style={styles.inputRow}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => updateFormData('email', text)}
            placeholder="Email"
            placeholderTextColor="#999"
          />
        </View>
        {/* Phone */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => updateFormData('phone', text)}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            placeholderTextColor="#999"
          />
        </View>
        {/* Age */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={formData.age}
            onChangeText={(text) => updateFormData('age', parseInt(text))}
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
              style={[styles.genderOption, formData.gender === 0 && styles.selectedGender]}
              onPress={() => handleGenderSelection('female')}
            >
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.gender === 1 && styles.selectedGender]}
              onPress={() => handleGenderSelection('male')}
            >
              <Text>Male</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chest Pain */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Chest Pain</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderOption, formData.ChestPainType_ASY === 1 && styles.selectedGender]}
              onPress={() => handleChestPainSelection('ASY')}
            >
              <Text>ASY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.ChestPainType_ATA === 1 && styles.selectedGender]}
              onPress={() => handleChestPainSelection('ATA')}
            >
              <Text>ATA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.ChestPainType_NAP === 1 && styles.selectedGender]}
              onPress={() => handleChestPainSelection('NAP')}
            >
              <Text>NAP</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Resting BP</Text>
          <TextInput
            style={styles.input}
            value={formData.restingBP}
            onChangeText={(text) => updateFormData('restingBP', parseFloat(text))}
            keyboardType="numeric"
            placeholder="Enter restingBP"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Cholestrol</Text>
          <TextInput
            style={styles.input}
            value={formData.cholestrol}
            onChangeText={(text) => updateFormData('cholestrol', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter cholestrol"
            placeholderTextColor="#999"
          />
        </View>

        {/* Resting ECG */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Resting ECG</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderOption, formData.RestingECG_LVH === 1 && styles.selectedGender]}
              onPress={() => handleRestingECGSelection('LVH')}
            >
              <Text>LVH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.RestingECG_Normal === 1 && styles.selectedGender]}
              onPress={() => handleRestingECGSelection('NORMAL')}
            >
              <Text>NORMAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.RestingECG_ST === 1 && styles.selectedGender]}
              onPress={() => handleRestingECGSelection('ST')}
            >
              <Text>ST</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* max HR */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>maxHR</Text>
          <TextInput
            style={styles.input}
            value={formData.maxHR}
            onChangeText={(text) => updateFormData('maxHR', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter maxHR"
            placeholderTextColor="#999"
          />
        </View>

        {/* OLD PEAK */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Old peak</Text>
          <TextInput
            style={styles.input}
            value={formData.oldpeak}
            onChangeText={(text) => updateFormData('oldpeak', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter oldpeak"
            placeholderTextColor="#999"
          />
        </View>

        {/* ST slope */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>ST Slope</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderOption, formData.ST_Slope_Down === 1 && styles.selectedGender]}
              onPress={() => handleStSlopeSelection('DOWN')}
            >
              <Text>DOWN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.ST_Slope_Flat === 1 && styles.selectedGender]}
              onPress={() => handleStSlopeSelection('FLAT')}
            >
              <Text>FLAT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.ST_Slope_Up === 1 && styles.selectedGender]}
              onPress={() => handleStSlopeSelection('UP')}
            >
              <Text>UP</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fasting */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Fasting</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderOption, formData.fasting === 0 && styles.selectedGender]}
              onPress={() => handleFastingSelection(0)}
            >
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.fasting === 1 && styles.selectedGender]}
              onPress={() => handleFastingSelection(1)}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Exercise Angina */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Exercise Angina</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[styles.genderOption, formData.ExerciseAngina === 0 && styles.selectedGender]}
              onPress={() => handleExerciseAngina(0)}
            >
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderOption, formData.ExerciseAngina === 1 && styles.selectedGender]}
              onPress={() => handleExerciseAngina(1)}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={onNextPressed}>
          <Text style={styles.submitText}>Check the disease</Text>
        </TouchableOpacity>
        {/* Display prediction and probability in text fields */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Prediction:</Text>
          <Text style={styles.resultText}>{predictionMessage}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Probability:</Text>
          <Text style={styles.resultText}>{probability}</Text>
        </View>
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
    marginRight: 10,
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
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  genderOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    marginBottom: 10, // Add margin bottom to create space between rows
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
    marginBottom: 30,
    marginRight:20
  },
  submitText: {
    color: '#fff',
    fontSize: 18,

  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginRight:20


  },
  resultLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight:30


  },
  resultText: {
    color: '#333',
  },
  
});

export default HeartDisease;
