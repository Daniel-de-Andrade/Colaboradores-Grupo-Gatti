import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "bootstrap";

const ModalDeleteContributors = ({ colaboradores, handleSuccess }) => {
  const { id } = colaboradores;
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:5000/contributors/${id}`
      );
      // if (response.erro) {
      //   setStatus({
      //     type: "erro",
      //     mensagem: response.mensagem,
      //   });
      //   console.log(response);
      // } else {
      //   setStatus({
      //     type: "success",
      //     mensagem: response.mensagem,
      //   });
      // }
      console.log(response.data);
      handleSuccess();
    } catch (error) {
      setStatus({
        type: "erro",
        mensagem: "Erro: cronograma não apagado com sucesso, tente mais tarde",
      });
    }
  };

  return (
    <Modal id="myModal" isOpen={true}>
      <header>{`Deseja deletar o colaborador ${colaboradores.first_name} ${colaboradores.last_name} de id ${colaboradores.id}?`}</header>
      <footer>
        <form onSubmit={handleDelete}>
          <Button type="submit" id="buttonNAV" className="btn btn-primary">
            Sim
          </Button>
        </form>
        <Button
          id="buttonNAV"
          className="btn btn-secondary"
          onClick={handleSuccess}
        >
          Não
        </Button>
      </footer>
    </Modal>
  );
};

export default ModalDeleteContributors;
