import { Menu } from 'antd';
import React from 'react'
import NavImg from '../../Image/NavImg';
import styled from 'styled-components'
import { Link } from 'react-scroll'


function RightNav({ img }) {

    return (
        <RightMenu>
            <Menu1>
                <Link to="about" smooth duration={1000} activeStyle={{ color: 'red' }}>
                    About
                </Link>
            </Menu1>
            <Menu1>
                <Link to="projects" smooth duration={1000}>
                    Project
                </Link>
            </Menu1>
            <Menu1>
                <Link to="contact" smooth duration={1000}>
                    Contact
                </Link>
            </Menu1>
            <Menu1>
                <a
                    href="https://drive.google.com/file/d/1RiswHqJsCreswljDYaqe5y5ssczY6oCk/view?usp=sharing"
                    id="show-cv-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <NavImg filename={img} />
                </a>
            </Menu1>
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
           
`;
const Menu1 = styled.div`

 &:hover {
            font-size: 20px;

            color: black;
            border-bottom: 3px solid royalblue;
            }
`



export default RightNav
