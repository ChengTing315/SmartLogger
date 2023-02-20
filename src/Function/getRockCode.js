export const getRockCode = (dGrade, rockName) => {
  if (!dGrade || !rockName) {
    return null;
  }

  let tempName = "";
  const dgCode = dGrade
    .split(" ")
    .map((word) => word[0])
    .join("");
  //console.log("dgCode =" + dgCode);
  const rockNameCode = getRockNameCode(rockName);
  tempName = dgCode + rockNameCode;
  return tempName.toUpperCase();
};

const getRockNameCode = (rockName) => {
  rockName = rockName.toUpperCase();

  switch (rockName) {
    case "ANDESITE":
    case "BASALT":
    case "DACITE":
    case "EUTAXITE":
    case "GRANITE":
    case "LAMPROPHYRE":
    case "QUARTZ VEUN":
    case "TUFF":
    case "PEGMATITE":
      return rockName.charAt(0);

    case "FAULT BRECCIA":
    case "FAULT GOUGE":
    case "IMPURE MARBLE":
    case "QUARTZ LATITE":
    case "TUFF AGGLOMERATE":
    case "TUFF BRECCIA":
    case "PYROCLASTIC BRECCIA":
    case "TUFFACEOUS SANDSTONE":
      return rockName
        .split(" ")
        .map((word) => word[0])
        .join("");
    case "CONGLOMERATE":
      return "CG";
    case "CLAYSTONE":
      return "CT";
    case "DOLOMITE, DOLOMITIC LIMESTONE":
      return "DL";
    case "GABBRO":
      return "GB";
    case "GRANODIORITE":
      return "GD";
    case "HORNFEL":
      return "HF";
    case "QUARTZITE":
      return "QZ";
    case "RHYODACITE":
      return "RD";
    case "FELDSPARPHYRIC RHYOLITE":
      return "RF";
    case "QUARTZ SYENITE":
      return "SQ";
    case "SANDSTONE":
      return "ST";
    case "COARSE ASH TUFF":
      return "TC";
    case "TRACHYDACITE":
      return "TD";
    case "FINE ASH TUFF":
      return "TF";
    case "TUFFACEOUS CONGLOMERATE":
      return "TG";
    case "LAPILLI TUFF":
      return "TL";
    case "QUARTZ TRACHYTE":
      return "TQ";
    case "LIMESTONE":
      return "LT";
    case "MARBLE":
      return "TQ";
    case "QUARTZ MONZONITE":
      return "MQ";
    case "MUDSTONE":
      return "MT";
    case "MYLONITE":
      return "MY";
    case "MONZONITE":
      return "MZ";
    case "TUFFACCEOUS BRECCIA":
      return "TR";
    case "TRACHYTE":
      return "TY";
    case "TUFFACCEOUS SILTSTONE":
      return "TZ";
    case " SILTSTONE":
      return "ZT";

    default:
      return rockName.charAt(0) + rockName.charAt(1);
  }
};
