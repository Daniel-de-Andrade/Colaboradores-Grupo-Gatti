import React, { useState } from "react";
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
} from "../../../../styles";

const CreateContributor = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [ramal, setRamal] = useState("");
  const [departament_id, setDepartament_id] = useState("");
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // const valorInput = (e) =>
  //   setContributor({ ...contributor, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !first_name ||
        !last_name ||
        !email ||
        !ramal ||
        !admin ||
        !departament_id
      ) {
        throw Error("Favor preencher o formulário.");
      }
      const response = await axios.post("http://localhost:5000/contributors", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        ramal: ramal,
        admin: admin,
        departament_id: departament_id,
      });
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
        <Form onSubmit={handleSubmit}>
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
          <Label htmlFor="ramal">Ramal</Label>
          <Input
            type="text"
            name="ramal"
            required
            placeholder="Ramal do telefone"
            value={ramal}
            onChange={(e) => {
              setRamal(e.target.value);
            }}
          />
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
          <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
        </Form>
      </ConteudoForm>
    </Container>
  );
};

export default CreateContributor;
