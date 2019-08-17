import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = props => {
  const episodeCount = props.episode.length;
  const ordinal = episodeCount > 1 ? 's' : '';

  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span>
            {props.species} {props.gender}
          </span>
        </Card.Meta>
        <Card.Description>
          Known origin is {props.origin.name}. Last located at{' '}
          {props.location.name}. Current status is {props.status}.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="video" />
        {episodeCount} Episode{ordinal}
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
