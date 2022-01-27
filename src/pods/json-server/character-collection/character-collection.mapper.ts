import { createRandomRating } from 'common/helpers';
import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterEntityVm => ({
  ...character,
  id: `${character?.id}`,
  picture: character?.image,
  address: character?.location,
});
