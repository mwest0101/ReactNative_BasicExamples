import { useState } from "react";
import { View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./Login.style";

const Login = ({ navigation }) =>{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const ScreenOneS = ({ navigation }) => {

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#AAAAAA"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!loading} />

         <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#AAAAAA"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            editable={!loading} />

         <TouchableOpacity
            style={styles.buttonCrearCuenta}
            onPress={() => changeView("CreateAccount")}
         >
            <Text style={styles.buttonText}>Crear Cuenta</Text>

         </TouchableOpacity>;
         </View>
         );
        
};

export default Login