import { Button, Drawer } from 'antd';
import React, { useContext, useEffect, useState } from 'react';

import PortfolioContext from '../../context/context';
import LeftNav from './section/LeftNav';
import RightNav from './section/RightNav';

function Nav() {
  const { contact } = useContext(PortfolioContext);
  const { img } = contact;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

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
