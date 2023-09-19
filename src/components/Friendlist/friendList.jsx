// import friends from '../data/friends.json';
import PropTypes from 'prop-types';
import {
  FriendContainer,
  FriendItem,
  Avatar,
  Name,
  IsOnline,
} from './friendList.styled';

export const FriendList = friends => {
  return (
    <FriendContainer>
      {friends.friends.map(friend => (
        <FriendItem key={friend.id}>
          <IsOnline $statusType={friend.isOnline}></IsOnline>
          <Avatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </FriendItem>
      ))}
    </FriendContainer>
  );
};

// function ceckIsOnline(friend.isOnline) {
//   friend.isOnline === true? ClassNames=IsOnline
// }

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
