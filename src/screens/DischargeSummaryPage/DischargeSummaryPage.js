import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import logo from '../../../assets/images/logo.png';

const CustomCheckbox = ({ label, isChecked, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checked]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const PatientInformation = ({ patient }) => {
  return (
    <View style={styles.patientInfo}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{patient.name}</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.text}>{patient.age}</Text>

      <Text style={styles.label}>Gender:</Text>
      <Text style={styles.text}>{patient.gender}</Text>

      {/* Add more patient information fields as needed */}
    </View>
  );
};

const DotsLoader = () => {
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0,
          duration: 750,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          pulse();
        }
      });
    };

    pulse();

    return () => pulseAnimation.setValue(0);
  }, [pulseAnimation]);

  const pulseStyle = {
    transform: [
      {
        scale: pulseAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1.2],
        }),
      },
    ],
    backgroundColor: pulseAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#b3d4fc', '#6793fb', '#b3d4fc'],
    }),
    shadowColor: 'rgba(178, 212, 252, 0.7)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: pulseAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
    shadowRadius: pulseAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 10, 0],
    }),
  };

  return (
    <View style={styles.loaderContainer}>
      <View style={styles.dotsContainer}>
        <Animated.View style={[styles.dot, pulseStyle]} />
        <Animated.View style={[styles.dot, pulseStyle]} />
        <Animated.View style={[styles.dot, pulseStyle]} />
        <Animated.View style={[styles.dot, pulseStyle]} />
        <Animated.View style={[styles.dot, pulseStyle]} />
      </View>
    </View>
  );
};

const DischargeSummaryPage = () => {
  const [checklist, setChecklist] = useState([
    { id: '01', label: 'Patient information', isChecked: false },
    { id: '02', label: 'Patient diagnosis', isChecked: false },
    { id: '03', label: 'Providing treatment', isChecked: false },
  ]);

  const handleCheckboxPress = (id) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // Sample patient data
  const patient = {
    name: 'Shahd khawaldeh',
    age: 22,
    gender: 'female',
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <DotsLoader />
        <View style={styles.card}>
          <Text style={styles.heading}>Patient Management Checklist!</Text>
          <View style={styles.checklistContainer}>
            {checklist.map((item) => (
              <CustomCheckbox
                key={item.id}
                label={item.label}
                isChecked={item.isChecked}
                onPress={() => handleCheckboxPress(item.id)}
              />
            ))}
          </View>
        </View>

        {/* New Card */}
        <View style={styles.card}>
          <Text style={styles.heading}>Patient Information</Text>
          <PatientInformation patient={patient} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
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
  loaderContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#198EB6',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  checklistContainer: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#198EB6',
    marginRight: 20,
    backgroundColor: '#fff',
  },
  checked: {
    backgroundColor: '#198EB6',
  },
  label: {
    color: '#414856',
    fontSize: 16,
  },
  patientInfo: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DischargeSummaryPage;