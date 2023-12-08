import { StatusBar } from "expo-status-bar";
import Contador from "./components/Contador";
import ExampleFlexbox from "./components/ExampleFlexbox";
import Prueba from "./components/PruebaScrollFlex";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boton from "./components/boton";

export default function App() {


  const Stack = createNativeStackNavigator();

  return (<>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Flex" component={ExampleFlexbox} options={{title:"Inicio"}}/>
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="Contador2" component={ExampleFlexbox} />
      </Stack.Navigator>
    </NavigationContainer>
    <Boton text="Haz tu donación"></Boton>
    </>
    
  );
}

