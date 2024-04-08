

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity,Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Thyroid_logo from '../../assets/images/Thyroid_logo.jpg'

const Thyroid2= () => {

  const navigation = useNavigation();

  const  onNextPressed = (data) => {

    navigation.navigate('Thyroid3');
  };

  const [TSH	, setTSH	] = useState('');
  const [lithium, setlithium] = useState('');
  const [goitre	, setgoitre	] = useState(0);
  const [tumor	, settumor	] = useState(0);
  const [hypopituitary, sethypopituitary] = useState(0);
  const [psych	, setpsych	] = useState(0);
  const [TSHmeasured	, setTSHmeasured] = useState(0);
  // const [T3, setT3] = useState(0);
  const [TT4measured	, setTT4measured	] = useState(0);

  const [ T4Umeasured	 , setT4Umeasured] = useState(0);

const [ FTImeasured	 , setFTImeasured	] = useState(0);
const [ TBGmeasured    , setTBGmeasured ] = useState(0);



  const handleSubmit = () => {
    // Handle submit action here
    console.log('Form submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={Thyroid_logo} style={styles.logo} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>TSH:</Text>
          <TextInput
            style={styles.input}
            value={TSH}
            onChangeText={setTSH}
            keyboardType="numeric"
            placeholder="Enter TSH"
            placeholderTextColor="#999"
          />
        </View>
       
        {/* Additional features */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Lithium:</Text>
          <TouchableOpacity
            style={[styles.genderOption, lithium === 1 && styles.selectedGender]}
            onPress={() => setlithium(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, lithium=== 0 && styles.selectedGender]}
            onPress={() => setlithium(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        {/* Repeat similar structure for other features */}
        {/* Make sure to update the state variables and handlers accordingly */}


        <View style={styles.inputRow}>
          <Text style={styles.label}>Goitre:	</Text>
          <TouchableOpacity
            style={[styles.genderOption, goitre	 === 1 && styles.selectedGender]}
            onPress={() => setgoitre	(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,goitre	 === 0 && styles.selectedGender]}
            onPress={() => setgoitre	(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Tumor:</Text>
          <TouchableOpacity
            style={[styles.genderOption,tumor	 === 1 && styles.selectedGender]}
            onPress={() => settumor(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,tumor	 === 0 && styles.selectedGender]}
            onPress={() => settumor(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Hypopituitary:</Text>
          <TouchableOpacity
            style={[styles.genderOption, hypopituitary === 1 && styles.selectedGender]}
            onPress={() => sethypopituitary(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,hypopituitary === 0 && styles.selectedGender]}
            onPress={() => sethypopituitary(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Psych:	</Text>
          <TouchableOpacity
            style={[styles.genderOption, psych	=== 1 && styles.selectedGender]}
            onPress={() => setpsych	(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,psych	 === 0 && styles.selectedGender]}
            onPress={() => setpsych	(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>TSH Measured:</Text>
          <TouchableOpacity
            style={[styles.genderOption, TSHmeasured=== 1 && styles.selectedGender]}
            onPress={() => setTSHmeasured(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,TSHmeasured=== 0 && styles.selectedGender]}
            onPress={() => setTSHmeasured(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>T4U Measured</Text>
          <TouchableOpacity
            style={[styles.genderOption, T4Umeasured=== 1 && styles.selectedGender]}
            onPress={() => setT4Umeasured(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,T4Umeasured=== 0 && styles.selectedGender]}
            onPress={() => setT4Umeasured(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}> TT4 Measured:</Text>
          <TouchableOpacity
            style={[styles.genderOption, TT4measured=== 1 && styles.selectedGender]}
            onPress={() => setTT4measured(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, TT4measured=== 0 && styles.selectedGender]}
            onPress={() => setTT4measured(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}> FTI Measured:</Text>
          <TouchableOpacity
            style={[styles.genderOption, FTImeasured	=== 1 && styles.selectedGender]}
            onPress={() => setFTImeasured(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, FTImeasured	=== 0 && styles.selectedGender]}
            onPress={() => setFTImeasured(0)}
          >
            <Text>0</Text>

          </TouchableOpacity>
        </View>


        <View style={styles.inputRow}>
          <Text style={styles.label}>TBG Measured:</Text>
          <TouchableOpacity
            style={[styles.genderOption,         TBGmeasured 
                === 1 && styles.selectedGender]}
            onPress={() => setTBGmeasured(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,   TBGmeasured  === 0 && styles.selectedGender]}
            onPress={() => setTBGmeasured  (0)}
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

export default Thyroid2;
