import { Menu } from 'antd';
import React from 'react'
import NavImg from '../../Image/NavImg';
import styled from 'styled-components'
import { Link } from 'react-scroll';


function RightNav({ img }) {

    return (
        <RightMenu>
            <Menu>
                <Link to="about" smooth duration={1000}>
                    About
                </Link>
            </Menu>
            <Menu>
                <Link to="projects" smooth duration={1000}>
                    Project
                </Link>
            </Menu>
            <Menu>
                <Link to="contact" smooth duration={1000}>
                    Contact
                </Link>
            </Menu>
            <Menu>
                <a
                    href="https://drive.google.com/file/d/1VnjRsdQiLzxdUWIlpcSaF1OoieyHhLud/view?usp=sharing"
                    id="show-cv-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <NavImg filename={img} />
                </a>
            </Menu>
        </RightMenu >
    )
}


const RightMenu = styled.div`
  border: none;
  float: right;
  width: 40%;
  padding-right:5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default RightNav
