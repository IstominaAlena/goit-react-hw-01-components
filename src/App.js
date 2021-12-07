import dataSet from './components/data';

import Section from './components/Section';
import Profile from './components/Social-profile/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import './styles/App.css';

const { data, user, friends, transactions } = dataSet;

function App() {
  return (
    <div className="App">
      <Section title="Задание 1 - Профиль социальной сети">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Задание 2 - Секция статистики">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section title="Задание 3 - Список друзей">
        <FriendList friends={friends} />
      </Section>
      <Section title="Задание 4 - История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
