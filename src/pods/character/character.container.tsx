import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';
import { MyContext } from 'core/context/myContext';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const { isMockApi } = React.useContext(MyContext);
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter(isMockApi)
  );
  const [characterVmToApi, setCharacterVmToApi] =
    React.useState<api.Character>();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleLoadCharacter = (id: string, isMockApi: boolean) => {
    api.getCharacter(id, isMockApi).then((character) => {
      setCharacterVmToApi(character);
      setCharacter(mapCharacterFromApiToVm(character));
    });
  };

  React.useEffect(() => {
    handleLoadCharacter(id, isMockApi);
  }, [isMockApi]);

  const handleSave = (quote: string) => {
    const apiCharacter = mapCharacterFromVmToApi(characterVmToApi, quote);
    const success = api.saveCharacter(apiCharacter, id);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
