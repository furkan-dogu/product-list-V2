import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ product }) => {
  const {price, title, image} = product
  const [heart, setHeart] = useState(false)

  const handleFavorite = () => {
    setHeart(!heart)
  }
  return (
    <Col xl={3} lg={4} md={6}>
      <Card className="rounded-2 m-auto card" role="button">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>{price} $</Card.Title>
          <MdFavorite size={30} className={heart ? "active-color" : "passive-color"} onClick={handleFavorite}/>
        </Card.Header>
        <Card.Img variant="top" src={image} className="player-logo" />

        <Card.Footer className="card__over">
          <Card.Title>{title}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
