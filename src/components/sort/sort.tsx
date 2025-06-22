
import Form from 'react-bootstrap/Form';
import type { SortSelectProps } from '../../types/sort';

const Sort = ({onChange} : SortSelectProps) => {

  return (
    <Form.Select aria-label="Default select example" onChange={(e) => onChange(e.target.value)}>
      <option value="">---</option>
      <option value="name">Name</option>
      <option value="created">Created</option>
    </Form.Select>
  );

};

export default Sort;