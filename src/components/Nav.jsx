import React from 'react';
import Nav from './styles/Nav.styled';
import imgLogo from './assets/keep_logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgMenuGridO } from 'react-icons/cg';
import { SiRobotframework } from 'react-icons/si';
// import {AiOutlineAppstore} from 'react-icons/ai';

const Navbar = () => {
    return (
        <Nav>
            <div className='logo'>
                <span className='menu-icon icon'>
                    <FiMenu />
                </span>
                <img
                    src={imgLogo}
                    alt='logo'
                    style={{ width: 40, height: 40 }}
                />
                <span className='logo-name'>Keep</span>
            </div>
            <div className='search-field'>
                <span className='search-icon icon'>
                    <AiOutlineSearch />
                </span>
                <input
                    type='text'
                    placeholder='Search'
                    className='search-box'
                />
            </div>
            <div className='nav-menu'>
                <div>
                    <span className='icon'>
                        <TiThMenuOutline />
                    </span>
                    <span className='icon'>
                        <AiOutlineSetting />
                    </span>
                </div>

                <div>
                    <span className='icon'>
                        <CgMenuGridO />
                    </span>
                    <span className='robot icon'>
                        <SiRobotframework />
                    </span>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
