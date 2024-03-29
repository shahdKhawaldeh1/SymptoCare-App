import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState("Results to be shown here");

  const handleButtonClick = () => {
    console.log("Button clicked");
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        "prompt": inputMessage, 
        "model": "text-davinci-003"
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data && data.choices && data.choices.length > 0 && data.choices[0].text) {
        console.log(data.choices[0].text);
        setOutputMessage(data.choices[0].text.trim());
      } else {
        console.error("Unexpected response format:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
  }

  const handleTextInput = (text) => {
    setInputMessage(text);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{outputMessage}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, marginLeft: 10, marginBottom: 20 }}>
          <TextInput placeholder='Enter your question' onChangeText={handleTextInput} />
        </View>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style={{ backgroundColor: '#198EB6', padding: 5, marginRight: 10, marginBottom: 20 }}>
            <Text>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
