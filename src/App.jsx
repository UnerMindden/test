import { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Popup from "./components/Popup";

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

  const handleClose = () => {
    setAccept("")
    setDecline("")
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



  return (
    <>
      <header>
        <link rel='stylesheet' href='//www.cameratag.com/v15/css/cameratag.css' />
        <nav>
          <ul>
            <li>МОИ ВАКАНСИИ</li>
            <li>ОТКЛИКИ</li>
            <li>МОИ ВИДЕОИНТЕРВЬЮ</li>
            <li>АККАУНТ</li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="main-content">
          <div className="button-list">
            <ul>
              <li className="contact-button"><Button variant="success" onClick={handleShowAccept}>Связаться</Button></li>
              <li className="forward-button" >Отправить</li>
              <li className="deny-button" onClick={handleShowDismiss}>Отказать</li>
              <li className="list-accept-or-not">
                <Form.Select size="sm">
                  <option>В ожиданий</option>
                  <option>Отказ</option>
                  <option>Прошел</option>
                  <option>Принят на работу</option>
                </Form.Select>
              </li>
            </ul>

            <Popup accept={accept} decline={decline} show={show} handleClose={handleClose} />
          </div>
          <div>
            <player id='myFirstPlayer' data-download='true' data-assets='["v-deb3c9e6-c92e-4673-91f7-88baa7793040"]'
              data-aspectratio='automatic' data-app-id='a-a2cfdae0-ba54-013b-3e40-02c7c2460d41'></player>
          </div>
          <div className="rate">
            <div>
              <p>Оценка кандидата</p>
            </div>
            <div>

            </div>
            <div className="comments">
              <textarea>
              </textarea>
            </div>
          </div>
        </div>
        <div className="candidate-list">
          <div>
            <p>Кандидаты</p>
          </div>
        </div>
        <div className="rates-chat-contact">
          <div>
            <ul>
              <li>Оценки</li>
              <li>Чат</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;