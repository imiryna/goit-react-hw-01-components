import user from './components/data/user.json';
import { Profile } from 'components/profile/profile';
import data from './components/data/data.json';
import { Statistics } from 'components/Statistics/statistics';
import friends from './components/data/friends.json';
import { FriendList } from './components/Friendlist/friendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics ababagalamaga="poop" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
