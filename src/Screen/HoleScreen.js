import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
//Component
import { HoleLists } from "../Components/Hole/HoleList";
import { HoleUiltList } from "../Components/Hole/UiltList";

export default function DepthScreenDetail({ navigation, route }) {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <HoleLists params={route.params} />
        <HoleUiltList />
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
