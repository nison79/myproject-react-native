import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name ,setName] = useState('George');
  const [person,setPerson] = useState({ name:'Nick', age:40 });

  const clickHandler = () => {
    setName('Petros');
  }
  return (
    <View style={styles.container}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his {person.age} years</Text>
        <View style = {styles.buttonContainer}>
          <Button title = 'Update Name' onPress={clickHandler} />
        </View>
    </View>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight:'bold',
  
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  buttonContainer:{
    marginTop:20,
  }
});
