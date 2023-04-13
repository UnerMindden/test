import { useEffect, useState } from "react";
import { Badge, Col, Container, Nav, Navbar, Offcanvas, Row, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RatesContact from "./components/RatesContact";
import MainContent from "./components/MainContent";

function App() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "//www.cameratag.com/api/v15/js/cameratag.min.js"
    script.async = true;
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }

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
    
      <div className="header">
        <nav style={{ "marginBottom": "2vh" }}>
          <Navbar expand="md" bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
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
      </div>


      <Container id="container" className="d-flex align-items-center ">
        <Row>
          <MainContent
            handleShowAccept={handleShowAccept}
            handleShowCollegue={handleShowCollegue}
            handleShowDismiss={handleShowDismiss}
            accept={accept}
            decline={decline}
            show={show}
            handleClose={handleClose}
            collegue={collegue}
          />
          <Col className="candidate-list mx-2 my-2" lg={2} md={2} xs={{ order: "first" }} style={{ "backgroundColor": "white", "borderRadius": "20px", "padding": "20px" }} >
            <Row>
              <Col>
                <p>Кандидаты</p>
              </Col>
            </Row>
          </Col>

          <RatesContact />

        </Row>
      </Container>
    </>
  );
}

export default App;