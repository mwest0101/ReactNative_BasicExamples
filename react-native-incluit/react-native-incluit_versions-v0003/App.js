import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Boton from "./components/boton";
import HomeS from "./screens/stack/Home";
import ScreenOneS from "./screens/stack/ScreenOne";
import ScreenTwoS from "./screens/stack/ScreenTwo";
import HomeR from "./screens/rustico/Home";
import ScreenOneR from "./screens/rustico/ScreenOne";
import ScreenTwoR from "./screens/rustico/ScreenTwo";
import HomeD from "./screens/drawer/Home";
import ScreenOneD from "./screens/drawer/ScreenOne";
import ScreenTwoD from "./screens/drawer/ScreenTwo";

import { useState } from "react";

export default function App() {
  //EJEMPLO USANDO NAVEGACIÓN DRAWER
  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeD} />
          <Drawer.Screen name="ScreenOne" component={ScreenOneD} />
          <Drawer.Screen name="ScreenTwo" component={ScreenTwoD} />
        </Drawer.Navigator>
      </NavigationContainer>

      <Boton text="Haz tu donación"></Boton>
    </>
  );

  //EJEMPLO USANDO NAVEGACIÓN RUSTICA
  /*
  const [view, setView] = useState("Home");

  const renderView = () => {
    switch (view) {
      case "Home":
        return <HomeR setView={setView}></HomeR>;
      case "ScreenOne":
        return <ScreenOneR setView={setView}></ScreenOneR>;
      case "ScreenTwo":
        return <ScreenTwoR setView={setView}></ScreenTwoR>;
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      {renderView()}
      <Boton text="Haz tu donación"></Boton>
    </>
  );
*/

  //EJEMPLO USANDO NAVEGACIÓN NATIVE STACK

  //const Stack = createNativeStackNavigator();
  /*
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeS}
            options={{ title: "Inicio", headerShown: false  }}
          />
          <Stack.Screen
            name="ScreenOne"
            component={ScreenOneS}
            options={{ headerBackVisible: false }}
          />
          <Stack.Screen
            name="ScreenTwo"
            component={ScreenTwoS}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Boton text="Haz tu donación"></Boton>
    </>
  );
  */
}
