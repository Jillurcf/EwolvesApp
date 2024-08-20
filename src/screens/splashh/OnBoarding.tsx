import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import OnBoardingImg from '../../assets/Images/Onbording.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation'; 

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
        {/* <OnBoardingImg style={styles.image} /> */}
        <Image 
          source={require('../../assets/Images/Onboarding.png')} 
          style={styles.image} 
        />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: height * 0.020,
    backgroundColor: "#F0EEFD"
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: height * 0.080,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: height * 0.020,
    width: width * 0.6, 
    height: height * 0.4,
  },
  image: {
    width: width * 0.7, 
    height: height * 0.4,
    aspectRatio: 2, 
    resizeMode: 'contain',
  },
  description: {
    width: width * 0.8,
    textAlign: 'center',
    marginBottom: height * 0.020,
  },
  buttonContainer: {
    // width: '100%',
    alignItems: 'center',
    marginTop: height * 0.020,
  },
  button: {
    padding: width *  0.035,
    borderRadius: 10,
    width: width * 0.50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width *  0.05,
    fontWeight: 'bold',
  },
});

export default OnBoarding;
