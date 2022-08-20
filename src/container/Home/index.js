import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Text } from "../../components";
import useHome from "./useHome";

function Home() {
  const { convertInArray, onChat } = useHome();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        onChat(item);
      }}
    >
      <Text size="xxSmall" type="medium_poppins">
        Name: {item.name}
      </Text>
      <Text size="xxSmall">Email: {item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {convertInArray.length ? (
        <FlatList
          data={convertInArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.uid}
        />
      ) : null}
    </View>
  );
}

export default Home;
