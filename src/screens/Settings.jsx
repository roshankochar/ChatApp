// src/screens/NotImplementedScreen.js

import {View, Text, Image, StyleSheet, Button} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Button title="Sign Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  image: {
    width: '80%',
    aspectRatio: 2 / 1,
  },
});

export default Settings;
