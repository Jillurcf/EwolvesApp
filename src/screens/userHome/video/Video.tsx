import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface VideoProps {}

const Video = (props: VideoProps) => {
  return (
    <View style={styles.container}>
      <Text>Video</Text>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {}
});
