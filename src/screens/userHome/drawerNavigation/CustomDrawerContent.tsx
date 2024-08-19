import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const CustomDrawerContent: React.FC = (props) => {
const navigation = useNavigation()
  const handleBackHome = () => {
    navigation.navigate('userHome')
  }
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={handleBackHome}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/Images/drawerNavigation/ewolvesLogo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>
      </TouchableOpacity>
   
      <DrawerItemList {...props} />
      <View style={styles.logoout}>
        <Icon name="logout" size={25} color={"red"}/>
        <Text>Logout</Text>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
    logoContainer: {
      alignItems: 'center',
      marginVertical: 50, 
      paddingHorizontal: 20, 
      paddingVertical: height * 0.010,
     
      
    },
    logo: {
      width: width * 0.6, 
      height: 100, 
      resizeMode: 'contain', 
    },
    logoout: {
      flexDirection: 'row',
      gap: 35,
      paddingHorizontal: 20, 
      paddingVertical: height * 0.25,
    }
  });
export default CustomDrawerContent;
