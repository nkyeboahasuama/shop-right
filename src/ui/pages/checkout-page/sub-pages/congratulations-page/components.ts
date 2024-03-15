import styled from "styled-components";
import { Typography } from "../../../../sharedComponents/atoms";

export const Container = styled.div`
  width: 100%;
`;

export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px;

  width: 100%;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  margin-bottom: 40px;
  text-align: center;
`;

export const ListItem = styled.li`
  margin-left: 20px;
`;
