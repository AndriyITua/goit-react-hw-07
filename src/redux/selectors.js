import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts;

export const getSearchQuery = (state) => state.filters;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

// Мемоізація селекторів
export const selectFilteredContacts = createSelector(
  [getContacts, getSearchQuery],
  (contacts, filters) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }
);
