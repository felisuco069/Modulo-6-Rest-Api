import * as React from 'react';
import { CharacterVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result: any[]) => {
      setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    });
  };
  return { characterCollection, loadCharacterCollection };
};
