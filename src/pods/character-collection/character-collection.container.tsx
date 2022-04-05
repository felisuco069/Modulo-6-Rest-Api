import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { MyContext } from 'core/context/myContext';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const { isMockApi } = React.useContext(MyContext);
  React.useEffect(() => {
    loadCharacterCollection(isMockApi);
  }, [isMockApi]);

  return (
    <CharacterCollectionComponent characterCollection={characterCollection} />
  );
};
