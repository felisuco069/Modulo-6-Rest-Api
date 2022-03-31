import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterVm => ({
  id: character.id,
  image: character.image,
  name: character.name,
  species: character.species,
  status: character.status,
  gender: character.gender,
  origin: {
    name: character.origin.name,
  },
});
