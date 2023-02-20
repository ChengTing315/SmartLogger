// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Depth, Hole, Project } = initSchema(schema);

export {
  Depth,
  Hole,
  Project
};