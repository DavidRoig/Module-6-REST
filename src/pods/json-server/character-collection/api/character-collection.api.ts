import { CharacterApi } from './character-collection.api-model';
import axios from 'axios';
import { EnvConstants } from 'core/env.constants';

export const getCharacterCollection = async (): Promise<CharacterApi[]> =>
  axios({
    method: 'GET',
    url: EnvConstants.jsonServerUrl,
  }).then((response) => response?.data, console.error);

export const deleteCharacter = async (id: string): Promise<boolean> => {
  throw new Error('Ops...this method is not implemented. ');
};
