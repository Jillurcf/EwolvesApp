import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import UserHomeHomeCarousal from './userHomeHomeCarousal/UserHomeHomeCarousal';
import CateogryCarousal from './userHomeHomeCarousal/CategoryCarousal';
import EventCarousal from './userHomeHomeCarousal/EventCarousal';


interface UserHomeHomeProps {}
const {width, height} = Dimensions.get('screen')
const UserHomeHome: React.FC<UserHomeHomeProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
     <UserHomeHomeCarousal />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: width * 0.02, paddingHorizontal: width * 0.06,}}>
        <TouchableOpacity>
            <Text style={{color: "#000834"}}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: "#8670C6"}}>See All</Text>
        </TouchableOpacity>
      </View>
      <CateogryCarousal  />

      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.06, paddingVertical: height * 0.03,}}>
        <TouchableOpacity>
            <Text style={{color: "#000834"}}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: "#8670C6"}}>See All</Text>
        </TouchableOpacity>
      </View>
      <EventCarousal />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: width * 0.02, paddingHorizontal: width * 0.06,}}>
        <TouchableOpacity>
            <Text style={{color: "#000834"}}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: "#8670C6"}}>See All</Text>
        </TouchableOpacity>
      </View>
      <CateogryCarousal  />

      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.06, paddingVertical: height * 0.03,}}>
        <TouchableOpacity>
            <Text style={{color: "#000834"}}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: "#8670C6"}}>See All</Text>
        </TouchableOpacity>
      </View>
      <EventCarousal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHomeHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
