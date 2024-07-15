import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';

function ContactList({ deleteInfo, filterContact }) {
  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteInfo={deleteInfo}
        />
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  deleteInfo: PropTypes.func.isRequired,
  filterContact: PropTypes.func.isRequired,
};
