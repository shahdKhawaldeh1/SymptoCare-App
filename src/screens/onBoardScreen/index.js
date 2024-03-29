import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomerButton from '../../components/CustomerButton';
import logo from '../../../assets/images/logo.png';
import i18n, { languageResources } from '../../../Services/i18next';
import { useTranslation } from 'react-i18next';

const OnBoardScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false); // Correct usage of useState
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Track selected language

  const onHelloPresses = () => {
    navigation.navigate('SignIn');
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change application language
    setSelectedLanguage(language); // Update selected language state
    setVisible(false); // Close the language selection modal
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.Languageslist}>
        <FlatList
  data={Object.keys(languageResources)}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[styles.languageButton, selectedLanguage === item && styles.selectedLanguage]}
      onPress={() => changeLanguage(item)}>
      <Text style={styles.lngName}>
        {t('languageName.' + item)} - {languageResources[item].translation.nativeName}
      </Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item} // Use language code as key
/>

        </View>
      </Modal>

      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('quote')}</Text>

      <CustomerButton  text={t('start')} onPress={onHelloPresses} style={styles.button} />
      <CustomerButton
  text={t('change-language')}
  style={[styles.button, styles.changeLanguage]}
  

  onPress={() => setVisible(!visible)}
>
  {/* Toggling the visibility of the modal */}
</CustomerButton>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFEEFE',
    padding: 20,
  },
 
  
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
  },
  button: {
    marginTop: 50,
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 25,
    color: 'white'
  },

  languageButton: {
   marginTop:20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',  
   },
  selectedLanguage: {
    backgroundColor: '#EEE', // Background color when language is selected
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'

  },
  Languageslist: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#BFEEFE',
    marginBottom:20
  },
  lngName: {
    fontSize: 16,
    color: 'black',
  },

});

export default OnBoardScreen;
