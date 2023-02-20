import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type DepthMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HoleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDepth = {
  readonly id: string;
  readonly holeName?: string | null;
  readonly depthLv?: string | null;
  readonly type?: string | null;
  readonly fromDepthLv?: number | null;
  readonly toDepthLv?: number | null;
  readonly drillDate?: string | null;
  readonly strength?: string | null;
  readonly valueColour?: string | null;
  readonly chromaColour?: string | null;
  readonly hueColour?: string | null;
  readonly rockStructure?: string | null;
  readonly additionalTerms?: string | null;
  readonly decompositionGrade?: string | null;
  readonly rockName?: string | null;
  readonly rockCode?: string | null;
  readonly disCountinuities?: string | null;
  readonly agInfoName?: string | null;
  readonly secondaryConstituent1?: string | null;
  readonly secondaryConstituent2?: string | null;
  readonly secondaryConstituent3?: string | null;
  readonly principalSoilType?: string | null;
  readonly munsellSoliColour?: string | null;
  readonly additionalConstituent1?: string | null;
  readonly additionalConstituent2?: string | null;
  readonly soilClassification?: string | null;
  readonly description?: string | null;
  readonly legendCode?: string | null;
  readonly holeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDepth = {
  readonly id: string;
  readonly holeName?: string | null;
  readonly depthLv?: string | null;
  readonly type?: string | null;
  readonly fromDepthLv?: number | null;
  readonly toDepthLv?: number | null;
  readonly drillDate?: string | null;
  readonly strength?: string | null;
  readonly valueColour?: string | null;
  readonly chromaColour?: string | null;
  readonly hueColour?: string | null;
  readonly rockStructure?: string | null;
  readonly additionalTerms?: string | null;
  readonly decompositionGrade?: string | null;
  readonly rockName?: string | null;
  readonly rockCode?: string | null;
  readonly disCountinuities?: string | null;
  readonly agInfoName?: string | null;
  readonly secondaryConstituent1?: string | null;
  readonly secondaryConstituent2?: string | null;
  readonly secondaryConstituent3?: string | null;
  readonly principalSoilType?: string | null;
  readonly munsellSoliColour?: string | null;
  readonly additionalConstituent1?: string | null;
  readonly additionalConstituent2?: string | null;
  readonly soilClassification?: string | null;
  readonly description?: string | null;
  readonly legendCode?: string | null;
  readonly holeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Depth = LazyLoading extends LazyLoadingDisabled ? EagerDepth : LazyDepth

export declare const Depth: (new (init: ModelInit<Depth, DepthMetaData>) => Depth) & {
  copyOf(source: Depth, mutator: (draft: MutableModel<Depth, DepthMetaData>) => MutableModel<Depth, DepthMetaData> | void): Depth;
}

type EagerHole = {
  readonly id: string;
  readonly hole: string;
  readonly depthLevel?: number | null;
  readonly method?: string | null;
  readonly machineNno?: string | null;
  readonly flushingMedium?: string | null;
  readonly coOrdinatesE?: number | null;
  readonly coOrdinatesN?: number | null;
  readonly orientation?: string | null;
  readonly projectStartDate?: string | null;
  readonly projectEndDate?: string | null;
  readonly groundLevel?: number | null;
  readonly loggedBy?: string | null;
  readonly loggingDate?: string | null;
  readonly projectID: string;
  readonly Depths?: (Depth | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHole = {
  readonly id: string;
  readonly hole: string;
  readonly depthLevel?: number | null;
  readonly method?: string | null;
  readonly machineNno?: string | null;
  readonly flushingMedium?: string | null;
  readonly coOrdinatesE?: number | null;
  readonly coOrdinatesN?: number | null;
  readonly orientation?: string | null;
  readonly projectStartDate?: string | null;
  readonly projectEndDate?: string | null;
  readonly groundLevel?: number | null;
  readonly loggedBy?: string | null;
  readonly loggingDate?: string | null;
  readonly projectID: string;
  readonly Depths: AsyncCollection<Depth>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hole = LazyLoading extends LazyLoadingDisabled ? EagerHole : LazyHole

export declare const Hole: (new (init: ModelInit<Hole, HoleMetaData>) => Hole) & {
  copyOf(source: Hole, mutator: (draft: MutableModel<Hole, HoleMetaData>) => MutableModel<Hole, HoleMetaData> | void): Hole;
}

type EagerProject = {
  readonly id: string;
  readonly project: string;
  readonly taskOrderNumber?: string | null;
  readonly Holes?: (Hole | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly project: string;
  readonly taskOrderNumber?: string | null;
  readonly Holes: AsyncCollection<Hole>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}