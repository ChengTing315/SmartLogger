import { Project } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { resultSaveMsg, resultUpdateMsg } from "../Components/ResultMsg";
import { Hole } from "../models";

export const DataStoreSave = async (table, value) => {
  try {
    "DataStoreSave - JSON.stringify(value) =" + JSON.stringify(value);

    if (!value.id && value) {
      console.log("in save");

      try {
        await DataStore.save(new table(value));
        //resultSaveMsg(true);
      } catch (e) {
        console.log(e);
        //resultSaveMsg(false);
      }
    } else {
      console.log("in update");
      const original = await DataStore.query(table, value.id);
      try {
        await DataStore.save(
          table.copyOf(original, (updated) => {
            Object.assign(updated, value);
            //updated = { value };
            //updated.project = value.project;
          })
        );
        //resultUpdateMsg(true);
      } catch (e) {
        //resultUpdateMsg(false);
      }
    }
  } catch (e) {
    console.log("storeDataJson error =" + e);
  }
};

export const DataStoreSaveHoleDL = async (holdID, value) => {
  try {
    // console.log("DataStoreSave - key =" + key);
    //console.log("in DataStoreSaveHoleDL");

    //console.log("hole =" + hole);
    const original = await DataStore.query(Hole, holdID);
    //console.log("original.depthLevel = " + original.depthLevel);
    //console.log("value.toDepthLv = " + value.toDepthLv);

    await DataStore.save(
      Hole.copyOf(original, (updated) => {
        updated.depthLevel = value.toDepthLv;
        //console.log("after updated.depthLevel = " + updated.depthLevel);
      })
    );
  } catch (e) {
    // saving error
    console.log("storeDataJson error =" + e);
  }
};
