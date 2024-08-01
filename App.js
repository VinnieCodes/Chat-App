import { StyleSheet, Text, View } from "react-native";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0sdtprb2blHCpKIk5iQZBmia_gRTsYGI",
  authDomain: "the-chat-app-99d6b.firebaseapp.com",
  projectId: "the-chat-app-99d6b",
  storageBucket: "the-chat-app-99d6b.appspot.com",
  messagingSenderId: "389755305798",
  appId: "1:389755305798:web:cebfc76ffbd534b96fef47",
};


// Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

const Stack = createNativeStackNavigator();



const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyC0sdtprb2blHCpKIk5iQZBmia_gRTsYGI",
    authDomain: "the-chat-app-99d6b.firebaseapp.com",
    projectId: "the-chat-app-99d6b",
    storageBucket: "the-chat-app-99d6b.appspot.com",
    messagingSenderId: "389755305798",
    appId: "1:389755305798:web:cebfc76ffbd534b96fef47",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


