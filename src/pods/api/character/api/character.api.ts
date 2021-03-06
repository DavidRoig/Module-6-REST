import { CharacterApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities } from './hotel.mock-data';
import Axios from 'axios';
import { EnvConstants } from 'core/env.constants';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  return Axios.request({
    method: 'GET',
    url: `${EnvConstants.apiUrl}${id}`,
  }).then((response) => response?.data, console.error);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (
  character: CharacterApi
): Promise<boolean> => {
  return true;
};
