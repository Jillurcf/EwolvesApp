import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

const notificationsData = [
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
    time: '2 minutes ago',
    backgroundColor: '#FBF9EB',
  },
];

interface NotificationsProps {
  navigation: any;
}

const Notifications = (props: NotificationsProps) => {

  const handleNotificationPress = (notification: typeof notificationsData[0]) => {
    props.navigation.navigate('messaging', {
      userId: notification.id,
      userName: notification.name,
    });
  };

  return (
    <View style={styles.container}>
      {notificationsData.map((notification) => (
        <TouchableOpacity
          key={notification.id}
          onPress={() => handleNotificationPress(notification)}
        >
          <View
            style={[
              styles.notificationItem,
              { backgroundColor: notification.backgroundColor },
            ]}
          >
            <Image style={styles.image} source={notification.img} />
            <View style={styles.textContainer}>
              <View style={styles.textRow}>
                <Text style={styles.name}>{notification.name}</Text>
                <Text style={styles.role}>{notification.role}</Text>
              </View>
              <Text style={styles.impressions}>{notification.impressions}</Text>
            </View>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
