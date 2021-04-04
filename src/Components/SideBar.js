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
    @media (max-width: 768px) {
        width: 100%;
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
const SideBar = () => {
    return (
        <Sider>
            <h1
                css={`
                    text-align: center;
                    color: whiteSmoke;
                `}>
                Joy Bordhen
            </h1>
            <Div>
                <img
                    src='myPic.png'
                    alt=''
                    css={`
                        width: 50%;
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
                        border-bottom-color: rgba(255, 255, 255, 0.08);
                    `}>
                    <i
                        className='fab fa-github-alt'
                        css={`
                            background-color: white;
                            padding: 5%;
                            border-radius: 100%;
                        `}
                        onClick={() =>
                            window.location.replace(
                                'https://github.com/Jbordhen/'
                            )
                        }></i>
                    <i
                        className='fab fa-linkedin-in'
                        css={`
                            background-color: white;
                            padding: 5%;
                            border-radius: 100%;
                        `}
                        onClick={() =>
                            window.location.replace(
                                'https://www.linkedin.com/in/joy-bordhen/'
                            )
                        }></i>
                    <i
                        className='fab fa-facebook-f'
                        css={`
                            background-color: white;
                            padding: 5%;
                            border-radius: 100%;
                        `}
                        onClick={() =>
                            window.location.replace(
                                'https://facebook.com/Jbordhen.jb/'
                            )
                        }></i>
                    <i
                        className='fab fa-stack-overflow'
                        css={`
                            background-color: white;
                            padding: 5%;
                            border-radius: 100%;
                        `}></i>
                    <i
                        className='fab fa-twitter'
                        css={`
                            background-color: white;
                            padding: 5%;
                            border-radius: 100%;
                        `}
                        onClick={() =>
                            window.location.replace(
                                'https://twitter.com/Joy_bordhen'
                            )
                        }></i>
                </Div>
                <Div
                    css={`
                        margin-top: 20%;
                        margin-bottom: 30%;
                        padding: 10%;
                        bottom: 0;
                        border-bottom-style: solid;
                        border-bottom-color: rgba(255, 255, 255, 0.08);
                    `}>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        About Me
                    </Link>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        Portfolio
                    </Link>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        Services & Policy
                    </Link>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        Resume
                    </Link>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        Blog
                    </Link>
                    <Link
                        to='/'
                        css={`
                            text-decoration: none;
                            color: whiteSmoke;
                            font-weight: bold;
                            margin-bottom: 10%;
                        `}>
                        Contact
                    </Link>
                </Div>
                <Div>
                    <button>Dark Mode</button>
                </Div>
            </Div>
        </Sider>
    )
}

export default SideBar
