import styled from '@emotion/styled';

export const FriendContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 481px;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(242, 241, 241);
`;
export const FriendItem = styled.li`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;
export const IsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$statusType ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  outline: 1px solid rgb(246, 244, 244);
`;
export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  color: #181818;
`;
