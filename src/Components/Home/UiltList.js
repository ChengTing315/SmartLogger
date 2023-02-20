import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Modal } from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";

import { ExportButton } from "./ExportButton";
import { DataStoreSave } from "../../Function/DataStoreSave";
import { Project } from "../../models";
import { resultDupMsg, createPJMsg } from "../ResultMsg";
import { checkSame } from "../../Function/checkSame";
export const HomeUiltList = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(() => !showModal);

  const ModelContainer = () => {
    const [tempProject, setTempProejct] = useState("");
    const [tempTaskNo, setTempTaskNo] = useState("");

    return (
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please enter the project name:</Text>
            <TextInput
              style={styles.textStyle}
              label=" "
              variant="standard"
              value={tempProject}
              onChangeText={setTempProejct}
            />
            <Text style={styles.modalText}>
              Please enter the Task Order No. (optional)
            </Text>
            <TextInput
              style={styles.textStyle}
              label=" "
              variant="standard"
              value={tempTaskNo}
              onChangeText={setTempTaskNo}
            />

            <Button
              style={styles.modelButton}
              title="Save"
              onPress={async () => {
                if (tempProject) {
                  let item = {
                    project: tempProject,
                    taskOrderNumber: tempTaskNo,
                  };
                  const NosameItem = await checkSame(Project, item);

                  if (NosameItem) {
                    DataStoreSave(Project, item);
                    createPJMsg(item.project);
                    handleModal();
                  } else {
                    resultDupMsg();
                  }

                  //DataStoreSaveProject(item);
                  // DataStoreSave(Project, item);
                  // handleModal();
                }
              }}
            />

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

  return (
    <View style={styles.buttonContainer}>
      <ModelContainer />
      <TouchableOpacity
        onPress={() => {
          handleModal();
        }}
      >
        <Image
          source={require("../../../assets/addButton.png")}
          style={styles.addButton}
        />
      </TouchableOpacity>
      <ExportButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

  container: {
    flex: 1,
  },
  addButton: {
    width: 80,
    height: 80,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },

  buttonContainer: {
    //flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textStyle: {
    height: 40,
    margin: 12,
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
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
