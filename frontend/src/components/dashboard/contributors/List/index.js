import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalDeleteContributors from "../../../modals/DeleteContributors";
import { Title, Table } from "./styles.js";
import { Link } from "react-router-dom";
import {
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
  ButtonSuccess,
} from "../../../../styles";
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";

const ListContributors = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [selectedColaboradores, setSelectedColaboradores] = useState({});
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const getContributors = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/contributors");
      setColaboradores(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContributors();
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
    getContributors();
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

      <Link to="/contributors/create">
        <ButtonSuccess>Adicionar</ButtonSuccess>
      </Link>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Admin</th>
            <th>Departamento</th>
            <th>E-mail</th>
            <th>Ramal</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.first_name}</td>
              <td>{colaborador.last_name}</td>
              <td>{colaborador.admin}</td>
              <td>{colaborador.departament.name}</td>
              <td>{colaborador.email}</td>
              <td>{colaborador.ramal}</td>
              <td>
                <Link to={"/contributors/view/" + colaborador.id}>
                  <ButtonPrimary>
                    <MdVisibility size={24} />
                  </ButtonPrimary>
                </Link>
                <Link to={"/contributors/edit/" + colaborador.id}>
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
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListContributors;
