import { Hole } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { resultSaveMsg, resultUpdateMsg } from "../Components/ResultMsg";

// export const DataStoreSaveHole = async (projectID, value) => {
//   // console.log("DataStoreSave - key =" + key);
//   console.log(
//     "DataStoreSave - JSON.stringify(value) =" + JSON.stringify(value)
//   );
//   // console.log("DataStoreSave - value =" + value);
//   //console.log("DataStoreSave - projectID =" + projectID);
//   try {
//     // // console.log("DataStoreSave - key =" + key);
//     // console.log(
//     //   "DataStoreSave - JSON.stringify(value) =" + JSON.stringify(value)
//     // );
//     // // console.log("DataStoreSave - value =" + value);
//     // console.log("DataStoreSave - projectID =" + projectID);
//     const [
//       hole,
//       depthLevel,
//       method,
//       machineNno,
//       flushingMedium,
//       coOrdinatesE,
//       coOrdinatesN,
//       orientation,
//       // taskOrderNo,
//       groundLevel,
//       projectStartDate,
//       projectEndDate,
//       loggedBy,
//       loggingDate,
//     ] = [
//       value.hole,
//       value.depthLevel ? value.depthLevel : null,
//       value.method,
//       value.machineNno,
//       value.flushingMedium,
//       value.coOrdinatesE,
//       value.coOrdinatesN,
//       value.orientation,
//       // value.taskOrderNo,
//       value.groundLevel,

//       value.projectStartDate,
//       value.projectEndDate,
//       value.loggedBy,
//       value.loggingDate,
//     ];
//     if (!value.id) {
//       console.log("in save");
//       await DataStore.save(
//         new Hole({
//           hole,
//           depthLevel,
//           method,
//           machineNno,
//           flushingMedium,
//           coOrdinatesE,
//           coOrdinatesN,
//           orientation,
//           //  taskOrderNo,
//           groundLevel,
//           projectStartDate,
//           projectEndDate,
//           loggedBy,
//           loggingDate,
//           projectID,
//         })
//       );
//       //resultSaveMsg(true);
//     } else {
//       console.log("in update");
//       //console.log("hole =" + hole);
//       const original = await DataStore.query(Hole, value.id);
//       // console.log("value.id =" + value.id);
//       // console.log("hole = " + JSON.stringify(original));
//       await DataStore.save(
//         Hole.copyOf(original, (updated) => {
//           (updated.hole = hole),
//             (updated.depthLevel = depthLevel),
//             (updated.method = method),
//             (updated.machineNno = machineNno),
//             (updated.flushingMedium = flushingMedium),
//             (updated.coOrdinatesE = coOrdinatesE),
//             (updated.coOrdinatesN = coOrdinatesN),
//             (updated.orientation = orientation),
//             //(updated.taskOrderNo = taskOrderNo),
//             (updated.groundLevel = groundLevel),
//             (updated.projectStartDate = projectStartDate),
//             (updated.projectEndDate = projectEndDate),
//             (updated.loggedBy = loggedBy),
//             (updated.loggingDate = loggingDate);
//         })
//       );
//     }
//     //resultUpdateMsg(true);
//   } catch (e) {
//     // saving error
//     console.log("storeDataJson error =" + e);
//     resultUpdateMsg(false);
//   }
// };

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
