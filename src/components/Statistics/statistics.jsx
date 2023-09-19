// import data from '../data/data.json';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  ItemList,
  Label,
  Percentage,
} from '../Statistics/statistics.styled';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => (
          <ItemList
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
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
