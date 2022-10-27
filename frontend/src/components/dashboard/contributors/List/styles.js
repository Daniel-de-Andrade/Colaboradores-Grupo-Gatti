import styled from "styled-components";

export const Title = styled.h1`
  margin: 10px;
  padding: 10px;
`;

export const Table = styled.table`
  margin: 15px;
  border-radius: 5px;

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  tr:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  th {
    background-color: rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    padding: 4px;
    height: 50px;
    overflow-wrap: anywhere;
    min-width: 50px;
  }

  td {
    text-align: center;
    font-size: 1rem;
    padding: 4px;
    height: 30px;
    overflow-wrap: anywhere;
  }
`;
