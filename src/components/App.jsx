import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import Layout from './Layout/Layout';
// import Section from './Layout/Section';

function App() {
  const errorMessage = useSelector(state => state.contacts.error);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'flexStart',
        fontSize: 40,
        color: '#010101',
        padding: '20px',
      }}
    >
      {errorMessage && <h1>{errorMessage}</h1>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

// function App({ contacts }) {
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <Layout>
//       <Section title="Phonebook">
//         <ContactsForm />
//       </Section>

//       {contacts.length ? (
//         <Section title="Contacts">
//           <Filter />
//           <ContactList />
//         </Section>
//       ) : null}
//     </Layout>
//   );
// }

// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// export default connect(mapStateToProps)(App);
