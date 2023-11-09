import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form({ addHandler }) {

    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue (text);
    };

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Input new Case...' />
        <Button color='blue' onPress={() => addHandler(text)} title='Add Case' />
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: '20%',
        width: '60%'
    }
    
});
  