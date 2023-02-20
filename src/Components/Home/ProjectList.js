import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";

//React Native navigation
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

// Model
import { Project } from "../../models";

//AWS
import { DataStore } from "@aws-amplify/datastore";

//Function
import { DataStoreSave } from "../../Function/DataStoreSave";
import { deleteData } from "../../Function/deleteData";
import { checkSame } from "../../Function/checkSame";
import { resultDupMsg } from "../ResultMsg";

//UI
import { Foundation } from "@expo/vector-icons";
import { Divider } from "@react-native-material/core";

export const ProjectLists = () => {
  const [projectList, setProjectList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const handleUpdateModal = () => setShowModal(() => !showModal);

  useEffect(() => {
    const subscription = DataStore.observeQuery(Project).subscribe(
      (snapshot) => {
        const { items, isSynced } = snapshot;
        const orderedItem = items.sort((a, b) =>
          a.createdAt > b.createdAt ? 1 : -1
        );
        setProjectList(orderedItem);
      }
    );

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  function handleLongPress(table, item) {
    return Alert.alert(
      "Do you want to delete or update " + item.project + " ? ",
      "",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteData(table, item.id) },
        {
          text: "Update",
          onPress: () => handleUpdateModal(),
        },
      ]
    );
  }

  const UpdateProjectModel = () => {
    const [tempProject, setTempProejct] = useState(null);
    return (
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please update the new project name :
            </Text>

            <TextInput
              style={styles.textStyle}
              label=" "
              variant="standard"
              value={tempProject}
              onChangeText={setTempProejct}
            />

            <Button
              style={styles.modelButton}
              title="Save"
              onPress={async () => {
                let item = { id: selectedItem.id, project: tempProject };
                try {
                  // const NosameItem = await checkSame(Project, item);
                  // //console.log("sameItem =" + sameItem);
                  // if (NosameItem) {
                  DataStoreSave(Project, item);
                  handleUpdateModal();
                  // } else {
                  //   resultDupMsg();
                  // }
                } catch (e) {
                  console.log("error = " + e);
                }
              }}
            />

            <Button
              style={styles.modelButton}
              title="Close"
              onPress={handleUpdateModal}
            />
          </View>
        </View>
      </Modal>
    );
  };

  const ProjectListItem = ({ item }) => {
    const backgroundColor =
      item.project === selectedItem ? "#6e3b6e" : "#f9c2ff";
    const color = item.project === selectedItem ? "white" : "black";

    return (
      <ProjectFlatList
        item={item}
        onPress={() => {
          setSelectedItem(item);
          if (item) {
            navigation.navigate("Hole", {
              route: route,
              navigation: navigation,
              key: item.id,
              name: item.project,
            });
          }
        }}
        onLongPress={() => {
          setSelectedItem(item);
          handleLongPress(Project, item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const ProjectFlatList = ({
    item,
    onPress,
    backgroundColor,
    textColor,
    onLongPress,
  }) => (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.flatListItem, backgroundColor]}
    >
      <Foundation name="clipboard-notes" size={24} color="black" />
      <Text style={[styles.title, textColor]}>{item.project}</Text>
    </Pressable>
  );

  return (
    <>
      <UpdateProjectModel />
      {/* <View style={styles.flatListContainer}> */}
      {/* <ImageBackground
          source={require("../../../assets/List4.png")}
          resizeMode="cover"
          style={styles.image}
        > */}
      <FlatList
        data={projectList}
        keyExtractor={({ id }) => id}
        renderItem={ProjectListItem}
        // ItemSeparatorComponent={() => (
        //   <Divider style={{}} leadingInset={16} color="black" />
        // )}
      />
      {/* </ImageBackground> */}
      {/* </View> */}
    </>
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    //flexDirection: "row",
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 3,
    //padding: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginLeft: 15,
    marginRight: 15,
  },
  flatListItem: {
    flexDirection: "row",
    //backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 30,
  },

  title: {
    fontSize: 16,
    marginLeft: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modelButton: {
    marginLeft: 15,
    marginTop: 15,
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
