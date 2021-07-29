import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react'
import NavImg from '../../Image/NavImg';
import styled from 'styled-components'


function RightNav({ img }) {

    return (
        <RightMenu>
            <Menu>
                about
            </Menu>
            <Menu>
                Project
            </Menu>
            <Menu>
                Contact
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
        </RightMenu>
    )
}


const RightMenu = styled.div`
  border: none;
  float: right;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default RightNav
