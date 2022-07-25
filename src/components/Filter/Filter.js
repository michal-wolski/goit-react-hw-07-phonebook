import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'components/Redux/Actions';
import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <label htmlFor="inpfilter">
      Find contacts by name
      <input
        type="text"
        id="inpfilter"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
// export default function Filter() {
//   const filter = useSelector(state => state.filter);
//   const dispatch = useDispatch();

//   const handleChangeFilter = e => dispatch(changeFilter(e.target.value));
//   return (
//     <>
//       <label name="filter" htmlFor="filter" value={filter}>
//         Find contacts by name
//       </label>
//       <input
//         value={filter}
//         type="text"
//         id="filter"
//         onChange={handleChangeFilter}
//       />
//     </>
//   );
// }

Filter.propTypes = {
  filter: PropTypes.string,
  handleOnChangeSearchContact: PropTypes.func,
};
