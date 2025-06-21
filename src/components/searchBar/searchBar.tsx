
import { Form, InputGroup } from 'react-bootstrap'

import { FaSearch, FaRegTimesCircle  } from "react-icons/fa";


const SearchBar = ({ value, onChange }) => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text><FaSearch /></InputGroup.Text>
      <Form.Control
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <InputGroup.Text onClick={() => onChange('')} style={{ cursor: 'pointer' }}>
          <FaRegTimesCircle />
        </InputGroup.Text>
      )}
    </InputGroup>
  );

};

export default SearchBar