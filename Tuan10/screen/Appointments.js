import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Appointments = () => {
  return (
    <View style={styles.container}>
      <Text>Profile listing</Text>
    </View>
  );
}

export default Appointments;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
