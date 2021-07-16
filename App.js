import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput } from 'react-native';


export default function App() {

  

  const [item, setItems] = useState([{ text: 'Take Pills', key: '1'},
  { text: 'Drink Tea', key: '2'},
  { text: 'Buy Groceries', key: '3'},
  { text: 'Finish Reading the book', key: '4'}])

  var k = 4;
  var s = String;
  const showText = () => {
    //styles.textField.opacity = 
  }

  return (
    

   <View style = {styles.container}>
      { <Text style = {styles.headText}> TODO LIST (Note can be deleted by pressing on it) </Text>}

    <View style={styles.container}>

       <ScrollView>
      { 
      
      item.map((val)=> {
        return (
         
          <View key = {val.key}>
            <TouchableOpacity>
            <Text style={styles.value}>
              {val.text}
            </Text>
            </TouchableOpacity>
            </View>
          
        
        )
      })}
<TextInput onChangeText = {(val) => s(val)}/>
       </ScrollView>
       <Button title ='add note' onPress ={showText()} />

      <StatusBar style="auto" />
      
      

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 60,
  },
  textField: {
    borderWidth: 1,
    backgroundColor: 'red'
  },
  headText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20
  },
  value: {
    padding: 30,
    borderWidth: 1,
    color: 'red'
  }
});
