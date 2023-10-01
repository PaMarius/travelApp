import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";
import { getTravelData } from "../api";
import { getDetailsFromLocation } from "../api/getDetailsFromLocation";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [travelData, setTravelData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    getTravelData("osaka castle").then((data) => {
      setTravelData(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!travelData) return;
    setLocationsData(getDetailsFromLocation(travelData));
  }, [travelData]);

  const handleSearch = (searchText) => {
    setIsLoading(true);
    getTravelData(searchText).then((data) => {
      setTravelData(data);
      setIsLoading(false);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "}>
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Let's Discover
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              onSubmitEditing={() => handleSearch(searchText)}
            />
            <TouchableOpacity
              title="Search"
              onPress={() => handleSearch(searchText)}
              className="bg-blue-200 p-2 rounded-lg"
            >
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View className="mb-4">
          <Categories handleSearch={handleSearch} />
        </View>

        {/* sort categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          {isLoading ? (
            <View className=" flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />
            </View>
          ) : (
            <Destinations locationsData={locationsData} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
