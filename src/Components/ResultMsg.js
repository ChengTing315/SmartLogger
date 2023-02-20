import { Alert } from "react-native";

export function resultAGSmsg(success) {
  if (success) {
    Alert.alert("Success ", "Output AGS File Successfully", [{ text: "OK" }]);
  } else {
    Alert.alert("Error ", "Output AGS File Error", [{ text: "OK" }]);
  }
}

export function resultSaveMsg(success) {
  if (success) {
    Alert.alert("Success ", "Data Saved successfully", [{ text: "OK" }]);
  } else {
    Alert.alert("Error ", "Data Saved Error", [{ text: "OK" }]);
  }
}

export function resultUpdateMsg(success) {
  if (success) {
    Alert.alert("Success ", "Data Updated successfully", [{ text: "OK" }]);
  } else {
    Alert.alert("Error ", "Data Updated Error", [{ text: "OK" }]);
  }
}

export function resultDeleteMsg(success) {
  if (success) {
    Alert.alert("Success ", "Data Delete successfully", [{ text: "OK" }]);
  } else {
    Alert.alert("Error ", "Data Delete Error", [{ text: "OK" }]);
  }
}

export function resultDNoLegendCodeMsg() {
  Alert.alert("Error ", "Please input Legend Code", [{ text: "OK" }]);
}

export function resultDupMsg() {
  Alert.alert("Error ", "The item is already exist", [{ text: "OK" }]);
}

export function createPJMsg(item) {
  Alert.alert("Success ", `${item} is created`, [{ text: "OK" }]);
}
