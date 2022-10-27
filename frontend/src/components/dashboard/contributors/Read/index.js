import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDeleteContributors from "../../../modals/DeleteContributors";
import { Title, Table } from "./styles.js";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
  BotaoAcao,
  ButtonInfo,
  ConteudoTitulo,
  Titulo,
} from "../../../../styles";
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";

const ReadContributor = (props) => {
  const [id] = useState(props.id);
  const [colaborador, setColaborador] = useState([]);
  const [selectedColaboradores, setSelectedColaboradores] = useState({});
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getContributor = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/contributors/${id}`
      );
      setColaborador(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContributor();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  const openModalDeletar = (id, first_name, last_name) => {
    console.log(id, first_name, last_name);
    setIsModalDeletarVisible(true);
    setSelectedColaboradores({ id, first_name, last_name });
  };

  const handleDeleteSuccess = () => {
    setIsModalDeletarVisible(false);
    navigate("/contributors");
  };

  return (
    <>
      {isModalDeletarVisible ? (
        <ModalDeleteContributors
          colaboradores={selectedColaboradores}
          handleSuccess={handleDeleteSuccess}
        />
      ) : null}
      <Title>Colaboradores Grupo Gatti</Title>
      <ConteudoTitulo>
        <Titulo>Colaborador {colaborador.first_name} </Titulo>
        <BotaoAcao>
          <Link to="/contributors">
            <ButtonInfo>Colaboradores</ButtonInfo>
          </Link>
        </BotaoAcao>
      </ConteudoTitulo>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Departamento</th>
            <th>E-mail</th>
            <th>Ramal</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{colaborador.first_name}</td>
            <td>{colaborador.last_name}</td>
            <td>{colaborador.departament}</td>
            <td>{colaborador.email}</td>
            <td>{colaborador.ramal}</td>
            <td>
              <Link to={"/contributors/view/" + colaborador.id}>
                <ButtonPrimary>
                  <MdVisibility size={24} />
                </ButtonPrimary>
              </Link>
              <Link to={`/contributors/edit/${colaborador.id}`}>
                <ButtonWarning>
                  <MdEdit size={24} />
                </ButtonWarning>
              </Link>
              <Link
                to="#*"
                onClick={() =>
                  openModalDeletar(
                    colaborador.id,
                    colaborador.first_name,
                    colaborador.last_name
                  )
                }
              >
                <ButtonDanger>
                  <MdDelete size={24} />
                </ButtonDanger>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ReadContributor;
