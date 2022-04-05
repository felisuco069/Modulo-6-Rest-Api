import * as React from 'react';
import { CharacterVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);

  const loadCharacterCollection = (isMockApi: boolean) => {
    getCharacterCollection(isMockApi).then((result: any[]) => {
      console.log(result);
      setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    });
  };
  console.log(characterCollection);
  return { characterCollection, loadCharacterCollection };
};
