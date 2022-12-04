import { connect } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { removeFilter, clearFilter } from 'store/filters/filter-actions';

const _FilterPanel = ({ currentFilters, removeFilter, clearFilter }) => {
  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => removeFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={clearFilter}>
          Clear
        </button>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentFilters: state.filters,
});

const FilterPanel = connect(mapStateToProps, {
  removeFilter,
  clearFilter,
})(_FilterPanel);

export { FilterPanel };
