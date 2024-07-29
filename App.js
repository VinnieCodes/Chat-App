import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5BPSqfT0U6uRer5HAHhDniEpQ2PiDIVw",
  authDomain: "chat-app-3f89b.firebaseapp.com",
  projectId: "chat-app-3f89b",
  storageBucket: "chat-app-3f89b.appspot.com",
  messagingSenderId: "452024414599",
  appId: "1:452024414599:web:6438b67a086b7f5956a322",
  measurementId: "G-TWW76WLP6N",
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

const Stack = createNativeStackNavigator();

export default function App() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


