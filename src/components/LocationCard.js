import React from 'react';
import { Segment, Label, Header } from 'semantic-ui-react';

const LocationCard = (props) => {
  const residentCount = props.residents.length;
  const ordinal = props.residents.length > 1 ? 's' : '';

  return (
    <Segment padded>
      <Label attached="bottom right">{residentCount} Resident{ordinal}</Label>
      <Header>{props.name}</Header>
      <Header sub>{props.type} - {props.dimension}</Header>
    </Segment>
  );
}

export default LocationCard;
