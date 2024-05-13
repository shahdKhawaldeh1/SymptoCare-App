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
    
    fetch("http://10.0.2.2:8000/msearch/answer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    })
    .then((response) => response.json())
  .then((data) => {
    if (data && data.response) {
      setOutputMessages([...outputMessages, { type: 'question', content: question }]);
      setOutputMessages([...outputMessages, { type: 'response', content: data.response.trim() }]);
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
          <View key={index} style={message.type === 'question' ? styles.questionContainer : styles.responseContainer}>
            <Text style={message.type === 'question' ? styles.questionText : styles.responseText}>{message.content}</Text>
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
  questionContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  responseContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  questionText: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  responseText: {
    backgroundColor: '#D0F5A9',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    textAlign: 'right',
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
  },
  sendButton: {
    backgroundColor: '#198EB6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
