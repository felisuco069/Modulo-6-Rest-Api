import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterDetail = (props: Props) => {
  const { character } = props;
  return (
    <Grid container spacing={1}>
      <List>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Status: " className={classes.item} />
          <ListItemText
            secondary={character.status === '' ? 'Unknown' : character.status}
            className={classes.itemState}
          />
        </ListItem>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Specie: " className={classes.item} />
          <ListItemText
            secondary={character.species === '' ? 'Unknown' : character.species}
            className={classes.itemState}
          />
        </ListItem>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Gender: " className={classes.item} />
          <ListItemText
            secondary={character.gender === '' ? 'Unknown' : character.gender}
            className={classes.itemState}
          />
        </ListItem>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Origin: " className={classes.item} />
          <ListItemText
            secondary={
              character.origin.name === '' ? 'Unknown' : character.origin.name
            }
            className={classes.itemState}
          />
        </ListItem>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Location: " className={classes.item} />
          <ListItemText
            secondary={
              character.location.name === ''
                ? 'Unknown'
                : character.location.name
            }
            className={classes.itemState}
          />
        </ListItem>
        <ListItem className={classes.rowItem}>
          <ListItemText secondary="Type: " className={classes.item} />
          <ListItemText
            secondary={character.type === '' ? 'Unknown' : character.type}
            className={classes.itemState}
          />
        </ListItem>
      </List>
    </Grid>
  );
};
