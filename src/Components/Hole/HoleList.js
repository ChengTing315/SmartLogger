import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, FlatList, Alert } from "react-native";
//React Native Material
import { Text } from "@react-native-material/core";
import { Card } from "@rneui/themed";
//React Native navigation
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

//Expo
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
//AWS
import { DataStore } from "aws-amplify";
//Model
import { Hole } from "../../models";
//Function
import { deleteData } from "../../Function/deleteData";

export const HoleLists = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [holeList, setHoleList] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const projectKey = route.params.key;
  const projectName = route.params.name;
  const keypair = projectKey;

  function alertBeforeDelete(ID, Name) {
    Alert.alert("Are you sure you want to delete " + Name, "", [
      {
        text: "Cancel",
      },
      { text: "OK", onPress: () => deleteData(Hole, ID) },
    ]);
  }

  useEffect(() => {
    const subscription = DataStore.observeQuery(Hole, (hole) =>
      hole.projectID("eq", keypair)
    ).subscribe((snapshot) => {
      const { items, isSynced } = snapshot;

      const orderedItem = items.sort((a, b) =>
        parseInt(a.hole) > parseInt(b.hole) ? 1 : -1
      );

      setHoleList(orderedItem);
    });

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  const HoleListItem = ({ item }) => {
    const backgroundColor = item.hole === selectedItem ? "#6e3b6e" : "#f9c2ff";
    const color = item.hole === selectedItem ? "white" : "black";

    return (
      <HoleCardItem
        item={item}
        onPress={() => {
          setSelectedItem(item.hole);
          if (item) {
            navigation.navigate("General Information", {
              projectKey: projectKey,
              projectName: projectName,
              itemInfo: item,
            });
          }
        }}
        onLongPress={() => alertBeforeDelete(item.id, item.hole)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        title="hole"
      />
    );
  };

  return (
    <FlatList
      data={holeList}
      keyExtractor={({ id }) => id}
      renderItem={HoleListItem}
    />
  );
};

const HoleCardItem = ({ item, onPress, onLongPress }) => (
  <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={[styles.cardItem]}
  >
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.Title>{item.hole}</Card.Title>
      <Card.Divider />
      <View style={styles.cardTitle}>
        <FontAwesome name="level-down" size={24} color="black" />
        <Text style={styles.title}> GroundLevel: {item.groundLevel}</Text>
      </View>

      <View style={styles.cardContent}>
        <View>
          <FontAwesome name="arrows" size={24} color="black" />
          <Text style={styles.fonts}>E: {item.coOrdinatesE}</Text>
          <Text style={styles.fonts}>N: {item.coOrdinatesN}</Text>
        </View>
        <View>
          <MaterialIcons name="date-range" size={24} color="black" />
          <Text style={styles.middeleText}>from: {item.projectStartDate}</Text>
          <Text style={styles.middeleText}>to: {item.projectEndDate}</Text>
        </View>
      </View>
    </Card>
  </Pressable>
);

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardItem: {
    //backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  middeleText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    flexDirection: "row",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardItem: {
    //backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    marginLeft: 15,
  },
  middeleText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
