import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/service';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItems,
  } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactList = () => {
    const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <ContactsList>
    {visibleContacts.map(({ id, name, number }) => (
      <ContactItems key={id}>
       <ContactItem/>
      </ContactItems>
    ))}
  </ContactsList>)
    
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;