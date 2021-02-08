import React, { useState } from "react";


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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const criarCard = () => setShow(true);

 
  function criarTicket(){

  }

  return (
    <>
      <body className="body">
        <div className="Navbar">
          <image className="Logo"></image>

          <button className="button" onClick={criarCard}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
            {"  "} Novo ticket
          </button>
        </div>
        <section class="Colunas">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: 20,
          }}
        >
         
          <div className="ColunaAbertos">
            <div className="Abertos">
            <h4 className="TituloAbertos">Abertos</h4>
            </div>
          </div>

          <div className="ColunaExecutados">
            <div className="Executados">
            <h4 className="TituloExecutados">Executados</h4>
            </div>
            
          </div>
          <div className="ColunaVistoriados">
            <div  className="Vistoriados">
            <h4 className="TituloVistoriados">Vistoriados</h4>
            </div>
          </div>
          <div className="ColunaArquivados">
            <div className="Arquivados">
            <h4 className="TituloArquivados">Arquivados</h4>
            </div>
          </div>
        </div>

</section>

<Modal className="modalCriarTicket" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title className="modalHeader">Novo Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="Descricao">
          Descrição<label style={{ color: "red" }}>*</label>
          </label>
          <input className="descricaoInput" type="text" name="Descrição" />
          <label className="Tipo">
          Tipo<label style={{ color: "red" }}>*</label>
          </label>
          <select className="TipoSelect">Tipo</select>
          <label className="Tipo">
          Responsável<label style={{ color: "red" }}>*</label>

          </label>
          <select className="TipoSelect">Responsável</select>

          <label className="Tipo">
          Imagem
          </label>
          <div className="image">
            <div className="inbox"></div>
            <p className="textContent">Arraste uma imagem para anexar ao ticket</p>
          </div>

      
        </Modal.Body>
        <Modal.Footer>
          
          <button className="buttonModal" onClick={criarTicket}>
            Criar ticket
          </button>
        </Modal.Footer>
      </Modal>
       
      </body>
    </>
  );
}

export default App;
