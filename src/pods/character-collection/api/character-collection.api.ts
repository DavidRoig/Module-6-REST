import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> =>
  axios({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character', // DRH REPLACE BY CONST
  }).then((response) => response?.data?.results, console.error);

export const deleteCharacter = async (id: string): Promise<boolean> => {
  throw new Error('Ops...this method is not implemented. ');
};
