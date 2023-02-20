import React from "react";

import { StyleSheet, SafeAreaView } from "react-native";

//Conponent
import { HomeUiltList } from "../Components/Home/UiltList";
import { HomeHeader } from "../Components/Home/Header";
import { ProjectLists } from "../Components/Home/ProjectList";

import { Project } from "../models";

//Function
import { insertSampleData } from "../Function/insertSampleData";
import { deleteAllData } from "../Function/deleteData";

export default function HomeScreenDetail() {
  console.log("-----------------------PlayGround Start-----------------------");
  //insertSampleData();
  //deleteAllData(Project);

  console.log("-----------------------PlayGround End-----------------------");

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <ProjectLists />
        <HomeUiltList />
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
