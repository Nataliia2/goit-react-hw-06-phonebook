import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getStatusFilter } from "../redux/selectors";
import { addContact } from "../redux/contactsSlice";
import { setContactFilter } from "../redux/filterSlice";
import {ContactForm} from "./Form";
import {ContactList} from "./ContactList";
import { FilterContact } from './ContactFilter';
import  { Title, SubTitle } from "./App.styles";


export const App = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getStatusFilter);
  const dispatch = useDispatch();


  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const addContacts = data => {
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts `);
    }
    dispatch(addContact(data));
  };

  const onChange = ev => {
    const {value} = ev.currentTarget;
    dispatch(setContactFilter(value));
  };

  const getFilter = () => {
    if (!filters) {
      return contacts;
    }

    const normalaizedFilter = filters.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onAddContacs={addContacts} />
      {contacts.length !== 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <FilterContact onChange={onChange} value={filters} />
          <ContactList items={getFilter()} />
        </>
      )}
    </>
  );
};
