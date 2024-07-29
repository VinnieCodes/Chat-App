import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQuKa4CkFENxTvqrYZ84FjwtF0U6Kn0kw",
  authDomain: "chat-app-976e8.firebaseapp.com",
  projectId: "chat-app-976e8",
  storageBucket: "chat-app-976e8.appspot.com",
  messagingSenderId: "423465263407",
  appId: "1:423465263407:web:648a99890d4285239581da",
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


