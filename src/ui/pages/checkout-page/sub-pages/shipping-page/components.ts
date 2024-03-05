import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* margin-bottom: 100px; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h4 {
    width: 100%;
    text-align: left;
    margin: 10px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    input {
      height: 40px;
      padding: 0px 5px;
    }
    select {
      height: 40px;
    }
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SmallWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const LongWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
