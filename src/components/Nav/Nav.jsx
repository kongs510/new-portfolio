import React, { useContext } from 'react';

import PortfolioContext from '../../context/context';
import LeftNav from './section/LeftNav';
import RightNav from './section/RightNav';

function Nav() {
  const { contact } = useContext(PortfolioContext);
  const { img } = contact;

  return (
    <section className="Header">
      <nav>
        <LeftNav />
        <RightNav img={img} />
      </nav>
    </section>
  );
}

export default Nav;
