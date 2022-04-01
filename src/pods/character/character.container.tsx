import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter } from './character.vm';
import { Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams();

  const handleLoadCharacter = (id: string) => {
    api.getCharacter(id).then((character) => {
      setCharacter(mapCharacterFromApiToVm(character));
    });
  };

  React.useEffect(() => {
    handleLoadCharacter(id);
  }, []);
  // const handleSave = async (character: Character) => {
  //   const apiCharacter = mapCharacterFromVmToApi(character);
  //   const success = await api.saveCharacter(apiCharacter);
  //   if (success) {
  //     history.goBack();
  //   } else {
  //     alert('Error on save character');
  //   }
  // };

  return (
    <CharacterComponent
      character={character}
      // onSave={handleSave}
    />
  );
};
