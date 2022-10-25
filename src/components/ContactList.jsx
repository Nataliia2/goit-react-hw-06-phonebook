import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { List, Item, Button } from './ContactList.styles';

export const ContactList = ({ items }) => {
  const dispatch = useDispatch();

    const itemList = items.map(({ id, name, number }) => {
      return (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact({id}))}>
            Delete
          </Button>
        </Item>
      );
    });
  
    return <List>{itemList}</List>;
  };
  
  ContactList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };