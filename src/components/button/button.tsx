
import { Button as ReactButtom } from "react-bootstrap";

import type { buttonProps } from "../../types/button";

const Button = ({children} : buttonProps) => {

    return (
        <ReactButtom variant="light" size="lg">
            {children}
        </ReactButtom>
    )

};

export default Button;