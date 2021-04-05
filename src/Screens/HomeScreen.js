import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    margin-left: 25%;
    margin-right: 10%;
    margin-top: 0;
    flex-direction: column;
    text-align: left;
    @media (max-width: 1024px) {
        margin-left: 10%;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
`

const Button = styled(Link)`
    margin: 2% 2% 2% 0%;
    color: #fff;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5%;
    padding: 1% 2% 1% 2%;
    border: none;
    font-weight: 700;
    text-decoration: none;
`

const HomeScreen = () => {
    return (
        <Wrapper>
            <Div
                css={`
                    flex-direction: row;
                    background-color: #fafafa;
                    border-bottom-style: solid;
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                    @media (max-width: 1024px) {
                        flex-direction: column;
                    }
                `}>
                <Div>
                    <h1
                        css={`
                            font-weight: bold;
                        `}>
                        Joy Bordhen
                    </h1>
                    <p
                        css={`
                            font-size: 1.5rem;
                            margin: 0;
                        `}>
                        Software Engineer
                    </p>
                    <p>
                        I am a software engineer specilized in frontend and
                        backend development for web based applications. Want to
                        know more about my skills? checkout my project portfolio
                        and resume.
                    </p>
                    <Div
                        css={`
                            flex-direction: row;
                            @media (max-width: 1024px) {
                                justify-content: center;
                            }
                        `}>
                        <Button backgroundColor='#54b689' to='/portfolio'>
                            View Portfolio
                        </Button>
                        <Button backgroundColor='#4f4f4f' to='/resume'>
                            View Resume
                        </Button>
                    </Div>
                </Div>
                <Div
                    css={`
                        width: 20%;
                        margin-left: 10%;
                        @media (max-width: 1024px) {
                            width: auto;
                            margin: 0;
                        }
                    `}>
                    <img src='myPic.png' alt='Author Portrait' />
                </Div>
            </Div>
        </Wrapper>
    )
}

export default HomeScreen
