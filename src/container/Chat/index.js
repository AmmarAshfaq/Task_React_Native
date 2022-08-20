import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import useChat from "./useChat";
import { GiftedChat } from "react-native-gifted-chat";

function Chat({ route }) {
  const { userData, messages, onSend } = useChat(route);
  return (
    <View style={styles.container}>
      {userData.data ? (
        <GiftedChat
          messages={messages}
          onSend={(messages) => {
            onSend(messages);
          }}
          user={{
            _id: userData.data._id,
          }}
          textInputStyle={{
            color:'#000'
          }}
        />
      ) : null}
    </View>
  );
}

export default Chat;
