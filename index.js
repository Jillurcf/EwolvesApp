/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from "react-native-push-notification";

// Initialize push notification configuration
const configurePushNotifications = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },

    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);

      // Handle the notification and display it
      PushNotification.localNotification({
        channelId: notification.channelId || "default-channel-id",
        title: notification.title,
        message: notification.message,
      });

      // (Required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // Android only
    senderID: "YOUR_SENDER_ID", // Replace with your Firebase sender ID
    popInitialNotification: true,
    requestPermissions: true,
  });

  // Create default notification channel
  PushNotification.createChannel(
    {
      channelId: "default-channel-id", // (required)
      channelName: "Default Channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional)
      soundName: "default", // (optional)
      importance: 4, // (optional) default: 4. Max 5
      vibrate: true, // (optional) default: true
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

// Call the configuration function before registering the component
configurePushNotifications();

// Register the main app component
AppRegistry.registerComponent(appName, () => App);
