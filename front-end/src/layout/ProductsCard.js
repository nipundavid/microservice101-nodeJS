import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export const ProductsCard = (props) => {
  const buy = async (productDetails) => {
    let _product = {
      title: productDetails.product.title,
      description: productDetails.product.description,
      price: productDetails.product.price,
    };
    console.log(
      `${JSON.stringify(
        _product.title
      )} -> buy request raised from font-end app`
    );
    let res = await axios.post("http://localhost:5000/", _product);
    if (res.status == 200) {
      console.log("server response -> " + JSON.stringify(res.data));
    }
  };

  return (
    <div>
      <Card>
        <Card.Header>Category : {props.product.type}</Card.Header>
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>${props.product.price}</Card.Text>
          <Button variant="primary" onClick={() => buy(props)}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
