import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Sider = styled.div`
    background-color: #54b689;
    position: absolute;
    width: 15%;
    justify-content: center;
    align-content: center;
    min-height: 100%;
    @media (max-width: 1024px) {
        width: 100%;
        position: relative;
    }
`

const Div = styled.div`
    display: flex;
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: column;
    text-align: center;
`

const Button = styled.button`
    border: none;
    padding-top: 5%;
    padding-bottom: 5%;
    font-weight: bold;
    margin-bottom: 25%;
    &:hover {
        background-color: inherit;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: whiteSmoke;
    font-weight: bold;
    margin-bottom: 10%;
    &:hover {
        color: black;
    }
`

const Icon = ({ className, to }) => (
    <i className={className} onClick={() => window.location.replace(to)}></i>
)

const StyledIcon = styled(Icon)`
    background-color: white;
    padding: 5%;
    border-radius: 100%;
    color: #54b689;
`

const LinedIcon = ({ className }) => (
    <i
        className={className}
        css={`
            margin-right: 5%;
        `}></i>
)

const SideBar = () => {
    return (
        <Sider>
            <h3
                css={`
                    text-align: center;
                    color: whiteSmoke;
                    @media (max-width: 1024px) {
                        margin-top: 0;
                        padding-top: 2%;
                    }
                `}
                onClick={() => window.location.replace('/')}>
                Joy Bordhen
            </h3>
            <Div>
                <img
                    src='myPic.png'
                    alt=''
                    css={`
                        width: 60%;
                        border-radius: 100%;
                        margin-left: auto;
                        margin-right: auto;
                    `}></img>
                <p
                    css={`
                        color: whiteSmoke;
                    `}>
                    Hi, my name is Joy Bordhen and I'm a software engineer.
                    Welcome to my personal website!
                </p>
                <Div
                    css={`
                        flex-direction: row;
                        justify-content: space-around;
                        padding-bottom: 10%;
                        padding-top: 10%;
                        border-bottom-style: solid;
                        border-bottom-color: rgba(0, 0, 0, 0.1);
                    `}>
                    <StyledIcon
                        className='fab fa-github-alt'
                        to='https://github.com/Jbordhen/'></StyledIcon>
                    <StyledIcon
                        className='fab fa-linkedin-in'
                        to='https://www.linkedin.com/in/joy-bordhen/'></StyledIcon>
                    <StyledIcon
                        className='fab fa-facebook-f'
                        to='https://facebook.com/Jbordhen.jb/'></StyledIcon>
                    <StyledIcon
                        className='fab fa-stack-overflow'
                        to='/'></StyledIcon>
                    <StyledIcon
                        className='fab fa-twitter'
                        to='https://twitter.com/Joy_bordhen'></StyledIcon>
                </Div>
                <Div
                    css={`
                        margin-top: 20%;
                        margin-bottom: 30%;
                        padding: 0%;
                        bottom: 0;
                        border-bottom-style: solid;
                        border-bottom-color: rgba(0, 0, 0, 0.1);
                    `}>
                    <StyledLink to='/'>
                        <LinedIcon className='far fa-user' />
                        About Me
                    </StyledLink>
                    <StyledLink to='/portfolio'>
                        <LinedIcon className='fas fa-code' />
                        Portfolio
                    </StyledLink>
                    <StyledLink to='/services_policies'>
                        <LinedIcon className='fas fa-briefcase' />
                        Services & Policy
                    </StyledLink>
                    <StyledLink to='/resume'>
                        <LinedIcon className='far fa-file' />
                        Resume
                    </StyledLink>
                    <StyledLink to='/blog'>
                        <LinedIcon className='fab fa-blogger' />
                        Blog
                    </StyledLink>
                    <StyledLink to='/contact'>
                        <LinedIcon className='far fa-envelope' />
                        Contact
                    </StyledLink>
                </Div>
                <Div>
                    <Button>Dark Mode</Button>
                </Div>
            </Div>
        </Sider>
    )
}

export default SideBar
