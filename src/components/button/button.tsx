
import { Button as ReactButtom } from "react-bootstrap";

const Button = ({children}) => {

    return (
        <ReactButtom variant="light" size="lg">
            {children}
        </ReactButtom>
    )

};

export default Button;