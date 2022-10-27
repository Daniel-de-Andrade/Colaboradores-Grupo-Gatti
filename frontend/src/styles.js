import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ConteudoTitulo = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 12px 0 20px;
`;

export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 23px;
`;

export const BotaoAcao = styled.section`
  margin: 25px 0px;
`;

export const ButtonSuccess = styled.button`
  background-color: #fff;
  color: #198754;
  padding: 8px 12px;
  margin-top: 18px;
  margin-bottom: 18px;
  /* margin-left: 20px; */
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    background-color: #157347;
    color: #fff;
  }
`;

export const ButtonPrimary = styled.button`
  background-color: #fff;
  color: #0d6efd;
  padding: 5px 8px;
  border: 1px solid #0d6efd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #0d6efd;
    color: #fff;
  }
`;

export const ButtonSecondary = styled.button`
  background-color: #fff;
  color: #6c757d;
  padding: 5px 8px;
  border: 1px solid #6c757d;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #6c757d;
    color: #fff;
  }
`;

export const ButtonWarning = styled.button`
  background-color: #fff;
  color: #ffc107;
  padding: 5px 8px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ffc107;
    color: #fff;
  }
`;

export const ButtonDanger = styled.button`
  background-color: #fff;
  color: #dc3545;
  padding: 5px 8px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #dc3545;
    color: #fff;
  }
`;

export const ButtonInfo = styled.button`
  background-color: #fff;
  color: #0dcaf0;
  padding: 6px 9px;
  border: 1px solid #0dcaf0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    background-color: #31d2f2;
    color: #fff;
  }
`;

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 20px 0;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertDanger = styled.p`
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
`;

export const ConteudoForm = styled.section`
  max-width: 960px;
  padding: 10px 30px 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin: 0px auto;
`;

export const Label = styled.label`
  width: 50%;
  padding: 5px;
  margin-top: 6px;
  margin-bottom: 1px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 1px;
  margin-bottom: 6px;
  resize: vertical;
`;

export const GroupInputLabel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  margin-left: 6px;
`;
