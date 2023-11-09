import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import Form from './Components/Form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Buy groceries', key: '1'},
    {text: 'Clear Bed', key: '2'},
    {text: 'Send a message to Damir', key: '3'},
    {text: 'Wash the dish', key: '4'}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    });
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={ ({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        ) } />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
