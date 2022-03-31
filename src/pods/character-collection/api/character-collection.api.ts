import Axios from 'axios';

import { CharacterApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = (): Promise<CharacterApi[]> => {
  return Axios.get(`${url}/character`).then(
    (response) => response.data['results']
  ); // return characterCollection;
};
