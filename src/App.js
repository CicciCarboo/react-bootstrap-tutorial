import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <header className="App-header">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
          </Breadcrumb>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formInput">
                  <Form.Label>Leave a message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Hello...."
                  ></Form.Control>
                  <Form.Text>
                    Write something in the white area above.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>What's your e-mail?</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="my@email.com"
                  ></Form.Control>
                  <Form.Text>
                    Enter your secret email address, pleazzee.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card className="card mb-3">
            <Card.Img src="https://tse4.mm.bing.net/th?id=OIP.obHC2N4TbnHFmUeUgQm-lQHaEH&pid=Api&P=0&w=284&h=157" />
            <Card.Body>
              <Card.Title>Card example</Card.Title>
              <Card.Text>My card text, bla, bla, bla blah....</Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
          <Alert variant="warning">This is a Alert text field</Alert>
          <Button>Test button</Button>
        </header>
      </Container>
    </div>
  );
}

export default App;
