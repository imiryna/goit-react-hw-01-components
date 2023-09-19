// import user from '../data/user.json';
import PropTypes from 'prop-types';
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

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
