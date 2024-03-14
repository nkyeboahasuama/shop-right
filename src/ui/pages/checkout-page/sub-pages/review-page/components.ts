import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h4 {
    width: 100%;
    text-align: left;
    margin: 10px 0px;
  }
`;

export const ReviewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin-bottom: 5px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const SignatureInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  margin-bottom: 10px;
`;
