import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TouchableOpacity, Platform, StatusBar } from 'react-native';
import PresentationalComponent from './components/PresentationalComponents'

export default class App extends React.Component {
   state = {
      myState: 'Hey There! THis is a test app '
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>

            <Button title="Press me" color="red" onPress={() => Alert.alert('Simple Button pressed')}/>

            <TouchableOpacity onPress={() => Alert.alert("Touchable Button Pressed")} style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
            </TouchableOpacity>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // justifyContent: 'centre',
    // alignItems: "centre",
    // marginTop: Platform.OS === "android" ? 10 : 0,
    // paddingTop: Platform.OS === "ios" ? 500 : 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:20,
  },
  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "white"
  },
})