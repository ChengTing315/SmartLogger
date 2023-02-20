import { StyleSheet, View, Image, Text } from "react-native";

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.projectListImage}
        source={require("../../../assets/document2.jpeg")}
      />
      <Text style={styles.projectListText}>Project List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  projectListText: {
    fontSize: 25,
    textAlign: "center",
  },

  projectListImage: { width: 40, height: 40, marginRight: 15 },
  container: {
    flex: 1,
  },
});
