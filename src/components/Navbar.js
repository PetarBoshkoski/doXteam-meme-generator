import React from "react"
import styled from 'styled-components'
import logo from '../images/memeface.png'
import style from '../style.css'

const StyledNav = styled.nav`
    background-color: #9370DB;
    width: 100%;
    height: 100px;
    margin: 0 auto;
`;


const HeaderTitle = styled.div`
    font-family: 'Verdana' sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-align: center;
    justify-content: center;
    margin: 0 auto;
`;
class Navbar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="header-container">
                <StyledNav>
                    <div className='header-wrapper'>
                        <img src={logo} className='logo'></img>
                        <HeaderTitle>Meme Generator</HeaderTitle>
                    </div>
                </StyledNav>
            </div>
        )
    }
}

export default Navbar