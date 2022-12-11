import React from "react";
import {
  Card,
  ListGroup,
  Media,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Car.module.css";

const Car = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    brand,
    description,
    mileage,
    year,
    gearbox,
    fueltype,
    price,
    image,
    updated_at,
    carPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Car}>
      <Card.Body>
        <Link to={`/cars/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
      </Card.Body>

      <Card.Body>
        <ListGroup className="text-left">
          <ListGroup.Item>{brand}</ListGroup.Item>
          <ListGroup.Item>{mileage}</ListGroup.Item>
          <ListGroup.Item>{year}</ListGroup.Item>
          <ListGroup.Item>{gearbox}</ListGroup.Item>
          <ListGroup.Item>{fueltype}</ListGroup.Item>
          <ListGroup.Item>{price}</ListGroup.Item>
        </ListGroup>
        {title && <Card.Title className="text-left">{title}</Card.Title>}
        {description && (
          <Card.Text className="text-left">{description}</Card.Text>
        )}

        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <span>Sold by:</span>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>Added: {updated_at}</span>
            {is_owner && carPage && "..."}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Car;
