import React from 'react';
import { View, StyleSheet } from 'react-native';
import Splash from './splashh/Splash';
import OnBoarding from './splashh/OnBoarding';

const InitialScreen: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      {isLoading ? <Splash setIsLoading={setIsLoading} /> : <OnBoarding />}
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
