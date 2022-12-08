import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Upload from "../../assets/upload.png";
import styles from "../../styles/CarCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useState } from "react";

function CarCreateForm() {
  const [carData, setCarData] = useState({
    title: "",
    brand: "",
    description: "",
    mileage: "",
    year: "",
    gearbox: "",
    fueltype: "",
    price: "",
    image:"",
  });
  const { title, brand, description, mileage, year, gearbox, fueltype, price, image } =
    carData;

  const handleChange = (event) => {
    setCarData({
      ...carData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setCarData({
        ...carData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
        >
          <option value="bmw">Bmw</option>
          <option value="mercedes-benz">Mercedes-benz</option>
          <option value="audi">Audi</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="volvo">Volvo</option>
          <option value="ford">Ford</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="nissan">Nissan</option>
          <option value="mazda">Mazda</option>
          <option value="tesla">Tesla</option>
          <option value="renault">Renault</option>
          <option value="peugeot">Peugeot</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mileage</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="100.00"
          name="mileage"
          value={mileage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="1.00"
          name="year"
          value={year}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gearbox</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="gearbox"
          value={gearbox}
          onChange={handleChange}
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Fueltype</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="fueltype"
          value={fueltype}
          onChange={handleChange}
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="1.00"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CarCreateForm;
