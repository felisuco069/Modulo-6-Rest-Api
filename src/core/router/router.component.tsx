import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CharacterCollectionScene />} />
        <Route path="/characters" element={<CharacterCollectionScene />} />
        <Route path="/characters/:id" element={<CharacterScene />} />
      </Routes>
    </HashRouter>
  );
};
