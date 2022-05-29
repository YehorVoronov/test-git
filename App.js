import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import Navigate from "./components/Navigate";


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Navigate/>nn
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
   /* flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
});
