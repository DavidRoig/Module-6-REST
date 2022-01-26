import { CharacterApi } from './character.api-model';
import Axios from 'axios';
import { EnvConstants } from 'core/env.constants';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  return Axios.request({
    method: 'GET',
    url: `${EnvConstants.jsonServerUrl}${id}`,
  }).then((response) => response?.data, console.error);
};

export const saveCharacter = async (
  character: CharacterApi
): Promise<boolean> => {
  if (character.id > 0) {
    return Axios.patch(`${EnvConstants.jsonServerUrl}${character.id}`, {
      ...character,
    });
  }

  return Axios.post(EnvConstants.jsonServerUrl, {
    ...character,
  });
};
