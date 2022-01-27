import { createRandomRating } from 'common/helpers';
import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: `${character?.id}`,
  picture: `${character?.image}`,
  name: character?.name,
  description: `${character?.name} is ${character?.species}, ${character?.gender} and currently is ${character?.status}`,
  rating: createRandomRating(),
  address: character?.origin?.name,
});
