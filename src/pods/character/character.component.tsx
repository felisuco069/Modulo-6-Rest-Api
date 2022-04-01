import React from 'react';

import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CharacterDetail } from './character-card.detail';

interface Props {
  character: Character;
  //   cities: Lookup[];
  //   onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const {
    character,
    //  onSave
  } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Character Detail:
        </Typography>
      </CardContent>

      <CharacterDetail character={character} />
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};
