import { Project, Hole, Depth } from "../models";
import { DataStore } from "@aws-amplify/datastore";
//import { resultSaveMsg, resultUpdateMsg } from "../Components/ResultMsg";
import {
  getSampleProjectData,
  getSampleHoleData,
  getSampleDephtData,
} from "../data/Sample";

export const checkSame = async (table, item) => {
  let sameItem = null;
  if (item.project) {
    //console.log("in pj");
    sameItem = await DataStore.query(table, (a) =>
      a.project("eq", item.project)
    );
  }
  if (item.hole) {
    sameItem = await DataStore.query(
      table,
      (a) => a.hole("eq", item.hole) && a.projectID("eq", item.projectID)
    );
  }
  // if (item.toDepthLv) {
  //   sameItem = await DataStore.query(
  //     table,
  //     (a) =>
  //       a.fromDepthLv("eq", item.fromDepthLv) &&
  //       a.toDepthLv("eq", item.toDepthLv)
  //   );
  // }

  if (!item.id && sameItem.length > 0) {
    return false;
  }

  return true;
};
