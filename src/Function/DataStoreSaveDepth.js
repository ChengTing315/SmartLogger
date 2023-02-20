import { Depth } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { resultUpdateMsg, resultSaveMsg } from "../Components/ResultMsg";
import moment from "moment";

export const DataStoreSaveDepth = async (value, holeID, holeName) => {
  try {
    // console.log(
    //   "DataStoreSaveD - JSON.stringify(value) =" + JSON.stringify(value)
    // );
    //console.log("type =" + checkType(value.typeIndex));
    //console.log("DataStoreSaveD - value =" + value);
    // console.log("DataStoreSaveD - value.fromDepthLv =" + value.fromDepthLv);
    // console.log("DataStoreSaveD - value.fromDepthLv =" + value.fromDepthLv);
    //console.log("value.fromDepthLv = " + value.fromDepthLv);
    //value.fromDepthLv = value.fromDepthLv == "0" ? 0 : value.fromDepthLv;
    //console.log("value.fromDepthLv = " + value.fromDepthLv);
    const [
      depthLv,
      type,
      fromDepthLv,
      toDepthLv,
      drillDate,
      strength,
      valueColour,
      chromaColour,
      hueColour,
      rockStructure,
      additionalTerms,
      decompositionGrade,
      rockName,
      rockCode,
      disCountinuities,
      agInfoName,
      secondaryConstituent1,
      secondaryConstituent2,
      secondaryConstituent3,
      principalSoilType,
      munsellSoliColour,
      additionalConstituent1,
      additionalConstituent2,
      soilClassification,
      description,

      legendCode,
    ] = [
      value.depthLv ? value.depthLv : "",
      value.type ? value.type : "",
      value.fromDepthLv ? value.fromDepthLv : 0,
      value.toDepthLv ? value.toDepthLv : "",
      // value.drillDate
      //   ? value.drillDate
      moment(new Date(1598051730000)).format("YYYY-MM-DD"),
      value.strength ? value.strength : "",
      value.valueColour ? value.valueColour : "",
      value.chromaColour ? value.chromaColour : "",
      value.hueColour ? value.hueColour : "",
      value.rockStructure ? value.rockStructure : "",
      value.additionalTerms ? value.additionalTerms : "",
      value.decompositionGrade ? value.decompositionGrade : "",
      value.rockName ? value.rockName : "",
      value.rockCode ? value.rockCode : "",
      value.disCountinuities ? value.disCountinuities : "",
      value.agInfoName ? value.agInfoName : "",
      value.secondaryConstituent1 ? value.secondaryConstituent1 : "",
      value.secondaryConstituent2 ? value.secondaryConstituent2 : "",
      value.secondaryConstituent3 ? value.secondaryConstituent3 : "",
      value.principalSoilType ? value.principalSoilType : "",
      value.munsellSoliColour ? value.munsellSoliColour : "",
      value.additionalConstituent1 ? value.additionalConstituent1 : "",
      value.additionalConstituent2 ? value.additionalConstituent2 : "",
      value.soilClassification ? value.soilClassification : "",
      value.description ? value.description : "",

      value.legendCode ? value.legendCode : "",
    ];
    if (!value.id) {
      console.log("in save");
      await DataStore.save(
        new Depth({
          holeName,
          depthLv,
          type,
          fromDepthLv,
          toDepthLv,
          drillDate,
          strength,
          valueColour,
          chromaColour,
          hueColour,
          rockStructure,
          additionalTerms,
          decompositionGrade,
          rockName,
          rockCode,
          disCountinuities,
          agInfoName,
          secondaryConstituent1,
          secondaryConstituent2,
          secondaryConstituent3,
          principalSoilType,
          munsellSoliColour,
          additionalConstituent1,
          additionalConstituent2,
          soilClassification,
          description,

          legendCode,
          holeID,
        })
      );
      //resultSaveMsg(true);
    } else {
      // console.log("in update");
      const original = await DataStore.query(Depth, value.id);
      await DataStore.save(
        Depth.copyOf(original, (updated) => {
          (updated.holeName = holeName ? holeName : ""),
            (updated.depthLv = depthLv ? depthLv : ""),
            (updated.type = type ? type : ""),
            (updated.fromDepthLv = fromDepthLv ? fromDepthLv : 0),
            (updated.toDepthLv = toDepthLv ? toDepthLv : ""),
            (updated.drillDate = drillDate ? drillDate : ""),
            (updated.strength = strength ? strength : ""),
            (updated.valueColour = valueColour ? valueColour : ""),
            (updated.chromaColour = chromaColour ? chromaColour : ""),
            (updated.hueColour = hueColour ? hueColour : ""),
            (updated.rockStructure = rockStructure ? rockStructure : ""),
            (updated.additionalTerms = additionalTerms ? additionalTerms : ""),
            (updated.decompositionGrade = decompositionGrade
              ? decompositionGrade
              : ""),
            (updated.rockName = rockName ? rockName : ""),
            (updated.rockCode = rockCode ? rockCode : ""),
            (updated.disCountinuities = disCountinuities
              ? disCountinuities
              : ""),
            (updated.agInfoName = agInfoName ? agInfoName : ""),
            (updated.secondaryConstituent1 = secondaryConstituent1
              ? secondaryConstituent1
              : ""),
            (updated.secondaryConstituent2 = secondaryConstituent2
              ? secondaryConstituent2
              : ""),
            (updated.secondaryConstituent3 = secondaryConstituent3
              ? secondaryConstituent3
              : ""),
            (updated.principalSoilType = principalSoilType
              ? principalSoilType
              : ""),
            (updated.munsellSoliColour = munsellSoliColour
              ? munsellSoliColour
              : ""),
            (updated.additionalConstituent1 = additionalConstituent1
              ? additionalConstituent1
              : "");
          updated.additionalConstituent2 = additionalConstituent2
            ? additionalConstituent2
            : "";
          updated.soilClassification = soilClassification
            ? soilClassification
            : "";
          updated.description = description ? description : "";
          updated.legendCode = legendCode ? legendCode : "";
        })
      );
    }
    resultUpdateMsg(true);
  } catch (e) {
    // saving error
    resultUpdateMsg(false);
    //resultSaveMsg(false);
    console.log("storeDataJson error =" + e);
  }
};
