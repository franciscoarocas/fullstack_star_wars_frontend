
import Alert from 'react-bootstrap/Alert';

import type { AlertProps } from '../../types/alert';



function AlertMessage({variant, message} : AlertProps) {
  return (
    <Alert key={variant} variant={variant}>
      {message}
    </Alert>
  );
}

export default AlertMessage;