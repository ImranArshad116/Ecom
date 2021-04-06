import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, SafeAreaView, TextInput, Alert } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
    const [value, onChangeText] = React.useState('Sign In');
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Sign In / Contact No</Text>
          <TextInput
              style={{ height: 30, borderColor: 'lightblue', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Password</Text>
          <TextInput
              style={{ height: 30, borderColor: 'lightblue', borderWidth: 1, backgroundColor:'lightgray' }}
              onChangeText={text => onChangeText(text)}
              value={value}
          />
          <Text style={styles.title}>Sign Up</Text>
          <Button title="Press me"  onPress={() => Alert.alert('Cannot press this one')} />


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
});
