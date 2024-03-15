import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
// import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {Icon, MaterialIcons} from "react-native-vector-icons";

const InputBox = () => {
  const [chatText, setChatText] = useState("tes");
  const onSend = () => {
    console.warn(chatText);
    setChatText("");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      {/* <AntDesign name="plus" size={24} color="royalblue" /> */}
      <TextInput
        placeholder="test"
        style={styles.input}
        value={chatText}
        onChangeText={setChatText}
      />
      {/* <Icon name = "send"/> */}
      {/* <MaterialIcons name="send" size={24} color="royalblue" onPress={onSend} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sendBtn: {
    backgroundColor: "royalblue",
    borderRadius: 18,
    padding: 5,
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default InputBox;
