import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, FlatList, Alert } from "react-native";
//React Native Material
import { Text } from "@react-native-material/core";
import { Card } from "@rneui/themed";
//React Native navigation
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

//Expo
import { Feather, MaterialIcons } from "@expo/vector-icons";
//AWS
import { DataStore } from "aws-amplify";
//Model
import { Depth } from "../../models";
//Function
import { deleteData } from "../../Function/deleteData";

export const DepthLists = (params) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [depthList, setDepthList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const holeKey = route.params.key;
  const holeName = route.params.name;
  const keypair = holeKey;

  function alertBeforeDelete(ID, Name) {
    Alert.alert("Are you sure you want to delete " + Name, "", [
      {
        text: "Cancel",
      },
      { text: "OK", onPress: () => deleteData(Depth, ID) },
    ]);
  }

  useEffect(() => {
    const subscription = DataStore.observeQuery(Depth, (depth) =>
      depth.holeID("eq", keypair)
    ).subscribe((snapshot) => {
      const { items, isSynced } = snapshot;

      const orderedItem = items.sort((a, b) =>
        parseFloat(a.toDepthLv) - parseFloat(b.toDepthLv) > 0 ? true : false
      );

      setDepthList(orderedItem);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  const DepthListItem = ({ item }) => {
    const backgroundColor =
      item.depthLv === selectedItem ? "#6e3b6e" : "#f9c2ff";
    const color = item.depthLv === selectedItem ? "white" : "black";

    return (
      <DephtCardItem
        item={item}
        onPress={() => {
          setSelectedItem(item.depthLv);
          navigation.navigate("Rock/Soil", {
            holeKey: holeKey,
            holeName: holeName,
            itemInfo: item,
          });
        }}
        onLongPress={() => alertBeforeDelete(item.id, item.depthLv)}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
        // title="depthLv"
      />
    );
  };

  return (
    <FlatList
      data={depthList}
      keyExtractor={({ id }) => id}
      renderItem={DepthListItem}
    />
  );
};

const DephtCardItem = ({ item, onPress, onLongPress }) => (
  <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={[styles.cardItem]}
  >
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.Title>{item.depthLv}</Card.Title>
      <Card.Divider />
      <View style={styles.cardContent}>
        <View>
          <Feather name="type" size={24} color="black" />
          <Text style={styles.fonts}>Type: {item.type}</Text>
        </View>
        {/* <View>
          <MaterialIcons name="date-range" size={24} color="black" />
          <Text style={styles.middeleText}>{item.drillDate}</Text>
        </View> */}
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
});
