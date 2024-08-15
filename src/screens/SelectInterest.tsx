// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { GridList, Spacings, TextField } from 'react-native-ui-lib';

// // Corrected data key
// const data = [
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
//   { title: "Makeup" },
//   { title: "Manicures" },
//   { title: "" },
//   { title: "Pedicures" },
//   { title: "Hairdressing" },
//   { title: "Designer" },
//   { title: "Comedian" },
// ];

// // Define a custom item component for GridList
// const GridItem = ({ item }: { item: { title: string } }) => (
//     <LinearGradient
//     colors={['#FDFDFD', '#EEE6E8', '#EBE2EC', '#F2FBFC']} // Define gradient colors here
//     style={styles.item}
//   >
//     <Text style={styles.itemText}>{item.title || 'Empty'}</Text>
//   </LinearGradient>
// );

// const SelectInterest: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Select Interest</Text>
//       <GridList
//         data={data}
//         renderItem={GridItem}
//         // maxItemWidth={100}
//         numColumns={3}
//         itemSpacing={Spacings.s3}
//         listPadding={Spacings.s5}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0EEFD"
    
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: Spacings.s5,
//   },
//   item: {
//     backgroundColor:'#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: Spacings.s2,
//     borderRadius: 8,
//   },
//   itemText: {
//     fontSize: 14,
//   },
// });

// export default SelectInterest;
