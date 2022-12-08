import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function CarCreateForm() {
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
        <Form.Select
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
        </Form.Select>
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
          step="1.00"
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
        <Form.Select
          type="text"
          name="gearbox"
          value={gearbox}
          onChange={handleChange}
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Fueltyp</Form.Label>
        <Form.Select
          type="text"
          name="fueltype"
          value={fueltype}
          onChange={handleChange}
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </Form.Select>
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
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Upload a Car image" />
              </Form.Label>
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
