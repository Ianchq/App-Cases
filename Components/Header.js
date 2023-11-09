import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Cases</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        paddingTop: 60,
        height: 100,
        backgroundColor: 'blue'
    },
    text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
  
});