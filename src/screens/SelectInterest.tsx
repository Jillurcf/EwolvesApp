import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GridList, Spacings, TextField } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen')
// Corrected data key
const data = [
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
  { title: "Makeup" },
  { title: "Manicures" },
  { title: "" },
  { title: "Pedicures" },
  { title: "Hairdressing" },
  { title: "Designer" },
  { title: "Comedian" },
];

// Define a custom item component for GridList


const SelectInterest: React.FC = () => {
const navigation = useNavigation()

  const handleNewUser = () => {  
    navigation.navigate('newUser')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Interest</Text>
      <GridList
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={()=>{
            // navigation?.navigate(item.ScreenName)
            console.log("clicked");
          }}>
          <LinearGradient
            colors={['#FDFDFD', '#EEE6E8', '#EBE2EC', '#F2FBFC']} // Define gradient colors here
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.title || 'Empty'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        )}
        // maxItemWidth={100}
        numColumns={3}
        itemSpacing={Spacings.s3}
        listPadding={Spacings.s5}
      />


<View style={{ paddingVertical: height * 0.05, paddingHorizontal: width * 0.1}}>
      <TouchableOpacity onPress={handleNewUser} style={styles.gradientButton} >
          <LinearGradient
            colors={['#9C8EEF', '#6C57EC', '#5443BB']}
            style={styles.gradientBackground}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EEFD"
    
  },
  header: {
    fontSize: width * 0.060,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    textAlign: 'center'
  },
  item: {
    backgroundColor:'#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: height * 0.02,
    borderRadius: width * 0.08,
  },
  itemText: {
    fontSize: width * 0.03,
  },
  gradientButton: {
    marginVertical: height * 0.020,
    borderRadius: width * 0.045,
    overflow: 'hidden',
  },
  gradientBackground: {
    paddingVertical: height * 0.015,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});

export default SelectInterest;

