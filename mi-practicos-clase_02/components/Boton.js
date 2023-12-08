import { StyleSheet,TouchableOpacity, Text} from 'react-native';
import { useEffect } from 'react';
export default function Boton({onPress,text="Default Value"}) {
   useEffect(() => {
      console.log("Render Boton");
   })
   return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
         <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>

      );
   }


   const styles = StyleSheet.create({
    
      text:{
        borderColor:"#FFFFFF",
        borderWidth:1,
        padding:5,
        borderRadius:10
      },
      btnText:{
        backgroundColor:"#4444FF",
        padding:15,
        color:"#fff",
        borderRadius:10,
        margin:10
      }
     
    });