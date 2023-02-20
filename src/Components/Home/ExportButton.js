import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import { Divider } from "@rneui/themed";
import { Project } from "../../models";

//Expo
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

//Model

//DataStore
import { DataStore } from "@aws-amplify/datastore";
//Function
import { getAGSdata } from "../../Function/buildAGS";
//Components
import { resultAGSmsg } from "../ResultMsg";

export const ExportButton = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(() => !showModal);
  const [loading, setLoading] = useState(false);

  const ModelContainer = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [projectList, setProjectList] = useState([]);

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

    const ProjectItem = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.flatListItem, backgroundColor]}
      >
        <Text style={[styles.title, textColor]}>{item.project}</Text>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? "white" : "black";

      return (
        <ProjectItem
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            setSelectedItem(item.project);
          }}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          {/* {loading ? (
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={loading}
              size="large"
              color="#0000ff"
              //Text with the Spinner
              //textContent={"Loading..."}
              //Text style of the Spinner Text
              //textStyle={styles.spinnerTextStyle}
            />
          ) : null} */}
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please select the project you want to export:
            </Text>

            <FlatList
              data={projectList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />

            <Button
              style={styles.modelButton}
              title="Export"
              onPress={() => handleExport(selectedId, selectedItem)}
            />
            <Divider />
            <View style={styles.sperator}></View>
            <Button
              style={styles.modelButton}
              title="Close"
              onPress={handleModal}
            />
          </View>
        </View>
      </Modal>
    );
  };

  const handleExport = async (selectedId, projectName) => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    const AGSdata = await getAGSdata(selectedId);
    //console.log("ags data = " + AGSdata);
    exportAGS(AGSdata, projectName);
    //setLoading(false);
  };

  const exportAGS = async (AGSdata, projectName) => {
    try {
      // let fileUri = FileSystem.documentDirectory + `${projectName}.txt`;
      let fileUri = FileSystem.documentDirectory + `Exported_Data.txt`;
      await FileSystem.writeAsStringAsync(fileUri, AGSdata, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      if (Platform.OS == "android") {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") return;
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      } else {
        const UTI = "public.item";
        const shareResult = await Sharing.shareAsync(fileUri, {
          UTI,
        });
      }
      resultAGSmsg(true);
    } catch (e) {
      resultAGSmsg(false);
      console.log("Export AGS error = " + e);
    }
  };

  return (
    <View style={styles.fieldContainer}>
      <ModelContainer />

      <TouchableOpacity
        onPress={() => {
          try {
            handleModal();
          } catch (e) {
            console.log("Export error = " + e);
            resultAGSmsg(false);
          }
        }}
      >
        <Image
          source={require("../../../assets/export.jpeg")}
          style={styles.exportButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },

  exportButton: {
    width: 80,
    height: 60,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
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
    // alignItems: "center",
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
    //borderRadius: 20,
    padding: 10,
    //elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  flatListItem: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  sperator: {
    marginTop: 15,
  },
});
