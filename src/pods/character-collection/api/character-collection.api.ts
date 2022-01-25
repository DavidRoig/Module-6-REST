import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';
let hotelCollection = []; // DRH TO DELETE

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> =>
  axios({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character', // DRH REPLACE BY CONST
  }).then((response) => response?.data?.results, console.error);

export const deleteHotel = async (id: string): Promise<boolean> => {
  hotelCollection = hotelCollection.filter(
    (character) => `${character.id}` !== id
  );
  return true;
};
