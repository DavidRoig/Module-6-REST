import axios from 'axios';
import { EnvConstants } from 'core/env.constants';
import { ApiResultPaginated } from '.';

export const getCharacterCollection = async (
  term: string,
  page: number
): Promise<ApiResultPaginated> =>
  axios({
    method: 'GET',
    url: `${EnvConstants.apiUrl}?page=${page}&name=${term}`,
  }).then((response) => {
    return {
      data: response?.data?.results,
      total: response?.data?.info?.pages,
    } as ApiResultPaginated;
  });

export const deleteCharacter = async (id: string): Promise<boolean> => {
  throw new Error('Ops...this method is not implemented. ');
};
