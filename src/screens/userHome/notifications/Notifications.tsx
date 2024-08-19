import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const data = [
  {
    id: 1,
    img: require('../../../assets/Images/notifiactions/notificationImg1.jpg'),
    name: 'Maria',
    role: '*Artist',
    impressions: 'Reacted on your gig',
    time: 'Yesterday',
    backgroundColor: '#F0EEFD',
  },
  {
    id: 2,
    img: require('../../../assets/Images/notifiactions/notificationImg1.jpg'),
    name: 'Jack',
    role: '*Artist',
    impressions: 'Reacted on your gig',
    time: '10 minutes ago',
    backgroundColor: '#FBF9EB',
  },
  {
    id: 3,
    img: require('../../../assets/Images/notifiactions/notificationImg1.jpg'),
    name: 'Meghna Islam',
    role: '*Artist',
    impressions: 'Reacted on your gig',
    time: 'Yesterday',
    backgroundColor: '#F0EEFD',
  },
  {
    id: 4,
    img: require('../../../assets/Images/notifiactions/notificationImg1.jpg'),
    name: 'Maria',
    role: '*Artist',
    impressions: 'Reacted on your gig',
    time: '2 minutes',
    backgroundColor: '#FBF9EB',
  },
];

interface NotificationsProps {}

const Notifications = (props: NotificationsProps) => {
  return (
    <View style={styles.container}>
      {data?.map((d) => (
       <View style={[
        styles.notificationItemContainer,
        { backgroundColor: d.backgroundColor },
      ]}>
         <View
          key={d.id}
          style={[
            styles.notificationItem,
            { backgroundColor: d.backgroundColor },
          ]}
        >
          <Image style={styles.image} source={d.img} />
          <View style={styles.textContainer}>
            <View style={styles.textRow}>
              <Text style={styles.name}>{d.name}</Text>
              <Text style={styles.role}>{d.role}</Text>
            </View>
            <Text style={styles.impressions}>{d.impressions}</Text>
          </View>
          <Text style={styles.time}>{d.time}</Text>
        </View>
       </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    gap: 10,
  },
  notificationItemContainer:{

  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: width * 0.025,
    paddingVertical: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  role: {
    color: 'gray',
  },
  impressions: {
    color: 'black',
  },
  time: {
    marginLeft: 10,
    color: 'gray',
    textAlign: 'right',
  },
});

export default Notifications;
