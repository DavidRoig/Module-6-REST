import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';
import { EnvConstants } from 'core/env.constants';

export const getCharacterCollection = async (
  term: string
): Promise<CharacterEntityApi[]> =>
  axios({
    method: 'GET',
    url: `${EnvConstants.apiUrl}?name=${term}`,
  }).then((response) => response?.data?.results, console.error);

export const deleteCharacter = async (id: string): Promise<boolean> => {
  throw new Error('Ops...this method is not implemented. ');
};
