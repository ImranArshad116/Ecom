import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, SafeAreaView, TextInput, Alert, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
export default function TabTwoScreen() {
    const [value, onChangeText] = React.useState('Sign In');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.title}>Full Name</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Shop Name</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Addresss</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Email</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Contact No</Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Password </Text>
          <TextInput
              style={styles.inputText}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Confirm Password</Text>
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
        height: 50,
        width:50,
        borderColor: 'lightblue',
        borderWidth: 1,
        backgroundColor: 'lightgray' 
    }
});
