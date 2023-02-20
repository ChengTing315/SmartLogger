export const getDecompositionGradeData = () => {
  const decompositionGradeData = [
    { id: "Completely Decomposed", title: "Completely Decomposed" },
    { id: "Highly Decomposed", title: "Highly Decomposed" },
    { id: "Moderately Decomposed", title: "Moderately Decomposed" },
    { id: "Slightly Decomposed", title: "Slightly Decomposed" },
    { id: "Fresh Rock", title: "Fresh Rock" },
  ];

  return decompositionGradeData;
};

export const getRockName = () => {
  const rockNameData = [
    { id: "ANDESITE", title: "ANDESITE" },
    { id: "AGGLOMERATE", title: "AGGLOMERATE" },
    { id: "APLITE", title: "APLITE" },
    { id: "BASALT", title: "BASALT" },
    { id: "BREECCIA", title: "BREECCIA" },
    { id: "CONGLOMERATE", title: "CONGLOMERATE" },
    { id: "CHERT", title: "CHERT" },
    { id: "CONTACT METAMORPHIC ROCK", title: "CONTACT METAMORPHIC ROCK" },
    { id: "CLAYSTONE", title: "CLAYSTONE" },
    { id: "DACITE", title: "DACITE" },
    { id: "DIORITE", title: "DIORITE" },
    {
      id: "DOLOMITE, DOLOMITIC LIMESTONE",
      title: "DOLOMITE, DOLOMITIC LIMESTONE",
    },
    { id: "DOLERITE", title: "DOLERITE" },
    { id: "EXTAXITE", title: "EXTAXITE" },
    { id: "FAULT BRECCIA", title: "FAULT BRECCIA" },
    { id: "FAULT GOUGE", title: "FAULT GOUGE" },
    { id: "GRANITE", title: "GRANITE" },
    { id: "GABBRO", title: "GABBRO" },
    { id: "GRANODIORITE", title: "GRANODIORITE" },
    { id: "GNEISS", title: "GNEISS" },
    { id: "HORNFEL", title: "HORNFEL" },
    { id: "IMPURE MARBLE", title: "IMPURE MARBLE" },
    { id: "LAMPROPHYRE", title: "LAMPROPHYRE" },
    { id: "QUARTZ VEIN", title: "QUARTZ VEIN" },
    { id: "QUARTZ LATITE", title: "QUARTZ LATITE" },
    { id: "QUARTZITE", title: "QUARTZITE" },
    { id: "RHYODACITE", title: "RHYODACITE" },
    { id: "FELDSPARPHYRIC RHYOLITE", title: "FELDSPARPHYRIC RHYOLITE" },
    { id: "RHYOLITE", title: "RHYOLITE" },
    { id: "QUARTZPHYRIC RHYOLITE", title: "QUARTZPHYRIC RHYOLITE" },
    { id: "SCHIST", title: "SCHIST" },
    { id: "SHALE", title: "SHALE" },
    { id: "SKARN", title: "SKARN" },
    { id: "SLATE", title: "SLATE" },
    { id: "QUARTZ SYENITE", title: "QUARTZ SYENITE" },
    { id: "SANDSTONE", title: "SANDSTONE" },
    { id: "SYENITE", title: "SYENITE" },
    { id: "TUFF", title: "TUFF" },
    { id: "TUFF AGGLOMERATE", title: "TUFF AGGLOMERATE" },
    { id: "TUFF BRECCIA", title: "BRECCIA Breccia" },
    { id: "COARSE ASH TUFF", title: "COARSE ASH TUFF" },
    { id: "TRACHYDACITE", title: "TRACHYDACITE" },
    { id: "FINE ASH TUFF", title: "FINE ASH TUFF" },
    { id: "TUFFACEOUS CONGLOMERATE", title: "TUFFACEOUS CONGLOMERATE" },
    { id: "LAPILLI TUFF", title: "LAPILLI TUFF" },
    { id: "QUARTZ TRACHYTE", title: "QUARTZ TRACHYTE" },
    { id: "LATITE", title: "LATITE" },
    { id: "LITESTONE", title: "LITESTONE" },
    { id: "MARBLE", title: "MARBLE" },
    { id: "QUARTZ MONZONITE", title: "QUARTZ MONZONITE" },
    { id: "MUDSTONE", title: "MUDSTONE" },
    { id: "MYLONITE", title: "MYLONITE" },
    { id: "MONZONITE", title: "MONZONITE" },
    { id: "PEGMATITE", title: "PEGMATITE" },
    { id: "PYROCLASTIC BRECCIA", title: "PYROCLASTIC BRECCIA" },
    { id: "Phyllite", title: "Phyllite" },
    { id: "TUFFACCEOUS BRECCIA", title: "TUFFACCEOUS BRECCIA" },
    { id: "TRACHYTE", title: "TRACHYTE" },
    { id: "TUFFACEOUS SILTSTONE", title: "TUFFACEOUS SILTSTONE" },
    { id: "SILTSTONE", title: "SILTSTONE" },
  ];
  return rockNameData;
};

export const getAdditionalConstituentData1 = () => {
  const additionalConstituentData1 = [
    { id: "A Little", title: "A Little" },
    { id: "Some", title: "Some" },
    { id: "Much", title: "Much" },
  ];
  return additionalConstituentData1;
};

export const getAdditionalConstituentData2 = () => {
  const additionalConstituentData2 = [
    { id: "Boulders", title: "Boulders" },
    { id: "Cobbles", title: "Cobbles" },
    { id: "Gravel", title: "Gravel" },
  ];
  return additionalConstituentData2;
};

export const getPrincipalSoilTypeData = () => {
  const principalSoilTypeData = [
    { id: "BOULDERS", title: "BOULDERS" },
    {
      id: "COBBLES",
      title: "COBBLES",
    },
    //{ id: "FILL", title: "FILL" },
    { id: "GRAVELS", title: "GRAVELS" },
    { id: "SAND", title: "SAND" },
    { id: "SILT", title: "SILT" },
    { id: "CLAY", title: "CLAY" },
  ];
  return principalSoilTypeData;
};

export const getSoilClassificationData = () => {
  const soilClassificationData = [
    //{ id: "", title: "" },
    { id: "ALLUVIUM", title: "ALLUVIUM" },
    { id: "COLLUVIUM", title: "COLLUVIUM" },
    { id: "MARINE DEPOSIT", title: "MARINE DEPOSIT" },
    { id: "BEACH DEPOSIT", title: "BEACH DEPOSIT" },
    { id: "CAVITY FILLING", title: "CAVITY FILLING" },
    { id: "ESTUARINE DEPOSIT", title: "ESTUARINE DEPOSIT" },
    { id: "FILL", title: "FILL" },
    { id: "INTERTIDAL DEPOSIT", title: "INTERTIDAL DEPOSIT" },
    { id: "POND DEPOSIT", title: "POND DEPOSIT" },
    { id: "RESIDUAL SOIL", title: "RESIDUAL SOIL" },
  ];
  return soilClassificationData;
};
