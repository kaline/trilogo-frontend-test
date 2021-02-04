import React from "react";

import {
  Row,
  Button,
  ToggleButton,
  Table,
  InputGroup,
  FormControl,
  Col,
  Modal,
  Spinner,
  Form,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faCogs,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

function criarCard() {}
function App() {
  return (
    <>
      <Button className="style-font" onClick={criarCard}>
        <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
        Adicionar
      </Button>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
