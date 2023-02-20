import { StyleSheet, View, Text } from "react-native";

import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";

export const TitleField = ({ name, lib, iconName }) => {
  let image;
  switch (lib) {
    case "Ionicons":
      image = <Ionicons name={iconName} size={24} color="black" />;
      break;
    case "AntDesign":
      image = <AntDesign name={iconName} size={24} color="black" />;
      break;
    case "FontAwesome":
      image = <FontAwesome name={iconName} size={24} color="black" />;
      break;
    case "FontAwesome5":
      image = <FontAwesome5 name={iconName} size={24} color="black" />;
      break;
    case "MaterialCommunityIcons":
      image = (
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
      );
      break;
    case "MaterialIcons":
      image = <MaterialIcons name={iconName} size={24} color="black" />;
      break;
    case "Entypo":
      image = <Entypo name={iconName} size={24} color="black" />;
      break;
    case "Feather":
      image = <Feather name={iconName} size={24} color="black" />;
      break;
  }
  return (
    <View style={styles.fieldContainer}>
      {image}
      <Text style={styles.titleText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  titleText: {
    marginLeft: 15,
  },
});
