/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepth = /* GraphQL */ `
  query GetDepth($id: ID!) {
    getDepth(id: $id) {
      id
      holeName
      depthLv
      type
      fromDepthLv
      toDepthLv
      drillDate
      strength
      valueColour
      chromaColour
      hueColour
      rockStructure
      additionalTerms
      decompositionGrade
      rockName
      rockCode
      disCountinuities
      agInfoName
      secondaryConstituent1
      secondaryConstituent2
      secondaryConstituent3
      principalSoilType
      munsellSoliColour
      additionalConstituent1
      additionalConstituent2
      soilClassification
      description
      legendCode
      holeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDepths = /* GraphQL */ `
  query ListDepths(
    $filter: ModelDepthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        holeName
        depthLv
        type
        fromDepthLv
        toDepthLv
        drillDate
        strength
        valueColour
        chromaColour
        hueColour
        rockStructure
        additionalTerms
        decompositionGrade
        rockName
        rockCode
        disCountinuities
        agInfoName
        secondaryConstituent1
        secondaryConstituent2
        secondaryConstituent3
        principalSoilType
        munsellSoliColour
        additionalConstituent1
        additionalConstituent2
        soilClassification
        description
        legendCode
        holeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDepths = /* GraphQL */ `
  query SyncDepths(
    $filter: ModelDepthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        holeName
        depthLv
        type
        fromDepthLv
        toDepthLv
        drillDate
        strength
        valueColour
        chromaColour
        hueColour
        rockStructure
        additionalTerms
        decompositionGrade
        rockName
        rockCode
        disCountinuities
        agInfoName
        secondaryConstituent1
        secondaryConstituent2
        secondaryConstituent3
        principalSoilType
        munsellSoliColour
        additionalConstituent1
        additionalConstituent2
        soilClassification
        description
        legendCode
        holeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHole = /* GraphQL */ `
  query GetHole($id: ID!) {
    getHole(id: $id) {
      id
      hole
      depthLevel
      method
      machineNno
      flushingMedium
      coOrdinatesE
      coOrdinatesN
      orientation
      projectStartDate
      projectEndDate
      groundLevel
      loggedBy
      loggingDate
      projectID
      Depths {
        items {
          id
          holeName
          depthLv
          type
          fromDepthLv
          toDepthLv
          drillDate
          strength
          valueColour
          chromaColour
          hueColour
          rockStructure
          additionalTerms
          decompositionGrade
          rockName
          rockCode
          disCountinuities
          agInfoName
          secondaryConstituent1
          secondaryConstituent2
          secondaryConstituent3
          principalSoilType
          munsellSoliColour
          additionalConstituent1
          additionalConstituent2
          soilClassification
          description
          legendCode
          holeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHoles = /* GraphQL */ `
  query ListHoles(
    $filter: ModelHoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hole
        depthLevel
        method
        machineNno
        flushingMedium
        coOrdinatesE
        coOrdinatesN
        orientation
        projectStartDate
        projectEndDate
        groundLevel
        loggedBy
        loggingDate
        projectID
        Depths {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHoles = /* GraphQL */ `
  query SyncHoles(
    $filter: ModelHoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        hole
        depthLevel
        method
        machineNno
        flushingMedium
        coOrdinatesE
        coOrdinatesN
        orientation
        projectStartDate
        projectEndDate
        groundLevel
        loggedBy
        loggingDate
        projectID
        Depths {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      project
      taskOrderNumber
      id
      Holes {
        items {
          id
          hole
          depthLevel
          method
          machineNno
          flushingMedium
          coOrdinatesE
          coOrdinatesN
          orientation
          projectStartDate
          projectEndDate
          groundLevel
          loggedBy
          loggingDate
          projectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        project
        taskOrderNumber
        id
        Holes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        project
        taskOrderNumber
        id
        Holes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
