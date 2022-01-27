import { createRandomRating } from 'common/helpers';
import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.Character => ({
  ...character,
  id: `${character.id}`,
  address: character.location,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterApi =>
  ({
    ...character,
    id: +character.id,
    location: character.address,
  } as apiModel.CharacterApi);
