import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import NewUserLogo from '../../../assets/Images/newUser/LogoNewUser.svg'
// import NewUserMainImg from '../../../assets/Images/newUser/NewUserMainImg.svg'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen')
interface newUserProps {}

const NewUser = (props: newUserProps) => {
const Navigation = useNavigation();
    const handleUserHome = () => {
        Navigation.navigate('userHome')
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{  color: "#0B002C", fontSize: width * 0.085, fontWeight: 'bold', textAlign: 'center', paddingVertical: height * 0.02}}>Welcome</Text>
      
      <View style={styles.imageContainer}>
      <Image 
          source={require('../../../assets/Images/newUser/newUserMainGroupImg.png')} 
          style={styles.image} 
        />
      </View>
      <View style={{ }}>
      <Text style={{width: width * 0.8, textAlign: "center"}}>This Platform will find the right talented Artists  for your Events</Text>
      </View>
      <View style={{justifyContent: "center", alignItems: "center", paddingVertical: height * 0.02}}>
      <TouchableOpacity onPress={handleUserHome} style={styles.gradientButton} >
          <LinearGradient
            colors={['#9C8EEF', '#6C57EC', '#5443BB']}
            style={styles.gradientBackground}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </SafeAreaView> 
  );
};

export default NewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EEFD",
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
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
  gradientButton: {
    // marginVertical: height * 0.020,
    borderRadius: width * 0.045,
    overflow: 'hidden',
     width: width * 0.7,
     
  },
  gradientBackground: {
    paddingVertical: height * 0.02,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.056,
    fontWeight: 'bold',
  },
});
