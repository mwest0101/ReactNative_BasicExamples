
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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

import HomeT from "./screens/tab/Home";
import ScreenOneT from "./screens/tab/ScreenOne";
import ScreenTwoT from "./screens/tab/ScreenTwo";
import { useState } from "react";
import Login from "./screens/Login/Login";
export default function App() {

  //LOGIN
  return(<Login></Login>);

  //Ejemplo usando navegacion bottom tabs
  //const Tab = createBottomTabNavigator();
  /*
  const Tab = createMaterialBottomTabNavigator();
    return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeT} />
          <Tab.Screen name="ScreenOne" component={ScreenOneT} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwoT} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
    
  );
  */
  // //EJEMPLO USANDO NAVEGACIÓN DRAWER

  // const Drawer = createDrawerNavigator();

  // return (
  //   <>
  //     <StatusBar style="auto" />
  //     <NavigationContainer>
  //       <Drawer.Navigator>
  //         <Drawer.Screen name="Home" component={HomeD} />
  //         <Drawer.Screen name="ScreenOne" component={ScreenOneD} />
  //         <Drawer.Screen name="ScreenTwo" component={ScreenTwoD} />
  //       </Drawer.Navigator>
  //     </NavigationContainer>

  //     <Boton text="Haz tu donación"></Boton>
  //   </>
  // );

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
