//Displays Chats of a particular user

import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import bg from "../../assets/images/BG.png";
  import messages from "../../assets/data/messages.json";
  import Message from "../components/MessageContainer";
  import InputBox from "../components/InputBox";
  import { useRoute, useNavigation } from "@react-navigation/native";
  //const bgLocation = "../../assets/images/BG.png";
  import { useEffect } from "react";
  
  const ChatScreen = () => {
    const route = useRoute();
    //console.log(route);
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({ title: route?.params?.name });
    });
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bg}
        keyboardVerticalOffset={75}
      >
        <ImageBackground source={bg} style={styles.bg}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            style={styles.list}
            inverted
          />
          <InputBox />
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    bg: {
      flex: 1,
    },
    list: {
      padding: 10,
    },
  });
  
  export default ChatScreen;
  