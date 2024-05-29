import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';

const DischargeSummaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patientData, setPatientData] = useState([]);

  const handleSearch = () => {
    const apiUrl = `http://10.0.2.2:8000/users/phone/${searchQuery}`;
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        setPatientData(responseData);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search patient"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {patientData.length > 0 && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.resultBox}>
            <Text style={styles.title}>Patient Informations</Text>
            {patientData.map((patient, index) => (
              <View key={index} style={styles.patientInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>{patient.name}</Text>

                <Text style={styles.label}>Age:</Text>
                <Text style={styles.text}>{patient.age}</Text>

                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.text}>{patient.gender}</Text>

                {/* Additional patient information fields */}
                <Text style={styles.label}>Phone Number:</Text>
                <Text style={styles.text}>{patient.phone_number}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{patient.email}</Text>

                <Text style={styles.label}>Kidneys:</Text>
                <Text style={styles.text}>{patient.kidneys.join(', ')}</Text>

                <Text style={styles.label}>Thyroids:</Text>
                <Text style={styles.text}>{patient.thyroids.join(', ')}</Text>

                <Text style={styles.label}>Hearts:</Text>
                <Text style={styles.text}>{patient.hearts.join(', ')}</Text>

                {/* Add more patient information fields as needed */}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 75, 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#198EB6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  resultBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  patientInfo: {
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
});

export default DischargeSummaryPage;
