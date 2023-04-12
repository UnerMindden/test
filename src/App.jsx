import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Popup from "./components/Popup";
import StarRating from "./components/StarRating";

function App() {

  useEffect(() => {
    const script = document.createElement('script')

    script.src = "//www.cameratag.com/api/v15/js/cameratag.min.js"
    script.async = true;

    document.body.appendChild(script)

  }, [])

  const [show, setShow] = useState(false);
  const [accept, setAccept] = useState("")
  const [decline, setDecline] = useState("")
  const [collegue, setCollegue] = useState(false)

  const handleClose = () => {
    setAccept("")
    setDecline("")
    setCollegue(false)
    setShow(false)
  };

  const handleShowAccept = () => {
    setShow(true)
    setAccept("Компания #{} пригласила вас на собеседование")
  };

  const handleShowDismiss = () => {
    setShow(true)
    setDecline("К сожалению, мы не можем вас пригласить")
  }

  const handleShowCollegue = () => {
    setShow(true)
    setCollegue(true)
  }



  return (
    <>
      <header>
        <link rel='stylesheet' href='//www.cameratag.com/v15/css/cameratag.css' />
        <nav style={{ "marginBottom": "8vh" }}>
          <Navbar expand="sm" bg="dark" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">
                    МОИ ВАКАНСИИ <Badge bg="success">1</Badge>
                  </Nav.Link>
                  <Nav.Link>
                    ОТКЛИКИ <Badge bg="success">10</Badge>
                  </Nav.Link>
                  <Nav.Link>
                    МОИ ВИДЕОИНТЕРВЬЮ <Badge bg="success">2</Badge>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>АККАУНТ</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </header>
      <Container id="container">
        <Row>
          <Col sm={7} style={{ "margin": "0 2vh" }}>
            <Row className="main-content">
              <Row className="main-buttons">
                <Col sm={3}>
                  <p className="contact-button"><Button variant="success" onClick={handleShowAccept}>Связаться</Button></p>
                </Col>
                <Col sm={3}>
                  <p className="forward-button" onClick={handleShowCollegue}>Отправить</p>
                </Col>
                <Col sm={2}>
                  <p className="deny-button" onClick={handleShowDismiss}>Отказать</p>
                </Col>
                <Col xs={4}>
                  <p className="list-accept-or-not">
                    <Form.Select size="sm">
                      <option>В ожиданий</option>
                      <option>Отказ</option>
                      <option>Прошел</option>
                      <option>Принят на работу</option>
                    </Form.Select>
                  </p>
                </Col>
                
                
                <Popup accept={accept} decline={decline} show={show} handleClose={handleClose} collegue={collegue} />
                
              </Row>
              <Row>
                <Col style={{ "padding": "0 20vh" }} className="player">
                  <player id='myFirstPlayer' data-download='true' data-assets='["v-deb3c9e6-c92e-4673-91f7-88baa7793040"]'
                    data-aspectratio='automatic' data-app-id='a-a2cfdae0-ba54-013b-3e40-02c7c2460d41'></player>
                </Col>
              </Row>
              <Row className="rates-candidate">
                <Col>
                  <p>Оценка кандидата</p>
                </Col>
              </Row>
              <Row style={{ "padding": "0 40vh" }}>
                <Col>
                  <StarRating />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>

                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup>
                    <Form.Control as="textarea" defaultValue="Первый коммент" placeHolder="Комментарий">
                    </Form.Control>
                  </InputGroup>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col style={{ "backgroundColor": "white", "borderRadius": "20px", "padding": "5vh" }} sm={2} xs={{ order: "first" }}>
            <Row>
              <Col>
                <p>Кандидаты</p>
              </Col>
            </Row>
          </Col>


          <Col style={{ "backgroundColor": "white", "borderRadius": "20px", "padding": "5vh" }}>
            <Row>
              <Col sm={4}>
                <p>Оценки</p>
                <Row style={{ "width": "30vh" }} >
                  <Col>Общий уровень</Col>
                  <Row><StarRating /></Row>
                </Row>
                <Row style={{ "width": "30vh" }} >
                  <Col>Оценка коллег</Col>
                  <Row><StarRating /></Row>
                </Row>
              </Col>
              <Col>
                <p>Чат</p>
              </Col>
              <Col>
                <p>Контакты</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;