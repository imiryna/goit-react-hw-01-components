import user from '../data/user.json';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  ListItem,
  Label,
  Quantity,
} from './profile.styled';

console.log(user);
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container class="profile">
      <Description class="description">
        <Avatar src={avatar} alt={username} class="avatar" />
        <Name class="name">{username}</Name>
        <Tag class="tag">{tag}</Tag>
        <Location class="location">{location}</Location>
      </Description>

      <StatsList class="stats">
        <ListItem>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{stats.likes}</Quantity>
        </ListItem>
      </StatsList>
    </Container>
  );
};

// Profile = {
//     username:{ user. },
//     tag={ tag },
//     location={location },
//     avatar={ avatar },
//     stats={
//         stats.shape({
//             followers:{stats.follower},
//             views: {stats.views},
//             likes: { stats.likes},
//         }),
//     },
// }
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
