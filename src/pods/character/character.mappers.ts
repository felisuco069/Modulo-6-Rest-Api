import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character =>
  Object.keys(character).includes('bestSentences')
    ? {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
        },
        location: {
          name: character.location.name,
        },
        image: character.image,
        bestSentences: character.bestSentences,
      }
    : {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
        },
        location: {
          name: character.location.name,
        },
        image: character.image,
      };

export const mapCharacterFromVmToApi = (
  character: apiModel.Character,
  quote: string
): apiModel.Character => ({
  ...character,
  bestSentences: [...character.bestSentences, quote],
});
