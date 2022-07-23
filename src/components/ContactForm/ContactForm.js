import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addContacts } from 'components/Redux/Actions';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) => dispatch(addContacts(name, phone));

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = name =>
      contacts.map(contact => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, phone);
    }

    setName('');
    setPhone('');
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label id="name" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label id="phone" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit" disabled={!(name && phone)}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
