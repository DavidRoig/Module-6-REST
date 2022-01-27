import { createRandomRating } from 'common/helpers';
import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.Character => ({
  ...character,
  id: `${character.id}`,
  name: character.name,
  description: `${character?.name} is ${character?.species}, ${character?.gender} and currently is ${character?.status}`,
  rating: createRandomRating(),
  address: character?.origin?.name,
  city: character?.location?.name,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterApi =>
  ({
    ...character,
    id: +character.id,
    status: '',
    gender: '',
    image: '',
    location: { name: character.city },
    origin: { name: character.address },
    species: '',
  } as apiModel.CharacterApi);
