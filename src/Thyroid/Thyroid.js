import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import KidenyLogo from '../../assets/images/KidenyLogo.jpg'
import Thyroid_logo from '../../assets/images/Thyroid_logo.jpg'
const Thyroid = () => {

  const navigation = useNavigation();

  const  onNextPressed = (data) => {
    
    navigation.navigate('Thyroid2');
  };

  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [onThyroxine, setOnThyroxine] = useState(0);
  const [queryOnThyroxine, setQueryOnThyroxine] = useState(0);
  const [onAntithyroidMedication, setOnAntithyroidMedication] = useState(0);
  const [sick, setSick] = useState(0);
  const [pregnant, setPregnant] = useState(0);
  const [thyroidSurgery, setThyroidSurgery] = useState(0);
  const [I131Treatmenty, setI131Treatmenty] = useState(0);

  const [  queryHypothyroid	 , setqueryHypothyroid] = useState(0);

	

  const [   queryHyperthyroid	 , setqueryHyperthyroid] = useState(0);

  const handleGenderSelection = (gender) => {
    setSex(gender);
  };

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
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholder="Enter Age"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            <Text
              style={[styles.genderOption, sex === 'male' && styles.selectedGender]}
              onPress={() => handleGenderSelection('male')}
            >
              Male
            </Text>
            <Text
              style={[styles.genderOption, sex === 'female' && styles.selectedGender]}
              onPress={() => handleGenderSelection('female')}
            >
              Female
            </Text>
          </View>
        </View>
        {/* Additional features */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>On Thyroxine</Text>
          <TouchableOpacity
            style={[styles.genderOption, onThyroxine === 1 && styles.selectedGender]}
            onPress={() => setOnThyroxine(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, onThyroxine === 0 && styles.selectedGender]}
            onPress={() => setOnThyroxine(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.inputRow}>
          <Text style={styles.label}>Query on thyroxine</Text>
          <TouchableOpacity
            style={[styles.genderOption, queryOnThyroxine === 1 && styles.selectedGender]}
            onPress={() => setQueryOnThyroxine(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,queryOnThyroxine === 0 && styles.selectedGender]}
            onPress={() => setQueryOnThyroxine(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>On Antithyroid Medication</Text>
          <TouchableOpacity
            style={[styles.genderOption, onAntithyroidMedication === 1 && styles.selectedGender]}
            onPress={() => setOnAntithyroidMedication(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,onAntithyroidMedication === 0 && styles.selectedGender]}
            onPress={() => setOnAntithyroidMedication(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Sick</Text>
          <TouchableOpacity
            style={[styles.genderOption, sick === 1 && styles.selectedGender]}
            onPress={() => setSick(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, onThyroxine === 0 && styles.selectedGender]}
            onPress={() => setSick(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.inputRow}>
          <Text style={styles.label}>Pregnant</Text>
          <TouchableOpacity
            style={[styles.genderOption, pregnant=== 1 && styles.selectedGender]}
            onPress={() => setPregnant(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,pregnant === 0 && styles.selectedGender]}
            onPress={() => setPregnant(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Thyroid Surgery</Text>
          <TouchableOpacity
            style={[styles.genderOption, thyroidSurgery=== 1 && styles.selectedGender]}
            onPress={() => setThyroidSurgery(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,thyroidSurgery=== 0 && styles.selectedGender]}
            onPress={() => setThyroidSurgery(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>I131 Treatmenty  </Text>
          <TouchableOpacity
            style={[styles.genderOption, I131Treatmenty=== 1 && styles.selectedGender]}
            onPress={() => setI131Treatmenty(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption,I131Treatmenty=== 0 && styles.selectedGender]}
            onPress={() => setI131Treatmenty(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}> Query Hypothyroid</Text>
          <TouchableOpacity
            style={[styles.genderOption,  queryHypothyroid=== 1 && styles.selectedGender]}
            onPress={() => setqueryHypothyroid(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, queryHypothyroid=== 0 && styles.selectedGender]}
            onPress={() => setqueryHypothyroid(0)}
          >
            <Text>0</Text>
          </TouchableOpacity>
        </View>

        	

        <View style={styles.inputRow}>
          <Text style={styles.label}>Query Hyperthyroid</Text>
          <TouchableOpacity
            style={[styles.genderOption, queryHyperthyroid=== 1 && styles.selectedGender]}
            onPress={() => setqueryHyperthyroid(1)}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderOption, queryHyperthyroid=== 0 && styles.selectedGender]}
            onPress={() => setqueryHyperthyroid(0)}
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
