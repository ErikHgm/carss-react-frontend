import React from "react";
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

  return <div>Car ad placeholder</div>;
};

export default Car;
