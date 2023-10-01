import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const handleSetEmail = (text) => {
    setEmail(text);
    setIsError(false);
  };
  const handleSetPassword = (text) => {
    setPassword(text);
    setIsError(false);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigation.replace("Home");
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="w-full h-full flex  justify-center items-center ">
      <KeyboardAvoidingView behavior="padding" className="w-full h-full">
        <View className="h-2/5 flex justify-end items-center mb-10"></View>
        <View className="h-3/5 w-full flex justify-start items-center ">
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => handleSetEmail(text)}
            className="text-center w-3/5 bg-white mb-4 py-1 rounded-md"
          ></TextInput>
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => handleSetPassword(text)}
            secureTextEntry={true}
            className="text-center w-3/5 bg-white mb-6 py-1 rounded-md "
          ></TextInput>

          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <TouchableOpacity
                onPress={signIn}
                className="bg-blue-100 py-2 px-4 rounded-lg mb-2 "
              >
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={signUp}
                className="bg-blue-100 py-2 px-4 rounded-lg"
              >
                <Text>Create account</Text>
              </TouchableOpacity>
            </>
          )}
          {isError ? (
            <Text className="mt-6 text-red-600">
              Something went wrong. Check your credentials.
            </Text>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
