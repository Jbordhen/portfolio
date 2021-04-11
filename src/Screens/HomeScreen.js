import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    position: relative;
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
    background-color: ${(props) => props.backgroundcolor};
    border-radius: 5%;
    padding: 1% 2% 1% 2%;
    border: none;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        color: ${(props) => props.backgroundcolor};
        background-color: inherit;
    }
`
const Icon = ({ className, color }) => (
    <i
        className={className}
        css={`
            color: ${color || '#54b689'};
            font-size: 2rem;
            margin: 2%;
        `}></i>
)
const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
                    padding-left: 2%;
                    //box-shadow: -1px 1px 1px 0.5px rgba(51, 51, 51, 0.5);

                    @media (max-width: 1024px) {
                        flex-direction: column;
                    }
                `}>
                <Div>
                    <h1
                        css={`
                            font-weight: bold;
                            width: fit-content;

                            &:hover {
                                color: #54b689;
                            }
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
                        <Button backgroundcolor='#54b689' to='/portfolio'>
                            View Portfolio
                        </Button>
                        <Button backgroundcolor='#4f4f4f' to='/resume'>
                            View Resume
                        </Button>
                    </Div>
                </Div>
                <Div
                    css={`
                        width: 20%;
                        //margin-left: 10%;
                        margin-top: auto;
                        margin-bottom: auto;
                        @media (max-width: 1024px) {
                            width: auto;
                            margin: 0;
                        }
                    `}>
                    <img
                        src='profile.png'
                        alt='Author Portrait'
                        css={`
                            width: 100%;
                            border-radius: 100%;
                            margin-left: auto;
                            margin-right: auto;
                            background: #54b689;
                            margin-bottom: 2%;
                            &:hover {
                                box-shadow: -2px 2px 2px 1px
                                    rgba(51, 51, 51, 0.5);
                            }
                        `}
                    />
                </Div>
            </Div>
            <Div
                css={`
                    padding-left: 2%;
                `}>
                <h1>What I Do</h1>
                <p>
                    I am gathering experiences and developing websites for more
                    than 2 years. Below are some of my technical skill set and
                    technologies I use. You can also check out my project
                    portfolio or online resume to learn more about my skills.
                </p>
            </Div>
            <Row
                css={`
                    padding-left: 2%;
                    justify-content: center;
                `}>
                <CardGroup>
                    <Col md={3}>
                        <Card
                            css={`
                                text-align: center;
                            `}>
                            <IconDiv
                                css={`
                                    flex-direction: row;
                                `}>
                                <Icon
                                    className='fab fa-js-square'
                                    color='#54b689'></Icon>
                            </IconDiv>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Body>
                                JavaScript, often abbreviated as JS, is a
                                programming language that conforms to the
                                ECMAScript specification. JavaScript is
                                high-level, often just-in-time compiled, and
                                multi-paradigm. It has curly-bracket syntax,
                                dynamic typing, prototype-based
                                object-orientation, and first-class functions.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <IconDiv
                                css={`
                                    flex-direction: row;
                                `}>
                                <Icon className='fab fa-html5'></Icon>
                                <Icon className='fab fa-css3-alt'></Icon>
                            </IconDiv>
                            <Card.Title>HTML, CSS</Card.Title>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <IconDiv
                                css={`
                                    flex-direction: row;
                                `}>
                                <Icon className='fab fa-java'></Icon>
                            </IconDiv>
                            <Card.Title>Java, Python</Card.Title>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Div
                                css={`
                                    flex-direction: row;
                                `}></Div>
                            <Card.Title>
                                Node.js, Express.js, React, Redux
                            </Card.Title>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Div
                                css={`
                                    flex-direction: row;
                                `}></Div>
                            <Card.Title>Mysql, MongoDB, Mongoose</Card.Title>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Div
                                css={`
                                    flex-direction: row;
                                `}></Div>
                            <Card.Title>PHP, Laravel</Card.Title>
                            <Card.Body></Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </Wrapper>
    )
}

export default HomeScreen
