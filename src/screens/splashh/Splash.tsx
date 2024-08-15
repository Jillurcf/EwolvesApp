import React, { Dispatch, SetStateAction } from 'react';
import { SafeAreaView, StatusBar, View, Dimensions, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import LogoImg from '../../assets/Images/ewolvsLogo.svg'; 
const { width, height } = Dimensions.get("screen");

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash: React.FC<SplashProps> = ({ setIsLoading }) => {
  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.logoContainer}>
        <LogoImg width={200} height={200} />
      </View>
      <View>
        <LottieView 
          style={styles.lottieView}
          source={require('../../assets/lottieFiles/splash')}
          autoPlay
          loop={false}
          resizeMode="cover"
          onAnimationFinish={() => setIsLoading(false)}
        />
        <StatusBar hidden />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C57EC",
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  lottieView: {
    width: 150,
    height: 150,
  },
});

export default Splash;
