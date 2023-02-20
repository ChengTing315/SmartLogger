import React, { useState, useEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
//React Native Material
import { Button, Text, HStack, TextInput } from "@react-native-material/core";

import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import { TitleField } from "../Components/TitleField";

import { checkType } from "../utils/checkType";
//Data
import { getRockCode } from "../Function/getRockCode";
import {
  getPrincipalSoilTypeData,
  getDecompositionGradeData,
  getRockName,
  getAdditionalConstituentData1,
  getAdditionalConstituentData2,
  getSoilClassificationData,
} from "../data/DS2";
//Util

export default function DS2ScreenDetail({ navigation, route }) {
  let depthInfo = null;
  let sTypeIndex = null;

  let holeKey = null;
  let holeName = null;
  if (route.params.holeKey) {
    holeKey = route.params.holeKey;
    holeName = route.params.holeName;
    depthInfo = route.params.itemInfo;
    console.log("depthInfo =" + JSON.stringify(depthInfo));

    if (depthInfo) {
      //console.log("DS2 depthInfo =" + JSON.stringify(depthInfo));
      sTypeIndex = depthInfo.typeIndex;
    } else {
      // depthInfo = initDate;
    }
  }

  //Common
  const disCountinuitiesName = "Discountinuities";
  const agInfoName = "Additional Geological Information";
  const legendCodeName = "Legend Code";

  //Rock
  const rockNameName = "Rock Name";
  const decompositionGradeName = "Decomposition Grade";

  //Soil
  const principalSoilTypeName = "Principal Soil Type";
  const MSCName = "Munsell Soil Colour";
  const additionalConstituentName = "Additional Constituent";
  const soilClassificationName = "Soil Classification";

  const [rockNameField, setRockNameField] = useState(depthInfo["rockName"]);
  const [decompositionGradeField, setDecompositionGradeField] = useState(
    depthInfo["decompositionGrade"]
  );

  const [disCountinuitiesNameField, setDisCountinuitiesNameField] = useState(
    depthInfo["disCountinuities"]
  );
  const [agInfoNameField, setAgInfoNameField] = useState(
    depthInfo["agInfoName"]
  );
  //Soil
  const [principalSoilTypeField, setPrincipalSoilTypeField] = useState(
    depthInfo["principalSoilType"]
  );
  const [MSCField, setMSCField] = useState(depthInfo["munsellSoliColour"]);

  const [additionalConstituentField1, setAdditionalConstituentField1] =
    useState(depthInfo["additionalConstituent1"]);
  const [additionalConstituentField2, setAdditionalConstituentField2] =
    useState(depthInfo["additionalConstituent2"]);
  const [soilClassificationField, setSoilClassificationField] = useState(
    depthInfo["soilConfiscation"]
  );
  const [legendCodeField, setLegendCodeField] = useState(
    depthInfo["legendCode"]
  );

  let isRock = depthInfo.type == "Rock" ? true : false;
  let isSoil = depthInfo.type == "Soil" ? true : false;

  let theRockCode =
    decompositionGradeField && rockNameField
      ? getRockCode(decompositionGradeField.title, rockNameField.title)
      : "";

  const setParamsSoil = (depthInfo) => {
    checkNsetField("principalSoilType", principalSoilTypeField);
    depthInfo["munsellSoliColour"] = MSCField;
    checkNsetField("additionalConstituent1", additionalConstituentField1);
    checkNsetField("additionalConstituent2", additionalConstituentField2);
    checkNsetField("soilClassification", soilClassificationField);
    //checkNsetField("legendCode", legendCodeField);
    const item = { ...depthInfo };

    return item;
  };

  const setParamsRock = (depthInfo) => {
    checkNsetField("decompositionGrade", decompositionGradeField);
    checkNsetField("rockName", rockNameField);

    if (decompositionGradeField && rockNameField) {
      depthInfo["rockCode"] = getRockCode(
        decompositionGradeField.title,
        rockNameField.title
      );
    }
    depthInfo["disCountinuities"] = disCountinuitiesNameField;
    depthInfo["agInfoName"] = agInfoNameField;
    //checkNsetField("legendCode", legendCodeField);

    const item = { ...depthInfo };

    return item;
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

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.titleBox}>
        <Text>Type : {isSoil ? " Soil" : isRock ? " Rock" : null}</Text>
        <Button
          title="Next"
          onPress={() => {
            depthInfo.type == "Rock"
              ? setParamsRock(depthInfo)
              : setParamsSoil(depthInfo);

            navigation.navigate("Description", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: depthInfo,
            });
          }}
        ></Button>
      </View>
      {isRock ? (
        <Text style={styles.rightText}>rockCode : {theRockCode}</Text>
      ) : null}
      {isSoil ? (
        <View style={Platform.select({ ios: { zIndex: 11 } })}>
          <TitleField name={principalSoilTypeName} />
          {/* </View> */}
          <View style={styles.autocompleteViewContainer}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: principalSoilTypeField }}
              onSelectItem={setPrincipalSoilTypeField}
              dataSet={getPrincipalSoilTypeData()}
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
        </View>
      ) : null}
      {isSoil ? (
        <View>
          <TitleField name={MSCName} />
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            value={MSCField}
            onChangeText={setMSCField}
          />
        </View>
      ) : null}
      {isRock ? (
        <View style={Platform.select({ ios: { zIndex: 10 } })}>
          <TitleField name={decompositionGradeName} />
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: decompositionGradeField }}
            onSelectItem={setDecompositionGradeField}
            dataSet={getDecompositionGradeData()}
          />
        </View>
      ) : isSoil ? (
        <React.Fragment>
          <View style={[Platform.select({ ios: { zIndex: 10 } })]}>
            <TitleField name={additionalConstituentName} />

            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: additionalConstituentField1 }}
              onSelectItem={setAdditionalConstituentField1}
              dataSet={getAdditionalConstituentData1()}
            />
          </View>
          <View style={[Platform.select({ ios: { zIndex: 9 } })]}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: additionalConstituentField2 }}
              onSelectItem={setAdditionalConstituentField2}
              dataSet={getAdditionalConstituentData2()}
            />
          </View>
        </React.Fragment>
      ) : null}
      {isRock ? (
        <View style={Platform.select({ ios: { zIndex: 8 } })}>
          <TitleField name={rockNameName} />
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            //onBlur={setRockCode()}
            // controller={setRockCode(
            //   getRockCode(decompositionGradeField.title, rockNameField.title)
            // )}
            initialValue={{ id: rockNameField }}
            onSelectItem={setRockNameField}
            dataSet={getRockName()}
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
      ) : isSoil ? (
        <View style={Platform.select({ ios: { zIndex: 8 } })}>
          <TitleField name={soilClassificationName} />
          <View>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: soilClassificationField }}
              onSelectItem={setSoilClassificationField}
              dataSet={getSoilClassificationData()}
              direction={"down"}
              // suggestionsListContainerStyle={Platform.select({
              //   ios: { height: 75, width: 10000 },
              // })}
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
        </View>
      ) : null}
      {isRock ? (
        <View style={styles.autocompleteViewContainer}>
          <TitleField name={disCountinuitiesName} />
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            value={disCountinuitiesNameField}
            onChangeText={setDisCountinuitiesNameField}
          />
          <TitleField name={agInfoName} />
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            value={agInfoNameField}
            onChangeText={setAgInfoNameField}
          />
        </View>
      ) : null}
      {/* <TitleField name={legendCodeName} />
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
        dataSet={getLegendCode()}
        textInputProps={{
          autoCorrect: false,
          autoCapitalize: "none",
          style: {
            borderRadius: 25,
            paddingLeft: 18,
          },
        }}
      /> */}

      {/* <HStack marginTop={100} spacing={4} alignItems="flex-end">
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
       
        <Button
          title="Next"
          onPress={() => {
            depthInfo.type == "Rock"
              ? setParamsRock(depthInfo)
              : setParamsSoil(depthInfo);

            navigation.navigate("Description", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: depthInfo,
            });
          }}
        ></Button>
      </HStack> */}
    </KeyboardAvoidingView>
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
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
