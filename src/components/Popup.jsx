import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import "../App.css"

function Popup({ show, handleClose, accept, decline, collegue }) {

    return (
        <div>
            {collegue
                ?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Отправить коллеге</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-input">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="Email"
                                />
                            </InputGroup>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            ОТПРАВИТЬ
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Отправить письмо</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <div className="modal-select">
                                <Form.Select>
                                    <option>mail</option>
                                    <option>mail</option>
                                    <option>mail</option>
                                </Form.Select>
                            </div>
                            <div className="modal-input">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        defaultValue={decline ? decline : accept}
                                    />
                                </InputGroup>
                            </div>
                            <div className="modal-textarea">
                                <InputGroup>
                                    <Form.Control defaultValue={decline ? "Вы не приняты!": "Вы приняты"} as="textarea" />
                                </InputGroup>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            ОТПРАВИТЬ
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            ОТМЕНА
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
}

export default Popup;