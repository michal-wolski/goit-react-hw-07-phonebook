import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { getContactItems } from 'components/Redux/Selectors';
import { post } from 'components/Redux/Thunk';
import { Loader } from 'components/Loader/Loader';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactItems);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    contacts.find(cont => cont.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          post({ createdAt: () => new Date().toISOString(), name, number })
        );
    setName('');
    setNumber('');
  };
  // const onAddContacts = (name, phone) => dispatch(addContacts(name, phone));

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const isAdded = name =>
  //     contacts.map(contact => contact.name).includes(name);

  //   if (isAdded(name)) {
  //     return alert(`${name} is already in contacts`);
  //   } else {
  //     onAddContacts(name, phone);
  //   }

  //   setName('');
  //   setPhone('');
  // };
  return (
    <div>
      <Loader />
      <form onSubmit={handleSubmit}>
        <label htmlFor="inpname">Name </label>
        <input
          id="inpname"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
        <label htmlFor="inptel">Number </label>
        <input
          id="inptel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
  // return (
  //   <>
  //     <form onSubmit={e => handleSubmit(e)}>
  //       <label id="name" htmlFor="name">
  //         Name
  //       </label>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         value={name}
  //         onChange={e => setName(e.target.value)}
  //       />
  //       <label id="phone" htmlFor="phone">
  //         Phone
  //       </label>
  //       <input
  //         type="tel"
  //         name="phone"
  //         id="phone"
  //         value={phone}
  //         onChange={e => setPhone(e.target.value)}
  //       />
  //       <button type="submit" disabled={!(name && phone)}>
  //         add contact
  //       </button>
  //     </form>
  //   </>
  // );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
