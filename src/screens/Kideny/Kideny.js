import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import KidenyLogo from '../../../assets/images/KidenyLogo.jpg'

const Kideny= () => {
  const navigation = useNavigation();

  // Define state variables to store user-selected data
  const [formData, setFormData] = useState({
    name:"",
    age: 0,
    Blood: 0, // 0: female / 1: male
   Gravity: 0,
   Albumin:0,
   BloodGlocose: 0,
    BloodUrea: 0,
   SerumCreatinine: 0,
   Sodium: 0,
   potassium: 0,
   hemoglobin: 0,
   packedCellVolume: 0,
   whiteBlood :0,
   RedBlood:0,
   RedBloodAbnormal:0,
     PusCellAbnormal:0,
     PusCellClumps:0,
     Bacteria:0,
     hypertension:0,


  });

   // Define state variables to store prediction and probability
   const [prediction, setPrediction] = useState('');
   const [probability, setProbability] = useState('');

   const [predictionMessage, setPredictionMessage] = useState('');

   const onNextPressed = () => {

      // Read the values from formData state
      const dataArray = [
        formData.age,
        formData.Blood,
        formData.Gravity,
        formData.Albumin,
        formData.Sugar,
        formData.BloodGlocose,
        formData.BloodUrea,
        formData.SerumCreatinine,
        formData.Sodium,
        formData.potassium,
        formData.hemoglobin,
        formData.packedCellVolume,
        formData.whiteBlood,
        formData.RedBlood,
        formData.RedBloodAbnormal,
        formData.PusCellAbnormal,
        formData.PusCellClumps,
        formData.Bacteria,
        formData.hypertension,
        formData.name,
      ];
    
 
    
    console.log('data:', dataArray); // Log the data array

    const apiUrl = 'http://10.0.2.2:8000/predict/kidney/';
  
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
  

//   const handleGenderSelection = (gender) => {
//     setFormData(prevState => {
//       if (gender === 'female') {
//         return {
//           ...prevState,
//           gender: 0,
//         };
//       } else if (gender === 'male') {
//         return {
//           ...prevState,
//           gender: 1,
//         };
//       }
//       return prevState; // No change if gender is neither female nor male
//     });
//   };

  return (
   
<ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>

      <View style={styles.logoContainer}>
          <Image source={KidenyLogo} style={styles.logo} />
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

        {/* Age */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={formData.age}
            onChangeText={(text) => updateFormData('age', parseInt(text))}
            keyboardType="numeric"
            placeholder="Age"
            placeholderTextColor="#999"
          />
        </View>

        {/* Blood Pressure */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Blood Pressure</Text>
          <TextInput
            style={styles.input}
            value={formData.Blood}
            onChangeText={(text) => updateFormData('Blood', parseFloat(text))}
            keyboardType="numeric"
            placeholder="blood pressure"
            placeholderTextColor="#999"
          />
        </View>

        {/* Specific Gravity */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Specific Gravity</Text>
          <TextInput
            style={styles.input}
            value={formData.Gravity}
            onChangeText={(text) => updateFormData('Gravity', parseFloat(text))}
            keyboardType="numeric"
            placeholder="Gravity"
            placeholderTextColor="#999"
          />
        </View>

        {/* Albumin */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Albumin</Text>
          <TextInput
            style={styles.input}
            value={formData.Albumin}
            onChangeText={(text) => updateFormData('Albumin', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Albumin"
            placeholderTextColor="#999"
          />
        </View>

        {/* Sugar */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Sugar</Text>
          <TextInput
            style={styles.input}
            value={formData.Sugar}
            onChangeText={(text) => updateFormData('Sugar', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Sugar"
            placeholderTextColor="#999"
          />
        </View>

        {/* Blood Glocose Random */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Blood Glocose Random</Text>
          <TextInput
            style={styles.input}
            value={formData.BloodGlocose}
            onChangeText={(text) => updateFormData('BloodGlocose', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Blood Glocose"
            placeholderTextColor="#999"
          />
        </View>

        {/* Blood Urea */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Blood Urea</Text>
          <TextInput
            style={styles.input}
            value={formData.BloodUrea}
            onChangeText={(text) => updateFormData('BloodUrea', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Blood Urea"
            placeholderTextColor="#999"
          />
        </View>

        {/* Serum Creatinine */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Serum Creatinine</Text>
          <TextInput
            style={styles.input}
            value={formData.SerumCreatinine}
            onChangeText={(text) => updateFormData('SerumCreatinine', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Serum Creatinine"
            placeholderTextColor="#999"
          />
        </View>

        {/* Sodium */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Sodium</Text>
          <TextInput
            style={styles.input}
            value={formData.Sodium}
            onChangeText={(text) => updateFormData('Sodium', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Sodium"
            placeholderTextColor="#999"
          />
        </View>

        {/* Potassium */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Potassium</Text>
          <TextInput
            style={styles.input}
            value={formData.potassium}
            onChangeText={(text) => updateFormData('potassium', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Potassium"
            placeholderTextColor="#999"
          />
        </View>

        {/* Hemoglobin */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Hemoglobin</Text>
          <TextInput
            style={styles.input}
            value={formData.hemoglobin}
            onChangeText={(text) => updateFormData('hemoglobin', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Hemoglobin"
            placeholderTextColor="#999"
          />
        </View>

        {/* Packed Cell Volume */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Packed Cell Volume</Text>
          <TextInput
            style={styles.input}
            value={formData.packedCellVolume}
            onChangeText={(text) => updateFormData('packedCellVolume', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Packed Cell Volume"
            placeholderTextColor="#999"
          />
        </View>

        {/* White Blood Cell Count */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>White Blood Cell Count</Text>
          <TextInput
            style={styles.input}
            value={formData.whiteBlood}
            onChangeText={(text) => updateFormData('whiteBlood', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="White Blood Cell Count"
            placeholderTextColor="#999"
          />
        </View>

        {/* Red Blood Cell Count */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Red Blood Cell Count</Text>
          <TextInput
            style={styles.input}
            value={formData.RedBlood}
            onChangeText={(text) => updateFormData('RedBlood', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Red Blood Cell Count"
            placeholderTextColor="#999"
          />
        </View>


        <View style={styles.inputRow}>
          <Text style={styles.label}> Red Blood Abnormal</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.RedBloodAbnormal === 1 && styles.selectedGender]}
            onPress={() => updateFormData('RedBloodAbnormal', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.RedBloodAbnormal === 0 && styles.selectedGender]}
            onPress={() => updateFormData('RedBloodAbnormal', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

       

        <View style={styles.inputRow}>
          <Text style={styles.label}>Pus Cell Clumps</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData. PusCellClumps === 1 && styles.selectedGender]}
            onPress={() => updateFormData('PusCellClumps', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData. PusCellClumps === 0 && styles.selectedGender]}
            onPress={() => updateFormData('PusCellClumps', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.inputRow}>
          <Text style={styles.label}>Bacteria</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData. Bacteria === 1 && styles.selectedGender]}
            onPress={() => updateFormData('Bacteria', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData. Bacteria === 0 && styles.selectedGender]}
            onPress={() => updateFormData('Bacteria', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Hypertension</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData. hypertension === 1 && styles.selectedGender]}
            onPress={() => updateFormData('hypertension', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData. hypertension === 0 && styles.selectedGender]}
            onPress={() => updateFormData('hypertension', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
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
    marginBottom: 30,
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
  },
  resultLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultText: {
    color: '#333',
  },
  
});

export default Kideny;
