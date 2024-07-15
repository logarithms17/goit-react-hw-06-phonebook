import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/actions';
import { getContacts, getFilter } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);

  // Save contacts to local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addInfo = newInfo => {
    dispatch(addContact(newInfo));
  };

  const deleteInfo = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = filterValue => {
    dispatch(setFilter(filterValue));
  };

  //get the array of the filtered data from filter
  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); //using includes returns the data every changes

    // return contacts.filter(contact => contact.name.toLowerCase() === filter.toLowerCase()) {using this method only returns the data if the info is complete}
  };

  return (
    <div>
      <ContactForm addInfo={addInfo} contacts={contacts} />
      <Filter filter={filter} updateFilter={updateFilter} />
      <ContactList deleteInfo={deleteInfo} filterContact={filterContact} />
    </div>
  );
}

export default App;
