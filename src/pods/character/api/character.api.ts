import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';
// export const getCharacter = async (id: string): Promise<Character> => {
//   return mockCharacterCollection.find((c) => c.id === id);
// };
export const getCharacter = (id: string): Promise<Character> => {
  return Axios.get(`${url}/${id}`).then((response) => response.data); // return characterCollection;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

// export const saveCharacter = async (character: Character): Promise<boolean> => {
//   return true;
// };
