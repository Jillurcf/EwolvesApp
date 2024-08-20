import React, { useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import MessageBubble from './MessageBubble'; // assuming MessageBubble is in the same directory
import dealImg from '../../../assets/Images/messaging/dealImg.png';
import { SvgXml } from 'react-native-svg';

const { width, height } = Dimensions.get('screen');

interface Message {
  id: string;
  message: string;
  time: string;
  isSender: boolean;
  deal?: {
    image: any; // Updated type
  };
}

const MessagingScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', message: 'Hyyy!!!', time: '3:00 pm', isSender: true },
    {
      id: '2',
      message: 'when are we meeting its been so longgg since we meeted.',
      time: '3:01 pm',
      isSender: true,
    },
    {
      id: '3',
      message: '',
      time: '3:02 pm',
      isSender: true,
      deal: { image: dealImg },
    }, // Using imported image object
    { id: '4', message: 'Hyyyy.... georg.', time: '3:02 pm', isSender: false },
  ]);

  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          message: newMessage,
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          isSender: true,
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[...messages].reverse()}
        renderItem={({ item }) => (
          <MessageBubble
            isSender={item.isSender}
            message={item.message}
            time={item.time}
            deal={item.deal}
          />
        )}
        keyExtractor={(item) => item.id}
        inverted
      />
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            style={styles.textInput}
            placeholder="Write your Comment"
            multiline
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <SvgXml
              xml={`<svg width=${width * 0.05} height=${height * 0.025} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.8577 0.956576L14.6226 20.0428C14.4777 20.5712 14.1661 20.5952 13.9342 20.1122L9.56012 10.9996L0.846104 7.36883C0.356811 7.16496 0.362868 6.85986 0.878792 6.68072L19.2016 0.318646C19.7089 0.142486 19.9998 0.438296 19.8577 0.956576ZM17.274 3.09611L5.53984 7.17049L10.951 9.42514L13.87 15.5064L17.274 3.09611Z" fill="#6C57EC"/>
  </svg>`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: width * 0.02,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  textInput: {
    flex: 1,
    padding: width * 0.03,
    backgroundColor: '#f1f1f1',
    borderRadius: width * 0.02,
    paddingRight: width * 0.12, // Add padding to make room for the send button
  },
  sendButton: {
    position: 'absolute',
    right: width * 0.02,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#D1CBF9',
    borderRadius: width * 0.015,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MessagingScreen;
