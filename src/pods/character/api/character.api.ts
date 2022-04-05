import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';
const url2 = '/api/results';

export const getCharacter = (
  id: string,
  isMockApi: boolean
): Promise<Character> => {
  if (!isMockApi) {
    return Axios.get(`${url2}/${id}`).then((response) => response.data); // return characterCollection;
  } else {
    return Axios.get(`${url}/${id}`).then((response) => response.data);
  }
};

export const saveCharacter = async (
  character: Character,
  id: string
): Promise<boolean> => {
  Axios.put(`${url2}/${id}`, character);
  return true;
};
