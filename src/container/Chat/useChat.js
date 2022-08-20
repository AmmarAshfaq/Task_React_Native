import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import database, { firebase } from "@react-native-firebase/database";
import { GiftedChat } from "react-native-gifted-chat";
import { request as startChat } from "../../actions/chatHistoryActions";
import { API_DATA_BASE_URL } from "@env";

export default (route) => {
  const [messages, setMessages] = useState([]);
  const userData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (route.params.uid) {
      const reference = firebase.app().database(API_DATA_BASE_URL);

      const onChildAdd = reference
        .ref(`/chat/${route.params.uid}`)
        .on("child_added", (snapshot) => {
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, parseMessages(snapshot))
          );
        });

      // Stop listening for updates when no longer required
      return () =>
        database()
          .ref(`/chat/${route.params.uid}`)
          .off("child_added", onChildAdd);
    }
  }, []);

  const parseMessages = (message) => {
    const { user, text, timestamp, _id } = message.val();

    const createdAt = new Date(timestamp);

    return {
      _id,
      user,
      text,
      createdAt,
    };
  };
  const onSend = (data) => {
    data.forEach((element) => {
      let message = {
        user: userData.data,
        text: element.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        deep: 2,
        isChat: true,
      };
      dispatch(startChat(`chat/${route.params.uid}`, message));
    });
  };
  return { userData, messages, onSend };
};
