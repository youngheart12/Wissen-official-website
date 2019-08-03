import React from 'react';
import { Card, Button, CardTitle, CardText,Col } from 'reactstrap';

const singleEvent = (props) => {
  return (
    
      <Col md="4">
        <Card body>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.details}</CardText>
          <p>{props.startDate} to {props.endDate}</p>
          <Button>{props.tag}</Button>
        </Card>
      </Col>
    

  );
};

export default singleEvent;