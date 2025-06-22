
import { Button as ReactButtom } from "react-bootstrap";

import type { buttonProps } from "../../types/button";

const Button = ({children , variant = 'light'} : buttonProps) => {

    return (
        <ReactButtom variant={variant} size="lg">
            {children}
        </ReactButtom>
    )

};

export default Button;