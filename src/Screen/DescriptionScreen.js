import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
//React Native Material
import { Button, Text, HStack } from "@react-native-material/core";

import { TitleField } from "../Components/TitleField";
import { checkType } from "../utils/checkType";
import { DataStoreSaveDepth } from "../Function/DataStoreSaveDepth";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import { getLegendCode } from "../data/LegendCode";
//Util
// import * as ImagePicker from "expo-image-picker";
// import * as MailComposer from "expo-mail-composer";
import {
  resultAGSmsg,
  resultDNoLegendCodeMsg,
  resultSaveMsg,
} from "../Components/ResultMsg";

export default function DescriptionScreenDetail({ navigation, route }) {
  let depthInfo = null;
  let holeKey = null;
  let holeName = null;

  console.log("route " + JSON.stringify(route));

  if (route.params.holeKey) {
    holeKey = route.params.holeKey;
    holeName = route.params.holeName;
    depthInfo = route.params.itemInfo;

    if (depthInfo) {
      console.log("Descritpion depthInfo =" + JSON.stringify(depthInfo));
    } else {
    }
  }

  let content = "";

  const setContent = () => {
    depthInfo.type == "Rock"
      ? (content =
          depthInfo.strength +
          "," +
          depthInfo.valueColour +
          "," +
          depthInfo.chromaColour +
          "," +
          depthInfo.hueColour +
          "," +
          depthInfo.rockStructure +
          " " +
          depthInfo.additionalTerms +
          " " +
          depthInfo.decompositionGrade +
          " " +
          depthInfo.rockName +
          " " +
          depthInfo.rockCode +
          " " +
          depthInfo.disCountinuities +
          " " +
          depthInfo.agInfoName)
      : depthInfo.type == "Soil"
      ? (content =
          depthInfo.strength +
          "," +
          depthInfo.valueColour +
          "," +
          depthInfo.chromaColour +
          "," +
          depthInfo.hueColour +
          "," +
          depthInfo.secondaryConstituent1 +
          " " +
          depthInfo.secondaryConstituent2 +
          " " +
          depthInfo.secondaryConstituent3 +
          " " +
          depthInfo.principalSoilType +
          " " +
          depthInfo.additionalConstituent1 +
          " " +
          depthInfo.additionalConstituent2 +
          " " +
          depthInfo.soilConfiscation)
      : (content = "");

    content = content.replace(/undefined/g, "");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
    content = content.replace(/,,/g, ",");
  };

  if (depthInfo.description) {
    content = depthInfo.description;
  } else {
    setContent();
  }

  const setParams = (descriptionField) => {
    depthInfo["description"] = descriptionField;
  };

  const checkNsetField = (name, field) => {
    if (field == null) {
      field = {
        id: "",
        title: "",
      };
    } else {
    }
    checkType(field) != null
      ? (depthInfo[name] = field.id)
      : (depthInfo[name] = "");
  };

  const descriptionName = "Description";

  let isRock = depthInfo.type == "Rock" ? true : false;
  let isSoil = depthInfo.type == "Soil" ? true : false;

  //const [descriptionField, setDescriptionField] = React.useState(content);

  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
      />
    );
  };

  const UselessTextInputMultiline = () => {
    const [descriptionField, setDescriptionField] = React.useState(content);
    setParams(descriptionField);
    return (
      <View
        style={{
          //backgroundColor: descriptionValue,
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
        }}
      >
        <UselessTextInput
          //showSoftInputOnFocus={false}
          blurOnSubmit={false}
          //multiline
          numberOfLines={1}
          onChangeText={(text) => setDescriptionField(text)}
          value={descriptionField}
          style={{ padding: 10 }}
        />
      </View>
    );
  };

  //const isOther = depthInfo.type == "Other" ? true : false;
  const legendCodeName = "Legend Code";
  const [legendCodeField, setLegendCodeField] = useState(
    depthInfo["legendCode"]
  );
  const legendCode = getLegendCode();

  const depthString =
    "From " +
    String(depthInfo.fromDepthLv) +
    " To " +
    String(depthInfo.toDepthLv);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.rightText}>
        Type : {isSoil ? " Soil" : isRock ? " Rock" : "Other"}
      </Text>
      <Text style={styles.fromToText}>Depth : {depthString}</Text>

      <View style={Platform.select({ ios: { zIndex: 10 } })}>
        <TitleField name={legendCodeName} />
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          //onBlur={setRockCode()}
          // controller={setRockCode(
          //   getRockCode(decompositionGradeField.title, rockNameField.title)
          // )}
          initialValue={{ id: legendCodeField }}
          onSelectItem={setLegendCodeField}
          dataSet={legendCode}
          textInputProps={{
            autoCorrect: false,
            autoCapitalize: "none",
            style: {
              borderRadius: 25,
              paddingLeft: 18,
            },
          }}
        />
      </View>

      <TitleField name={descriptionName} />
      <UselessTextInputMultiline></UselessTextInputMultiline>

      <HStack marginTop={20} spacing={4} alignItems="flex-end">
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        <Button
          title="Finish"
          onPress={() => {
            //checkLegendCode();
            //setParams(descriptionField);

            if (legendCodeField) {
              checkNsetField("legendCode", legendCodeField);
            } else {
              resultDNoLegendCodeMsg();
              return;
            }

            DataStoreSaveDepth(depthInfo, holeKey, holeName);
            //navigation.navigate("Home");
            navigation.navigate("Depth", {
              key: holeKey,
              name: holeName,
            });
            //navigation.navigate("Home");
          }}
        ></Button>
        <Button
          title="Refresh content"
          onPress={() => {
            //let mainObject = {}
            if (depthInfo.description) {
              delete depthInfo.description;
            }
            // console.log("mainObject =" + mainObject);
            navigation.push("Description", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: depthInfo,
            });
          }}
        ></Button>
      </HStack>
    </View>
  );
}
const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },

  autocompleteViewContainer: {
    padding: 16,
  },
  inputText: {
    marginLeft: 20,
  },

  mainContainer: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  container: {
    marginTop: 20,
  },
});
