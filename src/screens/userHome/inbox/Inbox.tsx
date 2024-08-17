import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface InboxProps {}

const Inbox = (props: InboxProps) => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {}
});
