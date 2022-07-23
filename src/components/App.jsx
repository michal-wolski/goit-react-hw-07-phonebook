import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactsForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
import Section from './Layout/Section';

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : null}
    </Layout>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
