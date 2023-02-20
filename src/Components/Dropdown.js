import { StyleSheet, View, Text } from "react-native";
//React Native Material

export const renderDropdown = (item) => {
  return (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
