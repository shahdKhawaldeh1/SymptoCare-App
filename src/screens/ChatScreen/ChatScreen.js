import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ChatScreen = () => {
  const [outputMessages, setOutputMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const scrollViewRef = useRef();

  const handleButtonClick = () => {
    if (!question) {
      return; // Skip if question is empty
    }
    
    fetch("http://176.119.254.220:8000/msearch/answer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.response) {
        // Add both question and response to the output messages
        setOutputMessages([...outputMessages, { type: 'message', question: question, response: data.response.trim() }]);
        setQuestion('');
      } else {
        console.error("Unexpected response format:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  const handleTextInput = (text) => {
    setQuestion(text); // Update the question state with the entered text
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {outputMessages.map((message, index) => (
          <View key={index} style={styles.messageContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{message.question}</Text>
            </View>
            <View style={styles.responseContainer}>
              <Text style={styles.responseText}>{message.response}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your question'
          onChangeText={handleTextInput}
          value={question}
        />
        <TouchableOpacity onPress={handleButtonClick}>
          <View style={styles.sendButton}>
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
    justifyContent: 'flex-end',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  messageContainer: {
    flexDirection: 'column', // Change to column
    marginBottom: 10,
    // maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  questionContainer: {
    // marginRight: 10,
    alignSelf: 'flex-end', // Align question to the end
  },
  responseContainer: {
    alignSelf: 'flex-start', // Align response to the start
  },
  questionText: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 5, // Added margin bottom
  },
  responseText: {
    backgroundColor: '#ADD8E6', // Change background color to #198EB6
    borderRadius: 10,
    padding: 10,
    margin:10,
    textAlign: 'right',
    marginBottom: 5, // Added margin bottom
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: '#198EB6',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default ChatScreen;
