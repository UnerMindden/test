import "./RatesContact.css"
import "../App.css"
import { Col, FloatingLabel, Form, Row, Tab, Tabs } from 'react-bootstrap';
import StarRating from './StarRating';


const RatesContact = () => {
    return (
        <Col xs sm md={10} lg className="rtc mx-2 my-2" style={{ "backgroundColor": "white", "borderRadius": "20px", "padding": "20px", "margin": "0 2vh" }}>
            <Row lg>
                <Tabs className="mb-3">
                    <Tab eventKey="Rating" title="Оценки">
                        <Row>
                            <Col>Общий уровень</Col>
                            <Row><StarRating /></Row>
                        </Row>
                        <Row>
                            <Col>Оценка коллег</Col>
                            <Row><StarRating /></Row>
                        </Row>
                    </Tab>
                    <Tab eventKey="Chat" title="Чат">

                    </Tab>
                    <Tab eventKey="Contact" title="Контакты">
                        <Row>
                            <Row>
                                <Col>
                                    <p className="green">Email</p>
                                    <p>ebox@mail.ru</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="green">ФИО</p>
                                    <p>Cool Hacker</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="green">Дата рождения</p>
                                    <p>1990-01-01</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center">
                                <Row>
                                    <Col>
                                        <p className="green">Номер телефона</p>
                                    </Col>
                                </Row>
                                <Col lg={8}>
                                    <p>
                                        <Form.Control type="email" placeholder="+7 999 999-77-00" />
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col><a href="#"><p className="green">Скачать резюме</p></a></Col>
                            </Row>
                        </Row>
                    </Tab>
                </Tabs>
            </Row>

        </Col>
    );
};

export default RatesContact;