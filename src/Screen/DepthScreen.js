import { ConsoleLogger } from "@aws-amplify/core";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

//Component
import { DepthLists } from "../Components/Depth/DepthList";
import { DepthUiltList } from "../Components/Depth/UiltList";

export default function DepthScreenDetail({ navigation, route }) {
  console.log(JSON.stringify(route.params));
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <DepthLists params={route.params} />
        <DepthUiltList />
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
