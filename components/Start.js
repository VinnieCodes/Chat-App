import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/BGimg.png")}
        style={styles.imageBackground}
      >
        <Text>Connect to Chat</Text>
        <Text>Connect to Chat</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        />
        <Button
          title="Start Chatting"
          onPress={() => navigation.navigate("Chat", { name: name })}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Start;
