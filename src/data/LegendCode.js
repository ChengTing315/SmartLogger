export const getLegendCode = () => {
  const legendCode = [
    { id: "MAD", title: "MARINE DEPOSIT" },
    { id: "MADC", title: "MARINE-Clay" },
    { id: "MADCS", title: "MARINE-Sand" },
    { id: "ALL", title: "ALLUVIUM" },
    { id: "ALLC", title: "ALLUVIUM-Clay" },
    { id: "ALLS", title: "ALLUVIUM-Sand" },
    { id: "ALLZ", title: "ALLUVIUM-SILT" },
    { id: "RS", title: "RESIDUAL SOIL" },
    { id: "BED", title: "BEACH DEPOSIT" },
    { id: "ESD", title: "ESTUARINE DEPOSIT" },

    { id: "TS", title: "TOP SOIL" },
    { id: "POD", title: "POND DEPOSIT" },
    { id: "DIA", title: "DIAMITE" },
    { id: "MDS", title: "MARINE-Sand" },
    { id: "DFD", title: "DEBRIS FLOW DEPOSIT" },
    { id: "LSM", title: "LANDSLIDE MATERIAL" },
    { id: "LPM", title: "LANDSLIP MATERIAL" },
    { id: "SPM", title: "SLIP MATERIAL" },
    { id: "ANTM", title: "ANTHROPOGENIC	MUD" },
    { id: "ANT", title: "ANTHROPOGENIC" },

    { id: "KSD", title: "KARST" },
    { id: "PED", title: "PEAT DEPOSIT" },
    { id: "DED", title: "DEBRIS DEPOSIT" },
    { id: "SWD", title: "SWAMP DEPOSIT" },
    { id: "AND", title: "ANTHROPOGENIC DEPOSIT" },
    { id: "DID", title: "DIAMICT DEPOSIT" },
    { id: "NUD", title: "NULLAH DEPOSIT" },
    { id: "LAD", title: "LACUSTRINE DEPOSIT" },
    { id: "LGD", title: "LAGOON DEPOSIT" },
    { id: "STD", title: "STREAM DEPOSIT" },

    { id: "TRD", title: "TERRACE DEPOSIT" },
    { id: "ITD", title: "INTERTIDAL DEPOSIT" },
    { id: "CDT", title: "CD-TUFF" },
    { id: "HDT", title: "HD-TUFF" },
    { id: "MDT", title: "MD-TUFF" },
    { id: "H/MDT", title: "H/MD-TUF" },
    { id: "SDT", title: "SD-TUFF" },
    { id: "CDG", title: "CD-GRANITE" },
    { id: "HDG", title: "HD-GRANITE" },
    { id: "MDG", title: "MD-GRANITE" },

    { id: "SDG", title: "SD-GRANITE" },
    { id: "C/HDG", title: "C/HD-GRANITE" },
    { id: "CDFS", title: "CD-FELSITE" },
    { id: "HDFS", title: "HD-FELSITE" },
    { id: "MDFS", title: "MD-FELSITE" },
    { id: "SDFS", title: "SD-FELSITE" },
    { id: "CDB", title: "CD-BASALT" },
    { id: "HDB", title: "HD-BASALT" },
    { id: "MDB", title: "MD-BASALT" },
    { id: "SDB", title: "SD-BASALT" },

    { id: "CDGR", title: "CD-GRANITE" },
    { id: "HDGR", title: "HD-GRANITE" },
    { id: "MDGR", title: "MD-GRANITE" },
    { id: "SDGR", title: "SD-GRANITE" },

    { id: "CDP", title: "CD-PEGMATITE" },
    { id: "HDP", title: "HD-PEGMATITE" },
    { id: "MDP", title: "MD-PEGMATITE" },
    { id: "SDP", title: "SD-PEGMATITE" },

    { id: "CDZTM", title: "CD-META-SILTSTONE" },
    { id: "HDZTM", title: "HD-META-SILTSTONE" },
    { id: "MDZTM", title: "MD-META-SILTSTONE" },
    { id: "SDZTM", title: "SD-META-SILTSTONE" },

    { id: "CDMB", title: "CD-MARBLE" },
    { id: "HDMB", title: "HD-MARBLE" },
    { id: "MDMB", title: "MD-MARBLE" },
    { id: "SDMB", title: "SD-MARBLE" },

    { id: "MB", title: "MARBLE" },

    { id: "CDGD", title: "CD-GRANODIORITE" },
    { id: "HDGD", title: "HD-GRANODIORITE" },
    { id: "MDGD", title: "MD-GRANODIORITE" },
    { id: "SDGD", title: "SD-GRANODIORITE" },

    { id: "H/MDGD", title: "H/MD-GRANODIORITE" },
    { id: "C/MDGD", title: "C/MD-GRANODIORITE" },

    { id: "CDAM", title: "CD-META-ANDESITE" },
    { id: "HDAM", title: "HD-META-ANDESITE" },
    { id: "MDAM", title: "MD-META-ANDESITE" },
    { id: "SDAM", title: "SD-META-ANDESITE" },

    { id: "CDRH", title: "CD-RHYOLITE" },
    { id: "HDRH", title: "HD-RHYOLITE" },
    { id: "MDRH", title: "MD-RHYOLITE" },
    { id: "SDRH", title: "SD-RHYOLITE" },

    { id: "C/HDRH", title: "C/HD-RHYOLITE" },

    { id: "CDFB", title: "CD-FAULT BRECCIA" },
    { id: "HDFB", title: "HD-FAULT BRECCIA" },
    { id: "MDFB", title: "MD-FAULT BRECCIA" },
    { id: "SDFB", title: "SD-FAULT BRECCIA" },

    { id: "H/MDFB", title: "H/MD-FAULT BRECCIA" },

    { id: "CDSTM", title: "CD-META-SANDSTONE" },
    { id: "HDSTM", title: "HD-META-SANDSTONE" },
    { id: "MDSTM", title: "MD-META-SANDSTONE" },
    { id: "SDSTM", title: "SD-META-SANDSTONE" },

    { id: "CDQZ", title: "CD-QUARTZITE" },
    { id: "HDQZ", title: "HD-QUARTZITE" },
    { id: "MDQZ", title: "MD-QUARTZITE" },
    { id: "SDQZ", title: "SD-QUARTZITE" },

    { id: "CDZT", title: "CD-SILTSTONE" },
    { id: "HDZT", title: "HD-SILTSTONE" },
    { id: "MDZT", title: "MD-SILTSTONE" },
    { id: "SDZT", title: "SD-SILTSTONE" },

    { id: "CDST", title: "CD-SANDSTONE" },
    { id: "HDST", title: "HD-SANDSTONE" },
    { id: "MDST", title: "MD-SANDSTONE" },
    { id: "SDST", title: "SD-SANDSTONE" },

    { id: "CDSQ", title: "CD-QUARTZ SYENITE" },
    { id: "HDSQ", title: "HD-QUARTZ SYENITE" },
    { id: "MDSQ", title: "MD-QUARTZ SYENITE" },
    { id: "SDSQ", title: "SD-QUARTZ SYENITE" },

    { id: "CDMFD", title: "CD-MAFIC DYKE" },
    { id: "HDMFD", title: "HD-MAFIC DYKE" },
    { id: "MDMFD", title: "MD-MAFIC DYKE" },
    { id: "SDMFD", title: "SD-MAFIC DYKE" },

    { id: "CDBD", title: "CD-BASALT DYKE" },
    { id: "HDBD", title: "HD-BASALT DYKE" },
    { id: "MDBD", title: "MD-BASALT DYKE" },
    { id: "SDBD", title: "SD-BASALT DYKE" },

    { id: "CDA", title: "CD-ANDESITE" },
    { id: "HDA", title: "HD-ANDESITE" },
    { id: "MDA", title: "MD-ANDESITE" },
    { id: "SDA", title: "SD-ANDESITE" },

    { id: "CDDI", title: "CD-DIORITE" },
    { id: "HDDI", title: "HD-DIORITE" },
    { id: "MDDI", title: "MD-DIORITE" },
    { id: "SDDI", title: "SD-DIORITE" },

    { id: "CDRD", title: "CD-RHYODACITE" },
    { id: "HDRD", title: "HD-RHYODACITE" },
    { id: "MDRD", title: "MD-RHYODACITE" },
    { id: "SDRD", title: "SD-RHYODACITE" },

    { id: "CDTD", title: "CD-TRACHYDACITE" },
    { id: "HDTD", title: "HD-TRACHYDACITE" },
    { id: "MDTD", title: "MD-TRACHYDACITE" },
    { id: "SDTD", title: "SD-TRACHYDACITE" },

    { id: "CDE", title: "CD-EUTAXITE" },
    { id: "HDE", title: "HD-EUTAXITE" },
    { id: "MDE", title: "MD-EUTAXITE" },
    { id: "SDE", title: "SD-EUTAXITE" },

    { id: "CDMZ", title: "CD-MONZONITE" },
    { id: "HDMZ", title: "HD-MONZONITE" },
    { id: "MDMZ", title: "MD-MONZONITE" },
    { id: "SDMZ", title: "SD-MONZONITE" },

    { id: "CDSY", title: "CD-SYENITE" },
    { id: "HDSY", title: "HD-SYENITE" },
    { id: "MDSY", title: "MD-SYENITE" },
    { id: "SDSY", title: "SD-SYENITE" },

    { id: "CDCGM", title: "CD-META-CONGLOMERATE" },
    { id: "HDCGM", title: "HD-META-CONGLOMERATE" },
    { id: "MDCGM", title: "MD-META-CONGLOMERATE" },
    { id: "SDCGM", title: "SD-META-CONGLOMERATE" },

    { id: "CDMQ", title: "CD-QUARTZ MONZONITE" },
    { id: "HDMQ", title: "HD-QUARTZ MONZONITE" },
    { id: "MDMQ", title: "MD-QUARTZ MONZONITE" },
    { id: "SDMQ", title: "SD-QUARTZ MONZONITE" },

    { id: "CDD", title: "CD-DACITE" },
    { id: "HDD", title: "HD-DACITE" },
    { id: "MDD", title: "MD-DACITE" },
    { id: "SDD", title: "SD-DACITE" },

    { id: "CDPH", title: "CD-PHYLLITE" },
    { id: "HDPH", title: "HD-PHYLLITE" },
    { id: "MDPH", title: "MD-PHYLLITE" },
    { id: "SDPH", title: "SD-PHYLLITE" },

    { id: "CDAP", title: "CD-APLITE" },
    { id: "HDAP", title: "HD-APLITE" },
    { id: "MDAP", title: "MD-APLITE" },
    { id: "SDAP", title: "SD-APLITE" },

    { id: "C/MDAP", title: "C/MD-APLITE" },
    { id: "H/MDAP", title: "H/MD-APLITE" },
    { id: "M/MDAP", title: "M/MD-APLITE" },

    { id: "CDMT", title: "CD-MUDSTONE" },
    { id: "HDMT", title: "HD-MUDSTONE" },
    { id: "MDMT", title: "MD-MUDSTONE" },
    { id: "SDMT", title: "SD-MUDSTONE" },

    { id: "CDSH", title: "CD-SHALE" },
    { id: "HDSH", title: "HD-SHALE" },
    { id: "MDSH", title: "MD-SHALE" },
    { id: "SDSH", title: "SD-SHALE" },

    { id: "CDQP", title: "CD-QUARTZ PORPHYRY" },
    { id: "HDQP", title: "HD-QUARTZ PORPHYRY" },
    { id: "MDQP", title: "MD-QUARTZ PORPHYRY" },
    { id: "SDQP", title: "SD-QUARTZ PORPHYRY" },

    { id: "CDDO", title: "CD-DOLERITE" },
    { id: "HDDO", title: "HD-DOLERITE" },
    { id: "MDDO", title: "MD-DOLERITE" },
    { id: "SDDO", title: "SD-DOLERITE" },

    { id: "CDMTM", title: "CD-META-MUDSTONE" },
    { id: "HDMTM", title: "HD-META-MUDSTONE" },
    { id: "MDMTM", title: "MD-META-MUDSTONE" },
    { id: "SDMTM", title: "SD-META-MUDSTONE" },

    { id: "CDSC", title: "CD-SCHIST" },
    { id: "HDSC", title: "HD-SCHIST" },
    { id: "MDSC", title: "MD-SCHIST" },
    { id: "SDSC", title: "SD-SCHIST" },

    { id: "CDPB", title: "CD-PYROCLASTIC BRECCIA" },
    { id: "HDPB", title: "HD-PYROCLASTIC BRECCIA" },
    { id: "MDPB", title: "MD-PYROCLASTIC BRECCIA" },
    { id: "SDPB", title: "SD-PYROCLASTIC BRECCIA" },

    { id: "CDCTM", title: "CD-META-CLAYSTONE" },
    { id: "HDCTM", title: "HD-META-CLAYSTONE" },
    { id: "MDCTM", title: "MD-META-CLAYSTONE" },
    { id: "SDCTM", title: "SD-META-CLAYSTONE" },

    { id: "CDCT", title: "CD-CLAYSTONE" },
    { id: "HDCT", title: "HD-CLAYSTONE" },
    { id: "MDCT", title: "MD-CLAYSTONE" },
    { id: "SDCT", title: "SD-CLAYSTONE" },

    { id: "CDDOD", title: "CD-DOLERITE DYKE" },
    { id: "HDDOD", title: "HD-DOLERITE DYKE" },
    { id: "MDDOD", title: "MD-DOLERITE DYKE" },
    { id: "SDDOD", title: "SD-DOLERITE DYKE" },

    { id: "CDAPD", title: "CD-APLITE DYKE" },
    { id: "HDAPD", title: "HD-APLITE DYKE" },
    { id: "MDAPD", title: "MD-APLITE DYKE" },
    { id: "SDAPD", title: "SD-APLITE DYKE" },

    { id: "CDQD", title: "CD-QUARTZ DYKE" },
    { id: "HDQD", title: "HD-QUARTZ DYKE" },
    { id: "MDQD", title: "MD-QUARTZ DYKE" },
    { id: "SDQD", title: "SD-QUARTZ DYKE" },

    { id: "CDAPD", title: "CD-APLITE DYKE" },
    { id: "HDAPD", title: "HD-APLITE DYKE" },
    { id: "MDAPD", title: "MD-APLITE DYKE" },
    { id: "SDAPD", title: "SD-APLITE DYKE" },

    { id: "CDBR", title: "CD-BRECCIA" },
    { id: "HDBR", title: "HD-BRECCIA" },
    { id: "MDBR", title: "MD-BRECCIA" },
    { id: "SDBR", title: "SD-BRECCIA" },

    { id: "CDTQ", title: "CD-QUARTZ TRACHYTE" },
    { id: "HDTQ", title: "HD-QUARTZ TRACHYTE" },
    { id: "MDTQ", title: "MD-QUARTZ TRACHYTE" },
    { id: "SDTQ", title: "SD-QUARTZ TRACHYTE" },

    { id: "CDHF", title: "CD-HORNFELS" },
    { id: "HDHF", title: "HD-HORNFELS" },
    { id: "MDHF", title: "MD-HORNFELS" },
    { id: "SDHF", title: "SD-HORNFELS" },

    { id: "CDMY", title: "CD-MYLONITE" },
    { id: "HDMY", title: "HD-MYLONITE" },
    { id: "MDMY", title: "MD-MYLONITE" },
    { id: "SDMY", title: "SD-MYLONITE" },

    { id: "CDTB", title: "CD-TUFF BRECCIA" },
    { id: "HDTB", title: "HD-TUFF BRECCIA" },
    { id: "MDTB", title: "MD-TUFF BRECCIA" },
    { id: "SDTB", title: "SD-TUFF BRECCIA" },

    { id: "CDL", title: "CD-LAMPROPHYRE" },
    { id: "HDL", title: "HD-LAMPROPHYRE" },
    { id: "MDL", title: "MD-LAMPROPHYRE" },
    { id: "SDL", title: "SD-LAMPROPHYRE" },

    { id: "CDCG", title: "CD-CONGLOMERATE" },
    { id: "HDCG", title: "HD-CONGLOMERATE" },
    { id: "MDCG", title: "MD-CONGLOMERATE" },
    { id: "SDCG", title: "SD-CONGLOMERATE" },

    { id: "CDRHL", title: "CD-RHYOLITIC LAVA" },
    { id: "HDRHL", title: "HD-RHYOLITIC LAVA" },
    { id: "MDRHL", title: "MD-RHYOLITIC LAVA" },
    { id: "SDRHL", title: "SD-RHYOLITIC LAVA" },

    { id: "CDDY", title: "CD-DYKE" },
    { id: "HDDY", title: "HD-DYKE" },
    { id: "MDDY", title: "MD-DYKE" },
    { id: "SDDY", title: "SD-DYKE" },

    { id: "CDTTM", title: "CD-METATUFFITE" },
    { id: "HDTTM", title: "HD-METATUFFITE" },
    { id: "MDTTM", title: "MD-METATUFFITE" },
    { id: "SDTTM", title: "SD-METATUFFITE" },

    { id: "CDTM", title: "CD-META-TUFF" },
    { id: "HDTM", title: "HD-META-TUFF" },
    { id: "MDTM", title: "MD-META-TUFF" },
    { id: "SDTM", title: "SD-META-TUFF" },

    { id: "CDGS", title: "CD-GREISEN" },
    { id: "HDGS", title: "HD-GREISEN" },
    { id: "MDGS", title: "MD-GREISEN" },
    { id: "SDGS", title: "SD-GREISEN" },

    { id: "CDGB", title: "CD-GABBRO" },
    { id: "HDGB", title: "HD-GABBRO" },
    { id: "MDGB", title: "MD-GABBRO" },
    { id: "SDGB", title: "SD-GABBRO" },

    { id: "CDAG", title: "CD-AGGLOMERATE" },
    { id: "HDAG", title: "HD-AGGLOMERATE" },
    { id: "MDAG", title: "MD-AGGLOMERATE" },
    { id: "SDAG", title: "SD-AGGLOMERATE" },

    { id: "SK", title: "SKARN" },
    { id: "COM", title: "CONTACT" },
    { id: "FILL", title: "FILL" },
    { id: "CONCRETE", title: "CONCRETE" },

    { id: "ASPHALT", title: "ASPHALT" },
    { id: "CAVITY", title: "CAVITY" },
    { id: "WALL", title: "WALL" },
    { id: "DEBRIS", title: "DEBRIS" },
  ];
  return legendCode;
};
