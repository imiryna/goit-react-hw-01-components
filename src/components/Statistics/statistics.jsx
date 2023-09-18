import data from '../data/data.json';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  ItemList,
} from '../Statistics/statistics.styled';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Statistics = ({ title, stats }) => {
  return (
    <Container class="statistics">
      <Title class="title">{title}</Title>

      <StatList class="stat-list">
        {stats.map(item => (
          <ItemList
            class="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </ItemList>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
