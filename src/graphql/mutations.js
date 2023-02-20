/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepth = /* GraphQL */ `
  mutation CreateDepth(
    $input: CreateDepthInput!
    $condition: ModelDepthConditionInput
  ) {
    createDepth(input: $input, condition: $condition) {
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
export const updateDepth = /* GraphQL */ `
  mutation UpdateDepth(
    $input: UpdateDepthInput!
    $condition: ModelDepthConditionInput
  ) {
    updateDepth(input: $input, condition: $condition) {
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
export const deleteDepth = /* GraphQL */ `
  mutation DeleteDepth(
    $input: DeleteDepthInput!
    $condition: ModelDepthConditionInput
  ) {
    deleteDepth(input: $input, condition: $condition) {
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
export const createHole = /* GraphQL */ `
  mutation CreateHole(
    $input: CreateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    createHole(input: $input, condition: $condition) {
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
export const updateHole = /* GraphQL */ `
  mutation UpdateHole(
    $input: UpdateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    updateHole(input: $input, condition: $condition) {
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
export const deleteHole = /* GraphQL */ `
  mutation DeleteHole(
    $input: DeleteHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    deleteHole(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
