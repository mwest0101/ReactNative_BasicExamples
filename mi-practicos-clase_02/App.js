import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet,ScrollView,TouchableOpacity,TextInput, Text, View } from 'react-native';
import Boton from './components/Boton';
//import { ScrollView } from 'react-native-web';
//import { TouchableOpacity } from 'react-native-web';
//import { TextInput } from 'react-native-web';

export default function App() {
  const [contador,setContador] = useState(0);


  const aumentarContador = ()=>{
    const nuevoValor=contador+1;  
    setContador(nuevoValor);
  }

  useEffect(()=>{    
    console.log(contador);
    
  }); //parametros, Funciona ejecutar y parametro a monitorizar

  return (
  <>
    <StatusBar style="auto" />
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>
    <View style={styles.container}>
      
      <Text style={styles.textHolaMundo}>Hola Mundo! Creamos un contador</Text>      
      <Text style={styles.textContador}>{contador}</Text>
      
      
      <Boton onPress={aumentarContador} text="Boton" />
      
    </View>

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAAAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFAAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    borderColor:"#FFFFFF",
    borderWidth:1,
    padding:5,
    borderRadius:10
  },
  btnAlerta:{
    backgroundColor:"#4444FF",
    padding:15,
    color:"#fff",
    borderRadius:10,
    margin:10
  },
  textHolaMundo:{
    fontSize:20,
  },
  textContador:{
    fontSize:50,
  }
});
