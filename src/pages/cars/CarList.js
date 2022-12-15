import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Car.module.css";

const CarList = (props) => {
  const {
    id,
    owner,
    profile_id,
    title,
    mileage,
    year,
    gearbox,
    fueltype,
    price,
    image,
    updated_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Car}>
      <Card.Body>
        <Row>
          <Col xs={5}>
            <Link to={`/cars/${id}`}>
              <Card.Img src={image} alt={title} />
            </Link>
          </Col>

          <Col xs={7}>
            <Row>
              <Col className="text-right">
                <span>{updated_at}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                {title && (
                  <Card.Title className="text-left">{title}</Card.Title>
                )}
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-between">
                <div className="font-weight-bold">
                  <i className="fa-solid fa-calendar-days"></i>
                  {year}
                </div>
                <div className="font-weight-bold">
                  <i className="fa-solid fa-road"></i>
                  {mileage}
                </div>
                <div className="font-weight-bold text-capitalize">
                  <i className="fa-solid fa-gears"></i>
                  {gearbox}
                </div>
                <div className="font-weight-bold text-capitalize">
                  <i className="fa-solid fa-gas-pump"></i>
                  {fueltype}
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-between mt-1">
                <div className="font-weight-bold">{price}€</div>
                <div>
                  <span>Seller:&nbsp;</span>
                  <Link to={`/profiles/${profile_id}`}>{owner}</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CarList;
