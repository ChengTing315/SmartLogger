import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";

//React Native Material
import { Button, Text, HStack, TextInput } from "@react-native-material/core";
import { Dropdown } from "react-native-element-dropdown";

//React Naitve
import DateTimePicker from "@react-native-community/datetimepicker";
// import DatePicker from "react-native-date-picker";

//Model
import { Hole } from "../models";
//Util
import moment from "moment";
import { DataStoreSaveHole } from "../Function/DataStoreSaveHole";
import { DataStoreSave } from "../Function/DataStoreSave";

//Component
import { TitleField } from "../Components/TitleField";
import { renderDropdown } from "../Components/Dropdown";
import { resultDupMsg, resultSaveMsg } from "../Components/ResultMsg";

//Data
import { getMethodData, getFlushingMediumData } from "../data/GenernalInfo";
import { DataStore } from "aws-amplify";

//Function
import { checkSame } from "../Function/checkSame";

export default function GeneralInfoScreenDetail({ navigation, route }) {
  let initDate = {
    hole: "",
    method: "",
    machineNno: "",
    flushingMedium: "",
    coOrdinatesE: "",
    coOrdinatesN: "",
    orientation: "",
    // taskOrderNo: "",
    groundLevel: "",
    loggedBy: "",
    loggingDate: "",
    depthLevel: "",
  };
  let routeParmsItem = null;

  if (route.params.itemInfo) {
    routeParmsItem = route.params.itemInfo;
    //console.log("routeParmsItem =" + JSON.stringify(routeParmsItem));
  } else {
    route["params"]["itemInfo"] = initDate;
    routeParmsItem = route["params"]["itemInfo"];
  }

  let projectKey = route.params.projectKey;
  let haveHoleID = routeParmsItem.hasOwnProperty("id");

  //Static content
  const holeName = "Hole No.";
  const methodName = "Method";
  const machineNnoName = "Machine & NO.";
  const flushingMeduimName = "Flushing Medium";
  const coOrdinatesEName = "Co-Ordinates - E";
  const coOrdinatesNName = "Co-Ordinates - N";
  const orientationName = "Orientation";
  // const taskOrderNoName = "Task Order No.";
  const textDateName = "Date :";
  const groundLevelName = "Ground Level (mPD)";
  const logByName = "Logged by";
  const loggingDateName = "Logging Date";

  const [holeField, setHoleField] = useState(routeParmsItem["hole"]);
  const [methodField, setMethodField] = useState(routeParmsItem["method"]);
  const [machineNnoField, setMachineNnoField] = useState(
    routeParmsItem["machineNno"]
  );
  const [flushingMediumField, setFlushingMediumField] = useState(
    routeParmsItem["flushingMedium"]
  );
  const [coOrdinatesEField, setCoOrdinatesEField] = useState(
    routeParmsItem["coOrdinatesE"]
  );
  const [coOrdinatesNField, setCoOrdinatesNField] = useState(
    routeParmsItem["coOrdinatesN"]
  );
  const [orientationField, setOrientationField] = useState(
    routeParmsItem["orientation"]
  );
  // const [taskOrderNoField, setTaskOrderField] = useState(
  //   routeParmsItem["taskOrderNo"]
  // );
  const [groundLevelField, setGroundLevelField] = useState(
    routeParmsItem["groundLevel"]
  );
  const [loggedByField, setLoggedByField] = useState(
    routeParmsItem["loggedBy"]
  );
  //Date

  const [projectStartDateField, setStartDateField] = useState(
    routeParmsItem.projectStartDate
      ? new Date(routeParmsItem.projectStartDate)
      : new Date(1598051730000)
  );
  const [projectEndDateField, setprojectEndDateField] = useState(
    routeParmsItem.projectEndDate
      ? new Date(routeParmsItem.projectEndDate)
      : new Date(1598051730000)
  );
  const [loggingDateField, setLoggingDateField] = useState(
    routeParmsItem["loggingDate"]
      ? new Date(routeParmsItem.loggingDate)
      : new Date(1598051730000)
  );

  //Date picker
  const [mode, setMode] = useState("date");
  const [showTheCalendar, setShowTheCalendar] = useState(false);
  const [isStartDate, setIsStartDate] = useState(false);
  const [isprojectEndDate, setIsprojectEndDate] = useState(false);
  const [isLogDate, setIsLogDate] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowTheCalendar(Platform.OS === "ios");
    setStartDateField(selectedDate);
    setIsStartDate(false);
  };

  const onChangeEnd = (event, selectedDate) => {
    //console.log("selectedDate =" + selectedDate);
    setShowTheCalendar(Platform.OS === "ios");
    setprojectEndDateField(selectedDate);
    setIsprojectEndDate(false);
  };
  const onChangeLog = (event, selectedDate) => {
    setShowTheCalendar(Platform.OS === "ios");
    setLoggingDateField(selectedDate);
    setIsLogDate(false);
  };

  const showDatepicker = (date) => {
    setShowTheCalendar(true);
    setMode("date");
    if (date == "start") {
      setIsStartDate(true);
    }
    if (date == "end") {
      setIsprojectEndDate(true);
    }
    if (date == "log") {
      setIsLogDate(true);
    }
  };

  const setParams = (routeParmsItem) => {
    let item = { ...routeParmsItem };
    item["hole"] = holeField;
    (item["depthLevel"] = routeParmsItem.depthLevel
      ? routeParmsItem.depthLevel
      : null),
      (item["method"] = methodField);
    item["machineNno"] = machineNnoField;
    item["flushingMedium"] = flushingMediumField;

    item["coOrdinatesE"] = parseFloat(coOrdinatesEField);
    item["coOrdinatesN"] = parseFloat(coOrdinatesNField);
    item["orientation"] = orientationField;
    // item["taskOrderNo"] = taskOrderNoField;
    item["projectStartDate"] = moment(projectStartDateField).format(
      "YYYY-MM-DD"
    );
    item["projectEndDate"] = moment(projectEndDateField).format("YYYY-MM-DD");
    item["groundLevel"] = parseFloat(groundLevelField);
    item["loggedBy"] = loggedByField;
    item["loggingDate"] = moment(loggingDateField).format("YYYY-MM-DD");
    item["projectID"] = projectKey;
    //console.log("set Params item =" + JSON.stringify(item));

    return item;
  };

  const UiltList = () => {
    return (
      <HStack marginTop={20} spacing={4} alignItems="flex-end">
        <Button title="Back" onPress={() => navigation.goBack()}></Button>
        <Button
          title="Save"
          onPress={async () => {
            try {
              let item = setParams(routeParmsItem);

              const NoSameItem = await checkSame(Hole, item);
              if (NoSameItem) {
                DataStoreSave(Hole, item);
                navigation.navigate("Home");
                resultSaveMsg(true);
              } else {
                resultDupMsg();
              }
            } catch (e) {
              resultSaveMsg(false);
            }
          }}
        ></Button>
        {haveHoleID ? (
          <Button
            title="Next"
            onPress={async () => {
              let item = setParams(routeParmsItem);
              const NoSameItem = await checkSame(Hole, item);
              if (NoSameItem) {
                DataStoreSave(Hole, item);
                navigation.navigate("Depth", {
                  key: routeParmsItem.id,
                  name: routeParmsItem.hole,
                });
              } else {
                resultDupMsg();
              }
            }}
          ></Button>
        ) : null}
      </HStack>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <TitleField name={holeName} />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        value={holeField}
        onChangeText={setHoleField}
      />

      <TitleField name={methodName} lib="AntDesign" iconName="setting" />
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.shadow}
        data={getMethodData()}
        //search
        maxHeight={170}
        searchPlaceholder="Search"
        labelField="label"
        valueField="value"
        label="Dropdown"
        placeholder="Select a Method"
        placeholderStyle={styles.placeholderTextStyle}
        value={methodField}
        onChange={(item) => {
          setMethodField(item.value);
        }}
        renderItem={(item) => renderDropdown(item)}
        textError="Error"
      />
      <TitleField
        name={machineNnoName}
        lib="MaterialCommunityIcons"
        iconName="screw-machine-flat-top"
      />

      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        value={machineNnoField}
        onChangeText={setMachineNnoField}
      />
      <TitleField
        name={flushingMeduimName}
        lib="FontAwesome5"
        iconName="prescription-bottle-alt"
      />
      <View>
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={getFlushingMediumData()}
          maxHeight={170}
          searchPlaceholder="Search"
          labelField="label"
          valueField="value"
          label="Dropdown"
          placeholder="Select a Flushing Medium"
          placeholderStyle={styles.placeholderTextStyle}
          value={flushingMediumField}
          onChange={(item) => {
            setFlushingMediumField(item.value);
          }}
          renderItem={(item) => renderDropdown(item)}
          textError="Error"
        />
      </View>
      <TitleField
        name={coOrdinatesEName}
        lib="AntDesign"
        iconName="CodeSandbox"
      />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        keyboardType="decimal-pad"
        value={coOrdinatesEField ? coOrdinatesEField.toString() : ""}
        onChangeText={setCoOrdinatesEField}
      />
      <TitleField
        name={coOrdinatesNName}
        lib="AntDesign"
        iconName="CodeSandbox"
      />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        keyboardType="decimal-pad"
        value={coOrdinatesNField ? coOrdinatesNField.toString() : ""}
        onChangeText={setCoOrdinatesNField}
      />
      <TitleField
        name={orientationName}
        lib="FontAwesome5"
        iconName="expand-arrows-alt"
      />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        value={orientationField}
        onChangeText={setOrientationField}
      />

      <TitleField
        name={textDateName}
        lib="MaterialIcons"
        iconName="date-range"
      />
      <View>
        <View style={styles.fieldContainer}>
          <Text>From</Text>
          <TouchableOpacity onPress={() => showDatepicker("start")}>
            <Text>
              {" "}
              {moment(projectStartDateField)
                .subtract(0, "days")
                .calendar()}{" "}
            </Text>
          </TouchableOpacity>

          <Text>To</Text>
          <TouchableOpacity onPress={() => showDatepicker("end")}>
            <Text>
              {" "}
              {moment(projectEndDateField).subtract(0, "days").calendar()}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        {showTheCalendar && isStartDate && (
          <View>
            <DateTimePicker
              testID="dateTimePicker"
              value={projectStartDateField}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeStart}
            />
          </View>
        )}
        {showTheCalendar && isprojectEndDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={projectEndDateField}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>
      <TitleField
        name={groundLevelName}
        lib="FontAwesome"
        iconName="level-down"
      />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        keyboardType="decimal-pad"
        value={groundLevelField ? groundLevelField.toString() : ""}
        onChangeText={setGroundLevelField}
      />
      <TitleField name={logByName} />
      <TextInput
        style={styles.inputText}
        label=" "
        variant="standard"
        value={loggedByField}
        onChangeText={setLoggedByField}
      />
      <View>
        <TitleField name={loggingDateName} />
        <TouchableOpacity onPress={() => showDatepicker("log")}>
          <Text style={styles.logdate}>
            {" "}
            {moment(loggingDateField).subtract(0, "days").calendar()}{" "}
          </Text>
        </TouchableOpacity>

        {showTheCalendar && isLogDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={loggingDateField}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeLog}
          />
        )}
      </View>
      <UiltList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  fieldContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  inputText: {
    marginLeft: 20,
  },
  dropdown: {
    marginTop: 20,
    marginLeft: 20,
  },

  placeholderTextStyle: {
    color: "grey",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  logdate: {
    marginLeft: 30,
  },
});
