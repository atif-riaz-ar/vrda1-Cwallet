import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/Splash";
import Name from "../../Name";
import UserModule from "../screen/UserModule";

const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="UserModule" component={UserModule} options={{ headerShown: false }} />
          <Stack.Screen name="Name" component={Name} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Routes;
