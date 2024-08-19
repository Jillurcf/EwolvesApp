import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ArchivesProps {}

const Archives = (props: ArchivesProps) => {
  return (
    <View style={styles.container}>
      <Text>Archives</Text>
    </View>
  );
};

export default Archives;

const styles = StyleSheet.create({
  container: {}
});
