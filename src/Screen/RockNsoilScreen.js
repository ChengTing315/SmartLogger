import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
//React Native Material
import { Button, Text, HStack, TextInput } from "@react-native-material/core";
//import NumberFormat from "react-number-format";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

import { TitleField } from "../Components/TitleField";

//import { DataStoreSaveDepth } from "../Function/DataStoreSaveDepth";
import { DataStoreSaveHoleDL } from "../Function/DataStoreSaveHole";
//import { DataStoreSave } from "../Function/DataStoreSave";
import { DataStore } from "aws-amplify";
import { Hole, Depth } from "../models";
//import { KeyboardAvoidingView } from "react-native-web";
//Util

export default function RockNsoilScreenDetail({ navigation, route }) {
  let initDate = {
    depthLv: "",
    type: "",
    fromDepthLv: "",
    toDepthLv: "",
    drillDate: "",
  };

  let holeKey = null;
  let holeName = null;
  let depthInfo = null;

  if (route.params.holeKey) {
    holeKey = route.params.holeKey;
    holeName = route.params.holeName;
    depthInfo = route.params.itemInfo;

    if (depthInfo) {
      //console.log("have depthInfo =" + JSON.stringify(depthInfo));
    } else {
      depthInfo = initDate;
    }
  }

  const depthName = "Depth";
  const TypeName = "Type";
  const DateName = "Date";

  const isRockType = depthInfo.type == "Rock" ? true : false;
  const isSoilType = depthInfo.type == "Soil" ? true : false;

  const [isRock, setIsRock] = useState(isRockType);
  const [isSoil, setIsSoil] = useState(isSoilType);

  const [typeField, setTypeField] = useState(
    depthInfo.type ? depthInfo.type : "Other"
  );

  const [fromDepthField, setFromDepthField] = useState(
    depthInfo.fromDepthLv > -1 ? depthInfo.fromDepthLv : ""
  );

  const [toDepthField, setToDepthField] = useState(
    depthInfo.toDepthLv ? depthInfo.toDepthLv : ""
  );

  const setParams = (depthInfo) => {
    let item = {
      ...depthInfo,
      depthLv: depthString,
      type: typeField,
      fromDepthLv:
        !fromDepthField ||
        fromDepthField == "undefined" ||
        fromDepthField == "0" ||
        fromDepthField == "0.0" ||
        fromDepthField == "0.00"
          ? 0.0
          : parseFloat(fromDepthField),
      toDepthLv: parseFloat(toDepthField),
    };

    return item;
  };

  const saveHoleDL = async (item) => {
    const currHole = await DataStore.query(Hole, holeKey);
    //console.log("item.toDepthLv = " + item.toDepthLv);
    //console.log("currHole.depthLevel = " + currHole.depthLevel);
    if (item.toDepthLv - currHole.depthLevel > 0 || !currHole.depthLevel) {
      DataStoreSaveHoleDL(holeKey, item);
    }
  };

  const depthString =
    "From " + String(fromDepthField) + " To " + String(toDepthField);

  const UiltList = () => {
    return (
      <HStack marginTop={20} spacing={4} alignItems="flex-end">
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        {/* <Button
          title="Save"
          onPress={() => {
            const item = setParams(depthInfo);
            saveHoleDL(item);
            DataStoreSave(Depth, item);
            //DataStoreSaveDepth(item, holeKey, holeName);
            navigation.navigate("Home");
          }}
        ></Button> */}

        <Button
          title="Next"
          onPress={() => {
            const item = setParams(depthInfo);
            saveHoleDL(item);
            if (item.type == "Other") {
              navigation.navigate("Description", {
                holeKey: holeKey,
                holeName: holeName,
                itemInfo: item,
              });
            } else {
              navigation.navigate("DS1", {
                holeKey: holeKey,
                holeName: holeName,
                itemInfo: item,
              });
            }
          }}
        ></Button>
      </HStack>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <TitleField name={depthName} lib="FontAwesome" iconName="level-down" />

        <Text style={styles.fromToText}>{depthString}</Text>
        <TitleField name={"From"} />
        <TextInput
          style={styles.inputText}
          label=" "
          variant="standard"
          keyboardType="decimal-pad"
          blurOnSubmit={true}
          // value={fromDepthField ? fromDepthField.toString() : ""}
          value={fromDepthField.toString()}
          //onChangeText={setFromDepthField}
          onChangeText={(fromDepthField) => setFromDepthField(fromDepthField)}
        />
        <TitleField name={"To"} />

        <TextInput
          style={styles.inputText}
          label=" "
          variant="standard"
          keyboardType="decimal-pad"
          value={toDepthField ? toDepthField.toString() : ""}
          onChangeText={setToDepthField}
        />

        <TitleField name={TypeName} lib="Feather" iconName="type" />
        <View style={styles.buttonStyleContainer}>
          <TouchableOpacity
            style={isRock ? styles.selectedButton : styles.unselectButton}
            onPress={() => {
              setIsRock(true);
              setIsSoil(false);
              setTypeField("Rock");
            }}
          >
            <Text>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={isSoil ? styles.selectedButton : styles.unselectButton}
            onPress={() => {
              setIsRock(false);
              setIsSoil(true);
              setTypeField("Soil");
            }}
          >
            <Text>Soil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              !(isRock || isSoil)
                ? styles.selectedButton
                : styles.unselectButton
            }
            onPress={() => {
              setIsRock(false);
              setIsSoil(false);
              setTypeField("Other");
            }}
          >
            <Text>Other</Text>
          </TouchableOpacity>
        </View>
      </View>
      <UiltList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  fromToText: {
    marginLeft: 20,
    padding: 20,
  },

  inputText: {
    marginLeft: 20,
  },
  FTText: {
    marginTop: 20,
    marginLeft: 20,
  },
  FTinputText: {
    marginLeft: 20,
  },
  autocompleteViewContainer: {
    padding: 16,
  },

  mainContainer: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  buttonStyleContainer: {
    //flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
  },
  tabSelector: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  dateField: {
    marginTop: 60,
  },
  selectedButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6e3b6e",
    // marginHorizontal: 20,
    // marginTop: 20,
    padding: 10,
  },
  unselectButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",

    padding: 10,
  },
});
