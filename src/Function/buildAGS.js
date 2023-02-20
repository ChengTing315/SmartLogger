import { DataStore } from "aws-amplify";
import { Project, Hole, Depth } from "../models";

export async function buildPROJ(projectItem) {
  //console.log("start build PROJ");

  const groupField = '"GROUP"' + "," + '"' + "PROJ" + '"';
  const headerField =
    '"HEADING","PROJ_ID","PROJ_NAME","PROJ_LOC","PROJ_CLNT","PROJ_CONT","PROJ_ENG","PROJ_MEMO","FILE_FSET","PROJ_OFFC"';
  const unitField = '"UNIT","","","","","","","","",""';
  const typeField = '"TYPE","X","X","X","X","X","X","X","X","U"';
  let dataField = "";

  for (let i = 0; i < projectItem.length; i++) {
    dataField +=
      '"DATA",' +
      '"' +
      projectItem[i].project +
      '",' +
      `"${projectItem[i].project}"` +
      ',"","","","","","",""' +
      "\n";
  }
  const allField =
    groupField +
    "\n" +
    headerField +
    "\n" +
    unitField +
    "\n" +
    typeField +
    "\n" +
    dataField;

  return allField;
}

export async function buildLOCA(holeItem) {
  const groupField = '"GROUP"' + "," + '"' + "LOCA" + '"';
  const headerField =
    '"HEADING","LOCA_ID","LOCA_TYPE","LOCA_STAT","LOCA_NATE","LOCA_NATN","LOCA_GREF","LOCA_GL","LOCA_REM","LOCA_FDEP","LOCA_STAR","LOCA_PURP","LOCA_TERM","LOCA_ENDD","LOCA_LETT","LOCA_LOCX","LOCA_LOCY","LOCA_LOCZ","LOCA_LREF","LOCA_DATM","LOCA_ETRV","LOCA_NTRV","LOCA_LTRV","LOCA_XTRL","LOCA_YTRL","LOCA_ZTRL","LOCA_LAT","LOCA_LON","LOCA_ELAT","LOCA_ELON","LOCA_LLZ","LOCA_LOCM","LOCA_LOCA","LOCA_CLST","LOCA_ALID","LOCA_OFFS","LOCA_CNGE","LOCA_TRAN","FILE_FSET","LOCA_CHKG","LOCA_APPG"';
  const unitField =
    '"UNIT","","","","m","m","","m","","m","yyyy-mm-dd","","","yyyy-mm-dd","","m","m","m","","","m","m","m","m","m","m","","","","","","","","","","","","","","",""';
  const typeField =
    '"TYPE","ID","PA","PA","2DP","2DP","PA","2DP","X","2DP","DT","X","X","DT","X","2DP","2DP","2DP","X","X","2DP","2DP","2DP","2DP","2DP","2DP","DMS","DMS","DMS","DMS","X","X","X","X","X","2DP","X","X","X","X","X"';
  let dataField = "";

  for (let i = 0; i < holeItem.length; i++) {
    dataField +=
      '"DATA",' +
      `"${holeItem[i].hole}",` +
      `"${holeItem[i].method}",` +
      '"",' +
      `"${holeItem[i].coOrdinatesE}",` +
      `"${holeItem[i].coOrdinatesN}",` +
      '"",' +
      `"${holeItem[i].groundLevel}",` +
      '"",' +
      `"${holeItem[i].depthLevel}",` +
      `"${holeItem[i].projectStartDate}",` +
      '"",' +
      '"",' +
      `"${holeItem[i].projectEndDate}",` +
      '"","","","","","","","","","","","","","","","","","","","","","","","","","",""' +
      "\n";
  }
  const allField =
    groupField +
    "\n" +
    headerField +
    "\n" +
    unitField +
    "\n" +
    typeField +
    "\n" +
    dataField;

  if (allField) {
    return allField.replace(/undefined/g, " ");
  }
}
export async function buildGEOL(depthItem) {
  const groupField = '"GROUP"' + "," + '"' + "GEOL" + '"';
  const headerField =
    '"HEADING","LOCA_ID","GEOL_TOP","GEOL_BASE","GEOL_DESC","GEOL_LEG","GEOL_GEOL","GEOL_GEO2","GEOL_STAT","GEOL_BGS","GEOL_FORM","GEOL_REM","FILE_FSET"';
  const unitField = '"UNIT","","m","m","","","","","","","","",""';
  const typeField =
    '"TYPE","ID","2DP","2DP","X","PA","PA","PA","X","PA","X","X","X"';
  let dataField = "";

  for (let i = 0; i < depthItem.length; i++) {
    dataField +=
      '"DATA",' +
      `"${depthItem[i].holeName}",` +
      `"${depthItem[i].fromDepthLv}",` +
      `"${depthItem[i].toDepthLv}",` +
      `"${depthItem[i].description}",` +
      '"","Q",' +
      `"${depthItem[i].legendCode}",` +
      '"","","","",""' +
      "\n";
  }
  //console.log("dataField = " + dataField);
  //console.log("dataField = " + dataField.length);
  let allField =
    groupField +
    "\n" +
    headerField +
    "\n" +
    unitField +
    "\n" +
    typeField +
    "\n" +
    dataField;

  if (allField) {
    return allField.replace(/undefined/g, " ");
  }
}

export async function getAGSdata(selectedId) {
  //Define Object filter
  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  //Find current project
  const projectItem = await DataStore.query(Project);
  const selectedProjectItem = Object.values(
    Object.filter(projectItem, (project) => project.id == selectedId)
  );

  //Find current hole
  const holeItem = await DataStore.query(Hole);
  const selectedHoleItem = Object.values(
    Object.filter(holeItem, (hole) => hole.projectID == selectedId)
  );

  //Find current depth
  let depthItem = [];
  let allDepthItem = await DataStore.query(Depth);
  for (let i = 0; i < selectedHoleItem.length; i++) {
    let tempItem = Object.filter(
      allDepthItem,
      (depth) => depth.holeID == selectedHoleItem[i].id
    );

    let tempArray = Object.values(tempItem);

    tempArray.sort((a, b) =>
      parseFloat(a.toDepthLv) - parseFloat(b.toDepthLv) > 0 ? true : false
    );
    //console.log("tempArray =" + tempArray);
    depthItem.push(tempArray);
  }
  // console.log("alld item = " + JSON.stringify(depthItem));
  // console.log("depthItem  =" + depthItem[0].length);
  let reItem = [];
  for (let i = 0; i < depthItem.length; i++) {
    for (let j = 0; j < depthItem[i].length; j++) {
      reItem.push(depthItem[i][j]);
    }
  }
  //console.log("reitem = " + JSON.stringify(reItem));
  depthItem = reItem;

  const PROJitem = await buildPROJ(selectedProjectItem);
  const GEOLitem = await buildGEOL(depthItem);
  const LOCAitem = await buildLOCA(selectedHoleItem);
  //const GEOLitem = await buildGEOL(depthItem);
  const allField = PROJitem + "\n" + LOCAitem + "\n" + GEOLitem;
  if (allField) {
    return allField.replace(/null/g, "");
    //return allField;
  }
}
