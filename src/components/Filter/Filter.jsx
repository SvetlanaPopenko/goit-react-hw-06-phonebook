import React from 'react';
import PropTypes from 'prop-types';
import { FilterText, FilterInput } from 'components/Filter/Filter.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);

  const onChangeFilter = evt => {
    evt.preventDefault();

  };

  return (
    <FilterText>
      Find contacts by name
      <FilterInput
        name="filter"
        id="filter"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterText>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
