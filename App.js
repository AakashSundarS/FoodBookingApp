import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import logo from "./assets/foodimgs/chickennoodles.jpg"

const App = () => {
  const [count, setCount] = useState(0);
  const onPress1 = () => setCount(prevCount => prevCount + 1);
  const onPress2 = () => setCount(prevCount => prevCount - 1);
  const onPress3 = () => alert("Please wait while your order is being processed...");
  
  if(count === 0){
  return (
    <View style={styles.container}>
      
        <Text style={{alignItems: "center", color:'yellow', fontSize:40, padding:30}}>Chicken Noodles</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress1}
      >
        <Text style={{color:'green'}}>+ 1</Text>
      </TouchableOpacity>

      <View style={styles.countContainer}>
        <Text>Total Items: {count}</Text>
      </View>

      <View style={styles.countContainer}>
        <Text>Total: {count*40}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkout}
        onPress={onPress3}
      >
        <Text>Confirm Order!</Text>
      </TouchableOpacity>
      
    </View>
  );}
  else if (count === 10){
      return (
    <View style={styles.container}>

        <Text style={{alignItems: "center", color:'yellow', fontSize:40, padding:30}}>Chicken Noodles</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress2}
      >
        <Text style={{color:'red'}}>- 1</Text>
      </TouchableOpacity>

      <View style={styles.countContainer}>
        <Text>Total Items: {count}</Text>
      </View>

      <View style={styles.countContainer}>
        <Text>Total: {count*40}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkout}
        onPress={onPress3}
      >
        <Text>Confirm Order!</Text>
      </TouchableOpacity>
      
    </View>
  );}
  else{
    return (
    <View style={styles.container}>

        <Text style={{alignItems: "center", color:'yellow', fontSize:40, padding:30}}>Chicken Noodles</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress1}
      >
        <Text style={{color:'green'}}>+ 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress2}
      >
        <Text style={{color:'red'}}>- 1</Text>
      </TouchableOpacity>

      <View style={styles.countContainer}>
        <Text>Total Items: {count}</Text>
      </View>

      <View style={styles.countContainer}>
        <Text>Total: {count*40}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkout}
        onPress={onPress3}
      >
        <Text>Confirm Order!</Text>
      </TouchableOpacity>
      
    </View>
  );}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(0,255,255,1)",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "yellow"
  },
  checkout: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255,0,0,0.8)"
  }
});

export default App;
