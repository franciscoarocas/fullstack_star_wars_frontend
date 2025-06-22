

import type { LogoType } from '../../types/logo';
import { LOGOS } from '../../types/logo';

const Logo = ({type = 'default'} : LogoType) => {

  const logo_path : string = LOGOS[type] || LOGOS.default;

  console.log('Logo path:', type);

  return (
    <div>
      <img className='img-fluid' src={logo_path} alt="Star Wars logo"/>
    </div>
  )

};

export default Logo;