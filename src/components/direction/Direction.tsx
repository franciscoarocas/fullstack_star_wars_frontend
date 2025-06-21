
import Form from 'react-bootstrap/Form';

import type { DirectionSelectProps } from '../../types/direction';

const DirectionSelect = ({onChange} : DirectionSelectProps) => {

  return (
    <Form.Select aria-label="Default select example" onChange={(e) => onChange(e.target.value)}>
      <option value="asc">Asc</option>
      <option value="desc">Desc</option>
    </Form.Select>
  );

};

export default DirectionSelect;