import { connect } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';

import { addFilter } from 'store/filters/filter-actions';

const _JobList = ({ positions, addFilter }) => {
  const handleAddFilter = (filter) => {
    addFilter(filter);
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  positions: selectVisiblePositions(state, state.filters),
});

const JobList = connect(mapStateToProps, {
  addFilter,
})(_JobList);

export { JobList };
