import friends from '../data/friends.json';
import PropTypes from 'prop-types';
import { FriendContainer } from './friendList.styled';

export const FriendList = friends => {
  return (
    <FriendContainer class="friend-list">
      {friends.friends.map(friend => (
        <li class="item" id={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </FriendContainer>
  );
};

// FriendList.PropTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };
