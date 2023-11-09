import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setText] = useState('');
  
    const onChangeText = (newText) => {
      setText(newText);
    };
  
    const handleButtonPress = () => {
      addHandler(text);
      setText('');
    };
  
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Input new Case...'
          value={text} // Устанавливаем значение из состояния
        />
        <Button color='blue' onPress={handleButtonPress} title='Add Case' />
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
  