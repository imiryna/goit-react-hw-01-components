import user from './components/data/user.json';
import { Profile } from 'components/profile/profile';
import data from './components/data/data.json';
import { Statistics } from 'components/Statistics/statistics';
import friends from './components/data/friends.json';
import { FriendList } from 'components/Friendlist/friendList';
import transactions from './components/data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/transactionHistory';

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
      <TransactionHistory items={transactions} />
    </>
  );
};
