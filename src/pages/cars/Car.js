import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
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
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/cars/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/cars/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Car}>
      <Card.Body>
        <Link to={`/cars/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
      </Card.Body>

      <Card.Body>
        <Row className="mb-2 text-left">
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-bookmark"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Brand</span>
                <span className="font-weight-bold text-capitalize">
                  {brand}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-road"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Mileage</span>
                <span className="font-weight-bold">{mileage}</span>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-calendar-days"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Year</span>
                <span className="font-weight-bold">{year}</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-5 text-left">
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-gears"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Gearbox</span>
                <span className="font-weight-bold text-capitalize">
                  {gearbox}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i class="fa-solid fa-gas-pump"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Fueltype</span>
                <span className="font-weight-bold text-capitalize">
                  {fueltype}
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="d-inline-block" xs={3}>
                <i className="fa-solid fa-money-bill-1-wave"></i>
              </Col>
              <Col className="d-inline-block" xs={9}>
                <span className="d-block text-muted">Price</span>
                <span className="font-weight-bold">{price}</span>
              </Col>
            </Row>
          </Col>
        </Row>

        {title && <Card.Title className="text-left">{title}</Card.Title>}
        {description && (
          <Card.Text className="text-left mb-5">{description}</Card.Text>
        )}

        <Media className="align-items-center justify-content-around">
          <span>Sold by:</span>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>Added: {updated_at}</span>
            {is_owner && carPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Car;
