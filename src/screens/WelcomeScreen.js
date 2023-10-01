import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const WelcomeScreen = () => {
  const [user, setUser] = useState(null);
  const [userIsLogged, setUserIsLogged] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (user) {
        setUserIsLogged(true);
      } else {
        setUserIsLogged(false);
      }
    });
  }, [user]);

  return (
    <View className="flex-1 flex justify-end">
      {/* background image */}
      <Image
        source={require("../../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />

      {/* content & gradient */}
      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3">
          <Text
            className="text-white font-bold text-5xl"
            style={{ fontSize: wp(10) }}
          >
            Traveling made easy!
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(4) }}
          >
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            userIsLogged
              ? navigation.navigate("Home")
              : navigation.navigate("Login")
          }
          style={{ backgroundColor: theme.bg(1) }}
          className="mx-auto p-3 px-12 rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Let's go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
