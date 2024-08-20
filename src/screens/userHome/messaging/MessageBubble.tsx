import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

interface MessageBubbleProps {
  isSender: boolean;
  message: string;
  time: string;
  deal?: {
    image: any;
  };
}

const { width, height } = Dimensions.get('screen');

const MessageBubble = ({ isSender, message, time, deal }: MessageBubbleProps) => {
  return (
    <View style={[styles.bubbleContainer, isSender ? styles.senderContainer : styles.receiverContainer]}>
      <View style={[styles.bubble, isSender ? styles.senderBubble : styles.receiverBubble]}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>

      {deal && deal.image && (
        <View style={styles.dealContainer}>
        <Image source={deal.image} style={styles.dealImage} resizeMode='cover' />
          <TouchableOpacity style={styles.dealButton}>
            <Text style={styles.dealButtonText}>Get Deal</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    marginVertical: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    paddingHorizontal: width * 0.05,
  },
  senderContainer: {
    alignSelf: 'flex-end',
  },
  receiverContainer: {
    alignSelf: 'flex-start',
  },
  bubble: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  senderBubble: {
    backgroundColor: '#614ED4',
  },
  receiverBubble: {
    backgroundColor: '#E9E6FC',
  },
  messageText: {
    color: '#000',
  },
  timeText: {
    alignSelf: 'flex-end',
    color: 'gray',
    fontSize: 10,
    marginTop: 5,
  },
  dealContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  dealImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Add a background color to ensure the image area is visible even before loading
  },
  dealButton: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    alignItems: 'center',
  },
  dealButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default MessageBubble;
