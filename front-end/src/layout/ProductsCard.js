import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export const ProductsCard = (props) => {
  return (
    <div>
      <Card>
        <Card.Header>Category : {props.product.type}</Card.Header>
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>${props.product.price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
