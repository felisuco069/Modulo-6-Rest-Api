import React from 'react';
import { Context } from './context.model';

export const MyContext = React.createContext<Context>({
  isMockApi: false,
  setIsMockApi: (value: boolean) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [isMockApi, setIsMockApi] = React.useState(false);

  return (
    <MyContext.Provider value={{ isMockApi, setIsMockApi }}>
      {children}
    </MyContext.Provider>
  );
};
