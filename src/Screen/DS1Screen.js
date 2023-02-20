import React, { useState, useReducer } from "react";
import { Alert, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
//import { ScrollView } from "react-native-virtualized-view";
//React Native Material
import { Button, Text, HStack, TextInput } from "@react-native-material/core";

import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import { TitleField } from "../Components/TitleField";
import { checkType } from "../utils/checkType";
import { DataStoreSaveDepth } from "../Function/DataStoreSaveDepth";

//Data
import {
  getRockStrengthData,
  getSoilStrengthData,
  getValueColourData,
  getChromaColourData,
  getHueColourData,
  getRockStructureData,
  getSecondaryConstituentData1,
  getSecondaryConstituentData2,
  getPrincipalSoilTypeData,
} from "../data/DS1";
import { Depth } from "../models";
import { DataStoreSave } from "../Function/DataStoreSave";

import { DS1Item } from "../Components/DS1/TestItem";

export default function DS1ScreenDetail({ navigation, route }) {
  let depthInfo = null;
  let holeKey = null;
  let holeName = null;

  if (route.params.holeKey) {
    holeKey = route.params.holeKey;
    holeName = route.params.holeName;
    depthInfo = route.params.itemInfo;

    if (depthInfo) {
      //console.log("depthInfo =" + JSON.stringify(depthInfo));
    } else {
      ("");
    }
  }

  //Common
  const strengthName = "Strength";
  const colourName = "Colour";
  const structureName = "Structure";
  const ATName = "Additional Terms";
  //const MSCName = "Munsell Soil Colour";

  //Soil
  const secondaryConstituentName = "Secondary Constituent";
  // const principalSoilTypeName = "Principal Soil Type";

  //Input
  const [strengthField, setStrengthField] = useState(depthInfo["strength"]);

  const [valueColourField, setValueColourField] = useState(
    depthInfo["valueColour"]
  );

  const [chromaColourField, setChromaColourField] = useState(
    depthInfo["chromaColour"]
  );

  const [rockStructureField, setRockStructureField] = useState(
    depthInfo["rockStructure"]
  );

  const [hueColourField, setHueColourField] = useState(depthInfo["hueColour"]);

  const [ATField, setATField] = useState(depthInfo["additionalTerms"]);

  const [secondaryConstituentField1, setSecondaryConstituentField1] = useState(
    depthInfo["secondaryConstituent1"]
  );

  const [secondaryConstituentField2, setSecondaryConstituentField2] = useState(
    depthInfo["secondaryConstituent2"]
  );
  const [secondaryConstituentField3, setSecondaryConstituentField3] = useState(
    depthInfo["secondaryConstituent3"]
  );
  // const [principalSoilTypeField, setPrincipalSoilTypeField] = useState(
  //   depthInfo["principalSoilType"]
  // );

  const setParamsSoil = (depthInfo) => {
    depthInfo["holeName"] = holeName;
    checkNsetField("strength", strengthField);
    if (!changeinput) {
      depthInfo["valueColour"] = valueColourField;
      depthInfo["chromaColour"] = chromaColourField;
      depthInfo["hueColour"] = hueColourField;
    } else {
      checkNsetField("valueColour", valueColourField);

      checkNsetField("chromaColour", chromaColourField);

      checkNsetField("hueColour", hueColourField);
    }

    checkNsetField("secondaryConstituent1", secondaryConstituentField1);
    checkNsetField("secondaryConstituent2", secondaryConstituentField2);
    checkNsetField("secondaryConstituent3", secondaryConstituentField3);
    //checkNsetField("principalSoilType", principalSoilTypeField);

    depthInfo["holeID"] = holeKey;

    const item = { ...depthInfo };

    return item;
  };

  const setParamsRock = (depthInfo) => {
    depthInfo["holeName"] = holeName;

    checkNsetField("strength", strengthField);
    if (!changeinput) {
      [
        depthInfo["valueColour"],
        depthInfo["chromaColour"],
        depthInfo["hueColour"],
      ] = [valueColourField, chromaColourField, hueColourField];
    } else {
      checkNsetField("valueColour", valueColourField);

      checkNsetField("chromaColour", chromaColourField);

      checkNsetField("hueColour", hueColourField);
    }
    checkNsetField("rockStructure", rockStructureField);

    depthInfo["additionalTerms"] = ATField;

    depthInfo["holeID"] = holeKey;
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
      ? (depthInfo[name] = field.title)
      : (depthInfo[name] = "");
  };

  const handleChangeInput = (field, setField) => {
    if (checkType(field) == "Object") {
      setField(field.title);
    }
    if (checkType(field) == "String") {
      setField(String(field));
    }
  };
  //Before return
  let isRock = depthInfo.type == "Rock" ? true : false;
  let isSoil = depthInfo.type == "Soil" ? true : false;

  const [colour1, colour2, colour3] = [
    Object.values(getValueColourData()),
    Object.values(getChromaColourData()),
    Object.values(getHueColourData()),
  ];

  let [isHaveValue, isHaveChroma, isHaveHue, isChangeInput] = [null];

  const checkHaveValue = (value) => {
    value.forEach((data) => {
      switch (data.id) {
        case depthInfo.valueColour:
          isHaveValue = true;
          break;
        case depthInfo.chromaColour:
          isHaveChroma = true;
          break;
        case depthInfo.hueColour:
          isHaveHue = true;
          break;
      }
    });
  };

  [colour1, colour2, colour3].forEach(checkHaveValue);
  isHaveValue && isHaveChroma && isHaveHue
    ? (isChangeInput = true)
    : (isChangeInput = false);
  !depthInfo.valueColour && !depthInfo.chromaColour && !depthInfo.hueColour
    ? (isChangeInput = true)
    : "";

  const [changeinput, setChangeinput] = useState(isChangeInput);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleBox}>
        <Text>Type : {isSoil ? " Soil" : isRock ? " Rock" : null}</Text>
        <Button
          title="Next"
          onPress={() => {
            depthInfo.type == "Rock"
              ? setParamsRock(depthInfo)
              : setParamsSoil(depthInfo);

            navigation.navigate("DS2", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: depthInfo,
            });
          }}
        ></Button>
      </View>
      <Text>Depth : {depthInfo.depthLv ? depthInfo.depthLv : null}</Text>

      <TitleField name={strengthName} />
      {/* <View style={styles.autocompleteViewContainer}> */}
      {isRock ? (
        <View style={Platform.select({ ios: { zIndex: 10 } })}>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: strengthField }}
            onSelectItem={setStrengthField}
            dataSet={getRockStrengthData()}
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
      ) : (
        <View style={Platform.select({ ios: { zIndex: 10 } })}>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: strengthField }}
            onSelectItem={setStrengthField}
            dataSet={getSoilStrengthData()}
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
      )}
      {/* </View> */}
      <View>
        <TitleField name={colourName} />
        <Button
          title={changeinput ? "Custom" : "Default"}
          onPress={() => {
            handleChangeInput(valueColourField, setValueColourField);
            handleChangeInput(chromaColourField, setChromaColourField);
            handleChangeInput(hueColourField, setHueColourField);
            setChangeinput(!changeinput);
          }}
        ></Button>
      </View>
      {changeinput === true ? (
        <>
          <View style={Platform.select({ ios: { zIndex: 9 } })}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: valueColourField }}
              onSelectItem={setValueColourField}
              dataSet={getValueColourData()}
              textInputProps={{
                placeholder: "Value",
                autoCorrect: false,
                autoCapitalize: "none",
                style: {
                  borderRadius: 25,
                  paddingLeft: 18,
                },
              }}
            />
          </View>
          <View style={Platform.select({ ios: { zIndex: 8 } })}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: chromaColourField }}
              onSelectItem={setChromaColourField}
              dataSet={getChromaColourData()}
              textInputProps={{
                placeholder: "Chroma",
                autoCorrect: false,
                autoCapitalize: "none",
                style: {
                  borderRadius: 25,
                  //backgroundColor: "#383b42",
                  //color: "#fff",
                  paddingLeft: 18,
                },
              }}
            />
          </View>
          <View style={Platform.select({ ios: { zIndex: 7 } })}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              initialValue={{ id: hueColourField }}
              onSelectItem={setHueColourField}
              dataSet={getHueColourData()}
              textInputProps={{
                placeholder: "Hue",
                autoCorrect: false,
                autoCapitalize: "none",
                style: {
                  borderRadius: 25,
                  //backgroundColor: "#383b42",
                  //color: "#fff",
                  paddingLeft: 18,
                },
              }}
            />
          </View>
        </>
      ) : (
        <View>
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            placeholder="Value"
            value={valueColourField}
            onChangeText={setValueColourField}
          />
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            placeholder="Chroma"
            value={chromaColourField}
            onChangeText={setChromaColourField}
          />
          <TextInput
            style={styles.inputText}
            label=" "
            variant="standard"
            placeholder="Hue"
            value={hueColourField}
            onChangeText={setHueColourField}
          />
        </View>
      )}

      {isRock ? (
        <View style={Platform.select({ ios: { zIndex: 6 } })}>
          <TitleField name={structureName} />
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: rockStructureField }}
            onSelectItem={setRockStructureField}
            dataSet={getRockStructureData()}
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
        <View>
          <TitleField name={secondaryConstituentName} />
          <View style={styles.autocompleteViewContainer}>
            <View style={Platform.select({ ios: { zIndex: 5 } })}>
              <AutocompleteDropdown
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={false}
                initialValue={{ id: secondaryConstituentField1 }}
                onSelectItem={setSecondaryConstituentField1}
                dataSet={getSecondaryConstituentData1()}
                // suggestionsListContainerStyle={{
                //   height: 50,
                //   width: 10000,
                //   // style: {
                //   //   borderRadius: 25,
                //   //   paddingLeft: 18,
                //   // },
                // }}
                direction={Platform.select({ ios: "down" })}
                textInputProps={{
                  placeholder: "Slightly/Very",
                  autoCorrect: false,
                  autoCapitalize: "none",
                  style: {
                    borderRadius: 25,
                    paddingLeft: 18,
                  },
                }}
              />
            </View>
            <View style={Platform.select({ ios: { zIndex: 4 } })}>
              <AutocompleteDropdown
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={false}
                initialValue={{ id: secondaryConstituentField2 }}
                onSelectItem={setSecondaryConstituentField2}
                dataSet={getSecondaryConstituentData2()}
                suggestionsListContainerStyle={Platform.select({
                  ios: { height: 100, width: 10000 },
                })}
                // onOpenSuggestionsList={() => (101)}
                direction="down"
                textInputProps={{
                  placeholder: "Slity/Clayey etc.",
                  autoCorrect: false,
                  autoCapitalize: "none",
                  style: {
                    borderRadius: 25,
                    paddingLeft: 18,
                  },
                }}
              />
            </View>
            <View style={Platform.select({ ios: { zIndex: 3 } })}>
              <AutocompleteDropdown
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={false}
                initialValue={{ id: secondaryConstituentField3 }}
                onSelectItem={setSecondaryConstituentField3}
                dataSet={getSecondaryConstituentData2()}
                direction={Platform.select({ ios: "down" })}
                suggestionsListContainerStyle={Platform.select({
                  ios: { height: 100, width: 10000 },
                })}
                textInputProps={{
                  placeholder: "Slity/Clayey etc.",
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
        </View>
      ) : null}
      <View>
        {isRock ? (
          <View>
            <TitleField name={ATName} />
            <TextInput
              style={styles.inputText}
              label=" "
              variant="standard"
              value={ATField}
              onChangeText={setATField}
            />
          </View>
        ) : // ) : isSoil ? (
        //   <React.Fragment>
        //     <View style={Platform.select({ ios: { zIndex: 2 } })}>
        //       <TitleField name={principalSoilTypeName} />
        //       {/* </View> */}
        //       <View style={styles.autocompleteViewContainer}>
        //         <AutocompleteDropdown
        //           clearOnFocus={false}
        //           closeOnBlur={true}
        //           closeOnSubmit={false}
        //           initialValue={{ id: principalSoilTypeField }}
        //           onSelectItem={setPrincipalSoilTypeField}
        //           dataSet={getPrincipalSoilTypeData()}
        //           textInputProps={{
        //             autoCorrect: false,
        //             autoCapitalize: "none",
        //             style: {
        //               borderRadius: 25,

        //               paddingLeft: 18,
        //             },
        //           }}
        //         />
        //       </View>
        //     </View>
        //   </React.Fragment>
        // ) : // </View>
        null}
        {/* {isRock ? (
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
          ) : null} */}
      </View>

      {/* <HStack
        marginTop={100}
        justify="start"
        spacing={4}
        alignItems="flex-end"
        // style={Platform.select({ ios: { zIndex: 1 } })}
      >
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        <Button
          title="Next"
          onPress={() => {
            depthInfo.type == "Rock"
              ? setParamsRock(depthInfo)
              : setParamsSoil(depthInfo);

            navigation.navigate("DS2", {
              holeKey: holeKey,
              holeName: holeName,
              itemInfo: depthInfo,
            });
          }}
        ></Button>
      </HStack> */}
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
  },

  autocompleteViewContainer: {
    padding: 5,
  },

  mainContainer: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  inputText: {
    marginLeft: 20,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
