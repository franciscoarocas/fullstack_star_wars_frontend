
import { Form, InputGroup } from 'react-bootstrap'


const SearchBar = ({ value, onChange }) => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>🔍</InputGroup.Text>
      <Form.Control
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <InputGroup.Text role="button" onClick={() => onChange('')}>
          ✖
        </InputGroup.Text>
      )}
    </InputGroup>
  );

};

export default SearchBar