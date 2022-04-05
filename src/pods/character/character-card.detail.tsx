import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { Character } from './character.vm';
import * as classes from './character.styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { MyContext } from 'core/context/myContext';

interface Props {
  character: Character;
  onSave: (quote: string) => void;
}

export const CharacterDetail = (props: Props) => {
  const { character, onSave } = props;

  const { isMockApi } = React.useContext(MyContext);

  const [quote, setQuote] = React.useState<string>('');
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
        {!isMockApi ? (
          <div>
            <ListItem className={classes.rowItem}>
              <ListItemText
                secondary="BestSentences: "
                className={classes.item}
              />
            </ListItem>
            {character.bestSentences.length > 0 ? (
              character.bestSentences.map((sentence) => (
                <ListItem className={classes.rowItem}>
                  <ListItemText
                    secondary={sentence}
                    className={classes.itemState}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem className={classes.rowItem}>
                <ListItemText
                  secondary="Unknown"
                  className={classes.itemState}
                />
              </ListItem>
            )}

            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Write your best sentences"
              defaultValue={quote}
              style={{ height: '8rem' }}
              className={classes.input}
              onChange={(e) => setQuote(e.target.value)}
            />
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  console.log('quote ', quote);
                  console.log('character ', character);
                  onSave(quote);
                }}
              >
                Add Quote
              </Button>
            </CardActions>
          </div>
        ) : null}
      </List>
    </Grid>
  );
};
