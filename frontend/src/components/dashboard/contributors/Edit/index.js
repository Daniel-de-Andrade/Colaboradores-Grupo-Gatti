import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  ConteudoForm,
  ConteudoTitulo,
  Titulo,
  BotaoAcao,
  ButtonInfo,
  AlertSuccess,
  AlertDanger,
  Form,
  Label,
  Input,
  ButtonSuccess,
  GroupInputLabel,
} from "../../../../styles";

const EditContributor = (props) => {
  const [id] = useState(props.id);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [ramal, setRamal] = useState("");
  const [admin, setAdmin] = useState("");
  const [departament_id, setDepartament_id] = useState("");
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const getContributor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/contributors/${id}`
        );
        setFirst_name(response.data.first_name);
        setLast_name(response.data.last_name);
        setEmail(response.data.email);
        setRamal(response.data.ramal);
        setAdmin(response.data.admin);
        setDepartament_id(response.data.departament_id);
      } catch (error) {
        console.log(error);
      }
    };
    getContributor();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/contributors/${id}`,
        {
          first_name,
          last_name,
          email,
          ramal,
          admin,
          departament_id,
        }
      );
      // window.location.pathname = "/contributors";
      navigate("/contributors");
      if (response.error) {
        setStatus({
          type: "error",
          message: response.message,
        });
      } else {
        setStatus({
          type: "success",
          message: response.message,
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Colaborador não cadastrado, tente novamente.",
      });
    }
  };

  return (
    <Container>
      <ConteudoForm>
        <ConteudoTitulo>
          <Titulo>Cadastrar Colaborador</Titulo>
          <BotaoAcao>
            <Link to="/contributors">
              <ButtonInfo>Colaboradores</ButtonInfo>
            </Link>
          </BotaoAcao>
        </ConteudoTitulo>
        {status.type === "error" ? (
          <AlertDanger>{status.message}</AlertDanger>
        ) : (
          ""
        )}
        {status.type === "success" ? (
          <AlertSuccess>{status.message}</AlertSuccess>
        ) : (
          ""
        )}
        <Form onSubmit={handleUpdate}>
          <GroupInputLabel>
            <Label htmlFor="first_name">Nome</Label>
            <Input
              type="text"
              name="first_name"
              required
              placeholder="Primeiro nome"
              value={first_name}
              onChange={(e) => {
                setFirst_name(e.target.value);
              }}
            />
          </GroupInputLabel>
          <GroupInputLabel>
            <Label htmlFor="last_name">Sobrenome</Label>
            <Input
              type="text"
              name="last_name"
              required
              placeholder="Sobrenome"
              value={last_name}
              onChange={(e) => {
                setLast_name(e.target.value);
              }}
            />
          </GroupInputLabel>
          <GroupInputLabel>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </GroupInputLabel>
          <GroupInputLabel>
            <Label htmlFor="ramal">Ramal</Label>
            <Input
              type="text"
              name="ramal"
              required
              placeholder="Número de ramal do telefone do departamento"
              value={ramal}
              onChange={(e) => {
                setRamal(e.target.value);
              }}
            />
          </GroupInputLabel>
          <GroupInputLabel>
            <Label htmlFor="admin">Administrador</Label>
            <Input
              type="text"
              name="admin"
              required
              placeholder="É adminstrador do sistema?"
              value={admin}
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
            />
          </GroupInputLabel>
          <GroupInputLabel>
            <Label htmlFor="departament_id">Id do Departamento</Label>
            <Input
              type="text"
              name="departament_id"
              required
              placeholder="Id do departamento do colaborador"
              value={departament_id}
              onChange={(e) => {
                setDepartament_id(e.target.value);
              }}
            />
          </GroupInputLabel>
          <ButtonSuccess type="submit">Editar</ButtonSuccess>
        </Form>
      </ConteudoForm>
    </Container>
  );
};

export default EditContributor;
