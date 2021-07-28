import React, { useContext } from 'react';
import NavImg from '../Image/NavImg';
import PortfolioContext from '../../context/context';

function Nav() {
  const { contact } = useContext(PortfolioContext);
  const { img } = contact;

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <section className="Header">
      <nav>
        <button className="btn" id="logo-wrapper" onClick={scrollTop}>
          <img id="logo-image" src="../img/home.png" alt="페이지 맨 위로 이동하기" />
          {/* C:\coding\portfolio\public\img\home.png */}
        </button>
        <div>
          <a
            href="https://drive.google.com/file/d/1VnjRsdQiLzxdUWIlpcSaF1OoieyHhLud/view?usp=sharing"
            id="show-cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavImg filename={img} />
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
