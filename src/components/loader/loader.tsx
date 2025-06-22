
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <Spinner data-testid="loader" animation="grow" variant="black" />
      <Spinner data-testid="loader" animation="grow" variant="black" />
      <Spinner data-testid="loader" animation="grow" variant="black" />
    </div>
  )

};

export default Loader;