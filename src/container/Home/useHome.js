import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { request as getUsersList } from "../../actions/getUsersList";
import { request as startChat } from "../../actions/chatHistoryActions";
import { firebase } from "@react-native-firebase/database";
import { useNavigation } from "@react-navigation/native";
import { API_DATA_BASE_URL } from "@env";
export default () => {
  const userData = useSelector((state) => state.login);
  const userList = useSelector((state) => state.userList);
  const navigation = useNavigation();
  const convertInArray = userList?.data?.users
    ? Object.values(userList?.data?.users).filter(
        (item) => item._id !== userData.data._id
      )
    : [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const checkIsMessageAlready = (data, receiver) => {
    let urlIfExits = "";
    if (data) {
      Object.keys(data).forEach((item) => {
        if (
          item === `${receiver._id}_${userData.data._id}` ||
          item === `${userData.data._id}_${receiver._id}`
        ) {
          urlIfExits = item;
        }
      });
    }

    return urlIfExits;
  };
  const onChat = async (data) => {
    const reference = firebase.app().database(API_DATA_BASE_URL);

    const chatList = await reference.ref("/chat").once("value");
    const urlForChat = checkIsMessageAlready(chatList.val(), data);
    if (urlForChat) {
      navigation.navigate("Chat", { uid: urlForChat });
      return;
    }
    let message = {
      user: userData.data,
      text: "Hi.",
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      deep: 2,
      uid: `${userData.data._id}_${data._id}`,
    };
    dispatch(startChat(`chat/${userData.data._id}_${data._id}`, message));
  };

  return { convertInArray, onChat };
};
