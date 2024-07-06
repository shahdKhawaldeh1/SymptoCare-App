import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.png';

const DischargeSummaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [showSymptoms, setShowSymptoms] = useState(false);

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

  const handleShowSymptoms = (disease, patient) => {
    let apiUrl;
    switch (disease) {
      case 'heart':
        apiUrl = `http://10.0.2.2:8000/predict/heart/users/${patient.id}`;
        break;
      case 'kidney':
        apiUrl = `http://10.0.2.2:8000/predict/kidney/users/${patient.id}`;
        break;
      case 'thyroid':
        apiUrl = `http://10.0.2.2:8000/predict/thyroid/users/${patient.id}`;
        break;
      default:
        return;
    }
    
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
      .then(symptomsData => {
        // Assuming symptomsData is an array of symptoms
        console.log(symptomsData);
        // Do something with the symptomsData, like displaying them in a modal
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
                {patient.name && (
                  <Text style={styles.label}>
                    Name: <Text style={styles.text}>{patient.name}</Text>
                  </Text>
                )}
                {patient.age && (
                  <Text style={styles.label}>
                    Age: <Text style={styles.text}>{patient.age}</Text>
                  </Text>
                )}
                {patient.gender && (
                  <Text style={styles.label}>
                    Gender: <Text style={styles.text}>{patient.gender}</Text>
                  </Text>
                )}
                {patient.phone_number && (
                  <Text style={styles.label}>
                    Phone Number: <Text style={styles.text}>{patient.phone_number}</Text>
                  </Text>
                )}
                {patient.email && (
                  <Text style={styles.label}>
                    Email: <Text style={styles.text}>{patient.email}</Text>
                  </Text>
                )}
                {patient.kidneys && patient.kidneys.length > 0 && (
                  <View>
                    <Text style={styles.label}>
                      Kidneys: 
                      <Text style={styles.text}>
                        {patient.kidneys.includes(1) ? <Text style={styles.diseaseText}>Have kidney disease</Text> : patient.kidneys.join(', ')}
                      </Text>
                    </Text>
                    {patient.kidneys.includes(1) && (
                      <View>
                        <TouchableOpacity style={styles.symptomsButton} onPress={handleShowSymptoms}>
                          <Text style={styles.symptomsButtonText}>Show Symptoms</Text>
                        </TouchableOpacity>
                        {showSymptoms && (
                          <Text style={styles.symptoms}>Symptoms of kidney disease...</Text>
                        )}
                      </View>
                    )}
                  </View>
                )}
                {patient.thyroids && patient.thyroids.length > 0 && (
                  <View>
                    <Text style={styles.label}>
                      Thyroids: 
                      <Text style={styles.text}>
                        {patient.thyroids.includes(1) ? <Text style={styles.diseaseText}>Have thyroid disease</Text> : patient.thyroids.join(', ')}
                      </Text>
                    </Text>
                    {patient.thyroids.includes(1) && (
                      <View>
                        <TouchableOpacity style={styles.symptomsButton} onPress={handleShowSymptoms}>
                          <Text style={styles.symptomsButtonText}>Show Symptoms</Text>
                        </TouchableOpacity>
                        {showSymptoms && (
                          <Text style={styles.symptoms}>Symptoms of thyroid disease...</Text>
                        )}
                      </View>
                    )}
                  </View>
                )}
                {patient.hearts && patient.hearts.length > 0 && (
                  <View>
                    <Text style={styles.label}>
                      Hearts: 
                      <Text style={styles.text}>
                        {patient.hearts.includes(1) ? <Text style={styles.diseaseText}> Have heart disease</Text> : patient.hearts.join(', ')}
                      </Text>
                    </Text>
                    


                    {patient.hearts.includes(1) && (
  <View>
    <TouchableOpacity style={styles.symptomsButton} onPress={() => handleShowSymptoms('heart', patient)}>
      <Text style={styles.symptomsButtonText}>Show Symptoms</Text>
    </TouchableOpacity>
    {showSymptoms && (
      <Text style={styles.symptoms}>Symptoms of heart disease...</Text>
    )}
  </View>
)}


                  </View>
                )}
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
    color: 'black'
  },
  patientInfo: {
    marginTop: 10,

  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize:17

    
  },
  text: {
    marginLeft: 5,
    fontSize:17
  },
  diseaseText: {
    marginLeft: 5,
  },
  symptomsButton: {
    backgroundColor: '#198EB6',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  symptomsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  symptoms: {
    color: 'red',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default DischargeSummaryPage;

