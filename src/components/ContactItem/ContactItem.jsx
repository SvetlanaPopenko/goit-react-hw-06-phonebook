import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactNumber, ContactListButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(deleteContact(id));
    
  return (
    <div>
      <p>
        {name}: <ContactNumber>{number}</ContactNumber>
      </p>
      <ContactListButton onClick={handleDeleteContact}>
        Delete
      </ContactListButton>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
