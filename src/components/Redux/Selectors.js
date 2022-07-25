import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;
export const getContactItems = createSelector(
  getContacts,
  contacts => contacts.items
);

export const getFilter = createSelector(
  getContacts,
  contacts => contacts.filter
);
