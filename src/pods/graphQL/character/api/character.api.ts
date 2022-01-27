import { CharacterApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities } from './hotel.mock-data';
import Axios from 'axios';
import { EnvConstants } from 'core/env.constants';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/graphQL';

interface GetCharacterResponse {
  character: CharacterApi;
}

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const query = gql`
  query {
    character(id:${+id}){
      id
        name,
        status,
        species,
        type,
        gender,
        image,
        location {
          name
        }
        origin{
          name
        }
    }
  }`;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (
  character: CharacterApi
): Promise<boolean> => {
  return true;
};
