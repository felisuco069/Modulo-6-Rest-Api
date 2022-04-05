import Axios from 'axios';

import { CharacterApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api';
const url2 = '/api';

export const getCharacterCollection = (
  isMockApi: boolean
): Promise<CharacterApi[]> => {
  if (!isMockApi) {
    return Axios.get(`${url2}/results`).then((response) => response.data); // return characterCollection;
  } else {
    return Axios.get(`${url}/character`).then(
      (response) => response.data['results']
    ); // return characterCollection;
  }
};
