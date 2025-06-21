
import { Form, InputGroup } from 'react-bootstrap'

import { FaSearch, FaRegTimesCircle  } from "react-icons/fa";

import type { SearchProps } from '../../types/search';

const SearchBar = ({ value, onChange } : SearchProps) => {

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