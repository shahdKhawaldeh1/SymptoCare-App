import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThyroidLogo from '../../assets/images/Thyroid_logo.jpg';

const Thyroid = () => {
  const navigation = useNavigation();

  // Define state variables to store user-selected data
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    age: 0,
    gender: 0, // 0: female / 1: male
    TSH: 0,
    T3: 0,
    TT4: 0,
   FTI: 0,
   T4U: 0,
   Query_hypothyroid: 0,
   thyriod_sugery: 0,
   source_other:0,
   onThyroxine :0,
   Query_hyperthyroid:0,
   sick :0,
   FTI_measure:0,
   source_SVHD:0,
    source_SVHC:0,
    source_SVI:0,
   
  

  });

   // Define state variables to store prediction and probability
   const [prediction, setPrediction] = useState('');
   const [probability, setProbability] = useState('');

   const [predictionMessage, setPredictionMessage] = useState('');

   const onNextPressed = () => {

      // Read the values from formData state
      const dataArray = [
        formData.name,
        formData.phone,
        formData.age,
        formData.gender,
        formData.TSH,
        formData.T3,
        formData.TT4,
        formData.FTI,
        formData.T4U,
        formData.Query_hypothyroid,
        formData.thyriod_sugery,
        formData.source_other,
        formData.onThyroxine,
        formData.Query_hyperthyroid,
        formData.sick,
        formData.FTI_measure,
        formData.source_SVHD,
        formData.source_SVHC,
        formData.source_SVI,
       
      
      ];
    
      //console.log('Data Array2:', dataArray); // Log the data array

      
    // Manually create the array of data based on the provided data 
    // thyroid model:
    //const dataArray = [41, 0, 8.4, 1.5, 123, 129, 0.96, 0, 0, 1, 1, 0, 0, 1, 0];
    
    /*
    // rf model:
    [
      28.0,    // age
      0.0,     // sex
      0,       // onThyroxine
      0,       // queryOnThyroxine
      0,       // onAntithyroidMedication
      0,       // sick
      0,       //FTI
      0,       // thyroidSurgery
      1,       // I131Treatment
      0,       // queryHypothyroid
      0,       // queryHyperthyroid
      0,       // lithium
      0,       // goitre
      0,       // tumor
      0,       // hypopituitary
      0,       // psych
      1,       // TSHMeasured
      3.2,     // TSH
      1,       // T3Measured
      1.3,     // T3
      1,       // TT4Measured
      96.0,    // TT4
      1,       // T4UMeasured
      0.9,     // T4U
      1,       // FTIMeasured
      107.0,   // FTI
      0,       // TBGMeasured
      0,       // referralSource_SVHC
      0,       // referralSource_SVHD
      0,       // referralSource_SVI
      1        // referralSource_other
    ];
    */


    
    console.log('data:', dataArray); // Log the data array

    const apiUrl = 'http://176.119.254.220:8000/predict/thyroid/';
  
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
      return prevState; // No change if gender is neither female nor male
    });
  };


  const [selectedReferralSource, setSelectedReferralSource] = useState('SVHD');

  const handleReferrelSource = (source) => {
    setSelectedReferralSource(source); // Update the selected referral source
  
    let referralSourceValues = {
      source_other: 0,
      source_SVHD: 0,
      source_SVHC: 0,
      source_SVI: 0,
    };
  
    switch (source) {
      case 'SVHD':
        referralSourceValues.source_SVHD = 1;
        break;
      case 'SVHC':
        referralSourceValues.source_SVHC = 1;
        break;
      case 'SVI':
        referralSourceValues.source_SVI = 1;
        break;
      case 'other':
        referralSourceValues.source_other = 1;
        break;
      default:
        break;
    }
  
    setFormData((prevState) => ({
      ...prevState,
      ...referralSourceValues,
    }));
  };
  
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={ThyroidLogo} style={styles.logo} />
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


        <View style={styles.inputRow}>
          <Text style={styles.label}>TSH</Text>
          <TextInput
            style={styles.input}
            value={formData.TSH}
            onChangeText={(text) => updateFormData('TSH', parseFloat(text))}
            keyboardType="numeric"
            placeholder="Enter TSH"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>T3</Text>
          <TextInput
            style={styles.input}
            value={formData.T3}
            onChangeText={(text) => updateFormData('T3', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter T3"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>TT4</Text>
          <TextInput
            style={styles.input}
            value={formData.TT4}
            onChangeText={(text) => updateFormData('TT4', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter TT4"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>FTI</Text>
          <TextInput
            style={styles.input}
            value={formData.FTI}
            onChangeText={(text) => updateFormData('FTI', parseFloat(text))}
            keyboardType="decimal-pad"
            placeholder="Enter FTI"
            placeholderTextColor="#999"
          />
        </View>
     
     
        
        <View style={styles.inputRow}>
        <Text style={styles.label}>T4U</Text>
        <TextInput
          style={styles.input}
          value={formData.T4U}
          onChangeText={(text) => updateFormData('T4U', parseFloat(text))}
          keyboardType="decimal-pad"
          placeholder="Enter T4U"
          placeholderTextColor="#999"
        />
      </View>

     
    

{/* Query hypothyroid */}
        <View style={styles.inputRow}>
          <Text style={styles.label}> Query hypothyroid </Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.Query_hypothyroid === 1 && styles.selectedGender]}
            onPress={() => updateFormData('Query_hypothyroid', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.Query_hypothyroid === 0 && styles.selectedGender]}
            onPress={() => updateFormData('Query_hypothyroid', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>


        {/*thyriod sugery*/}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Thyriod sugery</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.thyriod_sugery=== 1 && styles.selectedGender]}
            onPress={() => updateFormData('thyriod_sugery', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.thyriod_sugery=== 0 && styles.selectedGender]}
            onPress={() => updateFormData('thyriod_sugery', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* referral*/}
     

        {/* onThyroxine */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>On Thyroxine </Text>
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

        {/* Query hyperthyroid */}

        <View style={styles.inputRow}>
          <Text style={styles.label}> Query hyperthyroid</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.Query_hyperthyroid === 1 && styles.selectedGender]}
            onPress={() => updateFormData('Query_hyperthyroid', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.Query_hyperthyroid === 0 && styles.selectedGender]}
            onPress={() => updateFormData('Query_hyperthyroid', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        {/* sick */}
        <View style={styles.inputRow}>
          <Text style={styles.label}> sick</Text>
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

        {/* FTI_measure */}
        <View style={styles.inputRow}>
          <Text style={styles.label}> FTI measure</Text>
          <TouchableOpacity
            style={[styles.genderOption, formData.FTI_measure === 1 && styles.selectedGender]}
            onPress={() => updateFormData('FTI_measure', 1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, formData.FTI_measure === 0 && styles.selectedGender]}
            onPress={() => updateFormData('FTI_measure', 0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
{/* source_SVHD */}

<View style={styles.inputRow}>
  <Text style={styles.label}>Referral</Text>
  <ScrollView horizontal={true} contentContainerStyle={styles.referralOptionsContainer}>
    <TouchableOpacity
      style={[
        styles.referralOption,
        selectedReferralSource === 'SVHD' && styles.selectedReferralOption,
      ]}
      onPress={() => handleReferrelSource('SVHD')}
    >
      <Text>SVHD</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.referralOption,
        selectedReferralSource === 'SVHC' && styles.selectedReferralOption,
      ]}
      onPress={() => handleReferrelSource('SVHC')}
    >
      <Text>SVHC</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.referralOption,
        selectedReferralSource === 'SVI' && styles.selectedReferralOption,
      ]}
      onPress={() => handleReferrelSource('SVI')}
    >
      <Text>SVI</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.referralOption,
        selectedReferralSource === 'other' && styles.selectedReferralOption,
      ]}
      onPress={() => handleReferrelSource('other')}
    >
      <Text>Other</Text>
    </TouchableOpacity>
  </ScrollView>
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
  referralOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  referralOption: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  
  selectedReferralOption: {
    backgroundColor: '#198EB6',
    borderColor: '#4287f5',
    color: '#fff',
  },
  
});

export default Thyroid;
