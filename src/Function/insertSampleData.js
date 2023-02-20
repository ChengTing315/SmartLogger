import { Project, Hole, Depth } from "../models";
import { DataStore } from "@aws-amplify/datastore";
//import { resultSaveMsg, resultUpdateMsg } from "../Components/ResultMsg";
import {
  getSampleProjectData,
  getSampleHoleData,
  getSampleDephtData,
} from "../data/Sample";

function getProjectName() {
  const projectName = getSampleProjectData().project;
  return projectName;
}

async function getProjectID() {
  const projectName = getProjectName();
  const projectItem = await DataStore.query(Project);
  const selectedProjectItem = Object.values(
    Object.filter(projectItem, (item) => item.project == projectName)
  );

  const selectedProjectItemID = selectedProjectItem[0].id;

  return selectedProjectItemID;
}

async function getHoleList() {
  let tempArray = [];
  const projectID = await getProjectID(getProjectName());
  const holeItem = await DataStore.query(Hole);
  //   console.log("projectID = " + JSON.stringify(projectID));
  //   console.log("holeItem = " + JSON.stringify(holeItem));
  const selectedHoleItem = Object.values(
    Object.filter(holeItem, (item) => item.projectID == projectID)
  );

  //console.log("selectedHoleItem = " + JSON.stringify(selectedHoleItem));

  for (let i = 0; i < selectedHoleItem.length; i++) {
    tempArray.push(selectedHoleItem[i]);
  }
  return tempArray;
}

async function insertProjectData() {
  const projectData = getSampleProjectData();
  await insertData(Project, projectData);
}

async function insertHoleData() {
  const projectID = await getProjectID(getProjectName());
  const holeData = getSampleHoleData(projectID);
  for (let i = 0; i < holeData.length; i++) {
    await insertData(Hole, holeData[i]);
  }
}

async function insertDephtData() {
  const holeList = await getHoleList();

  for (let i = 0; i < holeList.length; i++) {
    const holeID = holeList[i].id;
    const dephtData = getSampleDephtData(holeID);
    // console.log("holeID = " + JSON.stringify(holeID));
    //console.log("dephtData = " + JSON.stringify(dephtData));

    for (let j = 0; j < dephtData.length; j++) {
      if (holeList[i].hole == dephtData[j].holeName) {
        await insertData(Depth, dephtData[j]);
      }
    }
  }
}

async function insertData(table, value) {
  try {
    // console.log(
    //   "DataStoreSave - JSON.stringify(value) =" + JSON.stringify(value)
    // );

    if (!value.id && value) {
      console.log("in save");
      try {
        await DataStore.save(new table(value));
      } catch (e) {
        console.log("in save error = " + e);
      }
    } else {
      //   console.log("in update");
      //   const original = await DataStore.query(table, value.id);
      //   try {
      //     await DataStore.save(
      //       table.copyOf(original, (updated) => {
      //         Object.assign(updated, value);
      //         //updated = { value };
      //         //updated.project = value.project;
      //       })
      //     );
      //     // resultUpdateMsg(true);
      //   } catch (e) {
      //     //resultUpdateMsg(false);
      //   }
    }
  } catch (e) {
    console.log("storeDataJson error =" + e);
  }
}

async function startInsert() {
  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  //const projectName = getProjectName();
  await insertProjectData();
  await insertHoleData();
  await insertDephtData();
  console.log("---------insert end-----------");
}

export const insertSampleData = () => {
  startInsert();
};
