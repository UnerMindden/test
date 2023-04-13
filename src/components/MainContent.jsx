import "../App.css"
import { Button, Col, FloatingLabel, Form, InputGroup, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Popup from './Popup';
import StarRating from './StarRating';

const MainContent = ({
    handleShowAccept,
    handleShowCollegue,
    handleShowDismiss,
    accept,
    decline,
    show,
    handleClose,
    collegue }) => {
    return (
        <>
            <Col className="mx-2 my-2 d-flex justify-content-center" xs sm={12} md={6} >
                <Row className="main-content d-flex align-items-center justify-content-center">
                    <Row xl className="main-buttons">
                        <Col>
                            <p className="contact-button"><Button variant="success" onClick={handleShowAccept}>Связаться</Button></p>
                        </Col>
                        <Col>
                            <p className="forward-button" onClick={handleShowCollegue}>Отправить</p>
                        </Col>
                        <Col>
                            <p className="deny-button" onClick={handleShowDismiss}>Отказать</p>
                        </Col>
                        <Col xs lg>
                            <p className="list-accept-or-not">
                                <Form.Select>
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
                        <Col className="d-flex justify-content-center align-items-center">
                            <player
                                id='myPlayer'
                                data-assets='["v-74113e4f-e1e6-45f1-ae44-f719c59d97ab"]'
                                data-app-id='a-a2cfdae0-ba54-013b-3e40-02c7c2460d41'>
                            </player>
                        </Col>
                    </Row>
                    <Row className="rates-candidate">
                        <Col>
                            <p>Оценка кандидата</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <div className="d-flex align-items-center justify-content-center">
                                <StarRating />
                            </div>
                        </Col>
                    </Row>
                    <Row lg={3} className="d-flex justify-content-center my-2">
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton>
                                <Col>
                                    1
                                </Col>
                            </ToggleButton>
                            <ToggleButton>
                                <Col>
                                    2
                                </Col>
                            </ToggleButton>
                            <ToggleButton>
                                <Col>
                                    3
                                </Col>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingTextarea2" label="Комментарий">
                                <Form.Control
                                    as="textarea"
                                    placeHolder="Комментарий"
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Row>
            </Col>

        </>
    );
};

export default MainContent;