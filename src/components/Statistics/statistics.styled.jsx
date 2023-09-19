import styled from '@emotion/styled';

export const Container = styled.section`
  width: 481px;
  height: 150px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;

  padding: 20px;
  background-color: rgb(206, 213, 222);
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  background-color: rgb(255, 255, 255);
  width: 380px;
  padding: 24px 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: 1px solid rgb(246, 244, 244);
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 72px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);

  &:first-of-type {
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border: none;
    border-bottom-right-radius: 5px;
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
`;
export const Percentage = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;
