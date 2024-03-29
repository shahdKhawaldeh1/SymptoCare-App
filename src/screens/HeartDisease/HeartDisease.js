import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView,Image ,TouchableOpacity} from 'react-native';
import heart_logo from  '../../../assets/images/heart_logo.png'
const HeartDisease = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [chestPain, setChestPain] = useState('');
  const [restingBP, setRestingBP] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [restingECG, setRestingECG] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [maxHR, setMaxHR] = useState('');
  const [stSlope, setStSlope] = useState('');
  const [fasting, setFasting] = useState(0);


  const handleGenderSelection = (gender) => {
    setSex(gender);
  };

  const handleChestPainSelection = (pain) => {
    setChestPain(pain);
  };
  

  const handleRestingECGSelection = (ecg) => {
    setRestingECG(ecg);
  };

  const handleStSlopeSelection = (slope) => {
    setStSlope(slope);
  };
  const handleSubmit = () => {
    // Handle submit action here
    console.log('Form submitted!');
  };


  return (


    <ScrollView contentContainerStyle={styles.scrollViewContent}>
         

      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={heart_logo} style={styles.logo} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Age:</Text>
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
          <Text style={styles.label}>Gender:</Text>
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
        <View style={styles.inputRow}>
          <Text style={styles.label}>Chest Pain:</Text>
          <View style={styles.chestPainContainer}>
            <Text
              style={[styles.chestPainOption, chestPain === 'ASY' && styles.selectedChestPain]}
              onPress={() => handleChestPainSelection('ASY')}
            >
              ASY
            </Text>
            <Text
              style={[styles.chestPainOption, chestPain === 'ATA' && styles.selectedChestPain]}
              onPress={() => handleChestPainSelection('ATA')}
            >
              ATA
            </Text>
            <Text
              style={[styles.chestPainOption, chestPain === 'NAP' && styles.selectedChestPain]}
              onPress={() => handleChestPainSelection('NAP')}
            >
              NAP
            </Text>

<Text
  style={[styles.chestPainOption, chestPain === 'TA' && styles.selectedChestPain]}
  onPress={() => handleChestPainSelection('TA')}
>
  TA
</Text>
          </View>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Resting BP:</Text>
          <TextInput
            style={styles.input}
            value={restingBP}
            onChangeText={setRestingBP}
            keyboardType="numeric"
            placeholder="Enter Resting BP"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Cholesterol:</Text>
          <TextInput
            style={styles.input}
            value={cholesterol}
            onChangeText={setCholesterol}
            keyboardType="numeric"
            placeholder="Enter Cholesterol"
            placeholderTextColor="#999"
          />
        </View>
       
        <View style={styles.inputRow}>
          <Text style={styles.label}>Resting ECG:</Text>
          <View style={styles.chestPainContainer}>
            <Text
              style={[styles.chestPainOption, restingECG === 'LVH' && styles.selectedChestPain]}
              onPress={() => handleRestingECGSelection('LVH')}
            >
              LVH
            </Text>
            <Text
              style={[styles.chestPainOption, restingECG === 'NORMAL' && styles.selectedChestPain]}
              onPress={() => handleRestingECGSelection('NORMAL')}
            >
              NORMAL
            </Text>
            <Text
              style={[styles.chestPainOption, restingECG === 'ST' && styles.selectedChestPain]}
              onPress={() => handleRestingECGSelection('ST')}
            >
              ST
            </Text>
          </View>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>MaxHR:</Text>
          <TextInput
            style={styles.input}
            value={maxHR}
            onChangeText={setMaxHR}
            keyboardType="numeric"
            placeholder="Enter MaxHR"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Oldpeak:</Text>
          <TextInput
            style={styles.input}
            value={oldpeak}
            onChangeText={setOldpeak}
            keyboardType="numeric"
            placeholder="Enter Oldpeak"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>ST Slope:</Text>
          <View style={styles.chestPainContainer}>
            <Text
              style={[styles.chestPainOption, stSlope === 'DOWN' && styles.selectedChestPain]}
              onPress={() => handleStSlopeSelection('DOWN')}
            >
              DOWN
            </Text>
            <Text
              style={[styles.chestPainOption, stSlope === 'FLAT' && styles.selectedChestPain]}
              onPress={() => handleStSlopeSelection('FLAT')}
            >
              FLAT
            </Text>
            <Text
              style={[styles.chestPainOption, stSlope === 'UP' && styles.selectedChestPain]}
              onPress={() => handleStSlopeSelection('UP')}
            >
              UP
            </Text>
          </View>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Fasting:</Text>
          <View style={styles.genderContainer}>
            <Text
              style={[styles.genderOption, fasting === 0 && styles.selectedGender]}
              onPress={() => setFasting(0)}
            >
              0
            </Text>
            <Text
              style={[styles.genderOption, fasting === 1 && styles.selectedGender]}
              onPress={() => setFasting(1)}
            >
              1
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Finish</Text>
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
    alignItems: 'center', // Center the logo horizontally
    marginTop: 20, // Add margin-top of 15 units
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
    marginTop:10,
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
      width: 100, // Adjust as needed
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
    chestPainContainer: {
      flexDirection: 'row',
    },
    chestPainOption: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 10,
    },
    selectedChestPain: {
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
      marginBottom:20
    },
    submitText: {
      color: '#fff',
      fontSize: 18,
    },
  });
  
export default HeartDisease;
