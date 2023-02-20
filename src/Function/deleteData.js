import { DataStore } from "@aws-amplify/datastore";
import { resultDeleteMsg } from "../Components/ResultMsg";
import { Predicates } from "@aws-amplify/datastore";

export async function deleteData(table, ID) {
  const todelete = await DataStore.query(table, ID);
  try {
    await DataStore.delete(todelete);
    //resultDeleteMsg(true);
    //console.log("Deleted data");
  } catch (e) {
    //console.log(`Delete failed: ${e}`);
    //  resultDeleteMsg(false);
  }
}

export async function deleteAllData(table) {
  try {
    await DataStore.delete(table, Predicates.ALL);
    //console.log("Delete all data");
    //resultDeleteMsg(true);
  } catch (e) {
    console.log(`Delete failed: ${e}`);
    //  resultDeleteMsg(false);
  }
}
