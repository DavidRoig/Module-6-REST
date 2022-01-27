import { CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/graphQL';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        info {
          count
        }
        results {
          id
          name
          status
          species
          type
          gender
          image
          location {
            name
          }
          origin {
            name
          }
        }
      }
    }
  `;
  const { characters } =
    await graphQLClient.request<GetCharacterCollectionResponse>(query);
  return characters['results'];
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  throw new Error('Ops...this method is not implemented. ');
};
