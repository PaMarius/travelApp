import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  const handleSignOut = () => {
    FIREBASE_AUTH.signOut();
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView className="w-full h-full flex items-center justify-center">
      {!showModal ? (
        <View className="flex items-center justify-center w-full h-full ">
          <TouchableOpacity className="text-blue-500 mb-6 rounded-lg">
            <Text className="text-blue-500">Favorite Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity className="text-blue-500 mb-6 rounded-lg">
            <Text className="text-blue-500">Saved Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity className="text-blue-500 mb-6 rounded-lg">
            <Text className="text-blue-500">Booked Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            className="bg-blue-100 py-2 px-4 rounded-lg"
          >
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="w-4/5 h-1/4 bg-gray-300 rounded-lg flex items-center justify-center">
          <Text className="font-semibold h-1/2 pt-10">
            Are you sure you want to log out?
          </Text>
          <View className="flex flex-row gap-6">
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              className="bg-blue-100 py-2 px-4 rounded-lg"
            >
              <Text>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignOut}
              className="bg-blue-100 py-2 px-4 rounded-lg"
            >
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserProfileScreen;
