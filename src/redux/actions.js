const { nanoid } = require('nanoid');

export const addContact = text => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: 'contactId',
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setstatusFilter',
    payload: 'value',
  };
};
