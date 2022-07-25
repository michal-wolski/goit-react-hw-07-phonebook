import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch, deleteThunk } from 'components/Redux/Thunk';
import { getContactItems, getFilter } from 'components/Redux/Selectors';
import { renderContactList } from '../base/toLowerCase';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(getContactItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  const onDelete = id => dispatch(deleteThunk(id));
  const visibleContacts = renderContactList(filter, contacts);
  return (
    <div>
      <Loader />
      <ul>
        {visibleContacts.map(item => (
          <li key={item.id}>
            &#9743;&#160;
            {item.name}: {item.number}
            <span>
              Created:&#160;
              {new Date(item.createdAt).toLocaleString()}
            </span>
            <button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContacts } from 'components/Redux/Actions';
// import propTypes from 'prop-types';

// const ContactList = () => {
//   const { contacts, filter } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const onDeleteBtn = id => dispatch(deleteContacts(id));

//   const filteredContacts = (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const filterContacts = filteredContacts(contacts, filter);

//   return (
//     <>
//       <ul>
//         {filterContacts.map(({ id, name, phone }) => (
//           <li key={id}>
//             <p>
//               {name}: <span>{phone}</span>
//             </p>
//             <button type="button" onClick={e => onDeleteBtn(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactList.propTypes = {
//   onDeleteBtn: propTypes.func,
//   contacts: propTypes.arrayOf(
//     propTypes.exact({
//       id: propTypes.string,
//       name: propTypes.string,
//       phone: propTypes.string,
//     })
//   ),
// };

export default ContactList;
