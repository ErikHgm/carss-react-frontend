import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";
import Car from "./Car";

// Component used to create the complete carpage
// Imports the Car and Popularprofiles component
function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: car }] = await Promise.all([
          axiosReq.get(`/cars/${id}`),
        ]);
        setCar({ results: [car] });
      } catch (err) {
      //console.log(err);
    }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Car {...car.results[0]} setCars={setCar} carPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default CarPage;
