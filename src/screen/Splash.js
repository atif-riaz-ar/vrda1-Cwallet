import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import Colors from "../StyleSheet/Colors";
import * as GS from "../StyleSheet/GeneralStyles";

const Splash = (navigation) => {
  useEffect(async () => {
    setTimeout(() => {
      navigation.navigation.replace("Name");
    }, 3000);
  }, []);
  return (
    <ImageBackground style={[GS.fullDisplay]} source={require("../Assets/SplashBg.png")}>
      <View style={[GS.fullDisplay, GS.row, GS.contentCenter]}>
        <View style={[GS.row]}>
          <Text style={[GS.font(23, Colors.MyAppPrimaryColor)]}>
            Crypto
          </Text>
          <Text style={[GS.font(23, Colors.white)]}>
            Wallet
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Splash;
