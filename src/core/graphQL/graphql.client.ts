import { EnvConstants } from 'core/env.constants';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(EnvConstants.graphQLUrl);
