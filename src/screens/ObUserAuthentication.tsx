import React from 'react';
import { Text, StyleSheet, View, Dimensions, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import UaImg from '../assets/Images/UaImg.svg'; // Ensure this import works correctly
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

const { width, height } = Dimensions.get('screen');


type OnBoardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'InitialScreen'>;

const ObUserAuthentication: React.FC = ({navigation}) => {
    // const navigation = useNavigation<OnBoardingScreenNavigationProp>();

    const handleUser = () => {
      navigation.navigate('login');
      console.log("Button clicked");
    };
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Access Specialized Care</Text>
      <View style={styles.imageContainer}>
        <UaImg style={styles.image} />
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis ut consequuntur! Repellat omnis est, consectetur eligendi, consequatur facere dolorem dolorum fugiat ut ab, eveniet vel vero quod velit? Repellat.
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <TouchableOpacity onPress={handleUser} style={styles.buttonContainer}>
            <LinearGradient
              colors={['#8EE88E', '#80D180', '#6BAE6B']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>User</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
navigation?.navigate("selectInterest")
          }}>
            <LinearGradient
              colors={['#9C8EEF', '#6C57EC', '#5443BB']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Artist</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEFD",
    justifyContent: 'center',
    alignItems: 'center',
    padding: height * 0.020,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    // width: width * 0.30,
    // height: height * 200,
  },
  description: {
    width: width * 0.8,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  buttonContainer: {
    width: width * 0.4,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  button: {
    padding: width * 0.03,
    borderRadius: 50,
    width: width * 0.35,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default ObUserAuthentication;
