import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export const DepthUiltList = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const holeKey = route.params.key;
  const holeName = route.params.name;

  const AddButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rock/Soil", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: null,
            });
          }}
        >
          <Image
            source={require("../../../assets/addButton.png")}
            style={styles.addButton}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 80,
    height: 80,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },

  buttonContainer: {
    // flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  buttonContainer: {
    //flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
