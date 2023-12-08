import { StatusBar } from "expo-status-bar";

//import Contador from "./components/Contador";
//import ExampleFlexbox from "./components/ExampleFlexbox";
//import Prueba from "./components/PruebaScrollFlex";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boton from "./components/boton";
import Home from "./screens/Home";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import { useState } from "react";

export default function App() {
  const [view,setView] = useState("Home");
  const renderView=()=>{
    switch(view){
      case "Home":
        return <Home setView={setView}></Home>
       
      case "ScreenOne":
        return <ScreenOne setView={setView}></ScreenOne>
        
      case "ScreenTwo":
        return <ScreenTwo setView={setView}></ScreenTwo>
       
    }
  }
  return (
    <>
    <StatusBar style="auto" />
    {renderView()}
    <Boton text="Haz tu donación"></Boton>
    </>
  )
	//const Stack = createNativeStackNavigator();
/*
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ title: "Inicio" }}
					/>
					<Stack.Screen
						name="ScreenOne"
						component={ScreeOne}
						options={{ headerBackVisible: false }}
					/>
					<Stack.Screen
						name="ScreenTwo"
						component={ScreeTwo}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<Boton text="Haz tu donación"></Boton>
		</>
	);*/
}
