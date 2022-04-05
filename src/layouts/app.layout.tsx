import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as classes from './app.layout.styles';
import Button from '@material-ui/core/Button';
import { MyContext } from 'core/context/myContext';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { isMockApi, setIsMockApi } = React.useContext(MyContext);

  const handleClick = () => {
    setIsMockApi(!isMockApi);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          {!isMockApi ? (
            <Button
              variant="contained"
              className={classes.realApiButton}
              onClick={handleClick}
            >
              Api Rick and Morty
            </Button>
          ) : (
            <Button
              variant="contained"
              className={classes.mockApiButton}
              onClick={handleClick}
            >
              Mock Api Rick and Morty
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
