import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import NewUserLogo from '../../../assets/Images/newUser/LogoNewUser.svg'
import NewUserMainImg from '../../../assets/Images/newUser/NewUserMainImg.svg'
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
      <Text style={{  color: "#0B002C", fontSize: 36, fontWeight: '500', textAlign: 'center', paddingVertical: height * 0.05}}>Welcome</Text>
      <View style={{alignItems: 'center', }}>
        <NewUserLogo />
      </View>
      <View style={{marginTop: -90}}>
      <NewUserMainImg />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center"}}>
      <Text style={{width: width * 0.8,textAlign: "center"}}>This Platform will find the right talented Artists  for your Events</Text>
      </View>
      <View style={{justifyContent: "center", alignItems: "center", paddingVertical: height * 0.05}}>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  
    
  },
  gradientButton: {
    marginVertical: 20,
    borderRadius: 25,
    overflow: 'hidden',
     width: width * 0.8,
     
  },
  gradientBackground: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
