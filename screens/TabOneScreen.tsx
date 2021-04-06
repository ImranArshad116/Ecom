import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

//<EditScreenInfo path="/screens/TabOneScreen.tsx" />
export default function TabOneScreen() {
    const [value, onChangeText] = React.useState('Sign In');
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Sign In / Contact No</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Password</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Sign Up</Text>
          <Button title="Press me" onPress={() => Alert.alert('Cannot press this one')} />

          <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
              <Text style={styles.linkText}>Go to home screen!</Text>
          </TouchableOpacity>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    },
    inputText: {
        height: 40,
        width: 70,
        borderColor: 'lightblue',
        borderWidth: 1,
        backgroundColor: 'lightgray'
    }
});
