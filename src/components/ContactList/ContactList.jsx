import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/service';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  ContactListButton,
  ContactNumber,
} from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
    const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <ContactsList>
    {visibleContacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p className="ClasList__name">
          {name}: <ContactNumber>{number}</ContactNumber>
        </p>
        <ContactListButton >
          Delete
        </ContactListButton>
      </ContactItem>
    ))}
  </ContactsList>)
    
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;