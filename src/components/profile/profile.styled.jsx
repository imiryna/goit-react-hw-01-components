import styled from '@emotion/styled';

export const Container = styled.div`
  width: 481px;
  height: 550px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: rgb(246, 244, 244);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 221px;
  height: 320px;
  padding-right: 22px;
  padding-left: 22px;
  padding-top: 36px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  outline: 1px solid rgb(246, 244, 244);
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`;
export const Avatar = styled.img`
  display: blok;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  margin-tip: 40px;
  margin-right: auto;
  margin-left: auto;
`;
export const Name = styled.p`
  margin-bottom: 10px;
  margin-top: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;
export const Location = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;
export const StatsList = styled.ul`
  display: flex;
  width: 225px;
  margin: 0 auto;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: 1px solid rgb(246, 244, 244);
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(246, 244, 244);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  flex: 1;
  text-align: center;
  background-color: rgb(226, 223, 223);
  padding: 10px;

  &:first-of-type {
    border-bottom-left-radius: 3px;
  }
  &:last-child {
    border: none;
    border-bottom-right-radius: 3px;
  }
`;
export const Label = styled.span`
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: grey;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
