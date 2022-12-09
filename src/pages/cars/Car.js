import React from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Car = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    saved_count,
    save_id,
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
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && carPage && "..."}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Car;
