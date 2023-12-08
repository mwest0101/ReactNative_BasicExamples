import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Boton from "./components/boton";

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
  };

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.textHolaMundo}>
            Hola Mundo! Creamos un contador
          </Text>
          <Text style={styles.textContador}>{contador}</Text>
          <Boton
            apretame={aumentarContador}
            text={"Aumentar a " + (contador + 1)}
          />
        </View>
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textHolaMundo: {
    fontSize: 20,
  },
  textContador: {
    fontSize: 50,
  },
  btnText: {
    color: "#FFF",
  },
  btnAlerta: {
    backgroundColor: "#0000FF",
    color: "#FFF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
