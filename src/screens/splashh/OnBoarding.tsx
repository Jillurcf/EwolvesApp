import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OnBoardingImg from '../../assets/Images/Onbording.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation'; // Import the type

const { width, height } = Dimensions.get('screen');

type OnBoardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'InitialScreen'>;

const OnBoarding: React.FC = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationProp>();

  const handleUser = () => {
    navigation.navigate('ua');
    console.log("Button clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Access Specialized Care</Text>
      <View style={styles.imageContainer}>
        <OnBoardingImg style={styles.image} />
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis ut consequuntur! Repellat omnis est, consectetur eligendi, consequatur facere dolorem dolorum fugiat ut ab, eveniet vel vero quod velit? Repellat.
      </Text>
      <TouchableOpacity onPress={handleUser} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#9C8EEF', '#6C57EC', '#5443BB']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#F0EEFD"
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 80,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
  description: {
    width: width * 0.8,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnBoarding;
