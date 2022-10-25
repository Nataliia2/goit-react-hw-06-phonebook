import { Wrapper } from './ContactFilter.styles';
import { Label, Input } from 'components/Form.style';

export const FilterContact = ({onChange, value}) => {
  
  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input
        autoComplete="off"
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Wrapper>
  );
}


