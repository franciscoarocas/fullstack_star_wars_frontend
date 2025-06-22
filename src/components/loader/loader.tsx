
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

  return (
    <div>
      <Spinner data-testid="loader" animation="border" variant="light" />
      <Spinner data-testid="loader" animation="border" variant="light" />
      <Spinner data-testid="loader" animation="border" variant="light" />
    </div>
  )

};

export default Loader;