import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  empty-cells: hide;

  h4 {
    width: 100%;
    text-align: left;
    margin: 10px 0px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  empty-cells: hide;
`;

export const TableHead = styled.thead`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  font-weight: 700;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => `${props.theme.colors.secondary}50`};
  }
`;

export const TableData = styled.td`
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableOrderTotal = styled.tr`
  background-color: ${(props) => `${props.theme.colors.secondary}50`};
  td {
    font-weight: 600;
  }
  &:empty {
    display: none;
  }
`;

export const EditButton = styled.button`
  padding: 10px;
  cursor: pointer;
`;
