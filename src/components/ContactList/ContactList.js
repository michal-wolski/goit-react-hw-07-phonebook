import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'components/Redux/Actions';
import propTypes from 'prop-types';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContacts(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={e => onDeleteBtn(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    })
  ),
};

export default ContactList;
