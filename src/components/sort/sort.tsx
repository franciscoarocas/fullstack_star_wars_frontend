
import Form from 'react-bootstrap/Form';

const Sort = ({onChange}) => {

  return (
    <Form.Select aria-label="Default select example" onChange={(e) => onChange(e.target.value)}>
      <option value="">---</option>
      <option value="name">Name</option>
      <option value="created">Created</option>
    </Form.Select>
  );

};

export default Sort;