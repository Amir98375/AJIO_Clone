import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
import LandingPage from './src/components/LandingPage';

export default function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaView >
 
    <LandingPage/>

    </SafeAreaView>
    //  {/* <LandingPage/> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
