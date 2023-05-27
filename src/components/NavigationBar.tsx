import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

interface Props {
}

interface State {
    isAuthenticated?: boolean
    token?: string
}


class UnAuthenticatedComponent extends React.Component {

    render() {
        return (
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="Login / Register">
                    <NavDropdown.Item href="/accounts/register">Register</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/accounts/login">Login</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

class AuthenticatedComponent extends React.Component {

    render() {
        return (
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Create a Quiz</Nav.Link>
                <NavDropdown title="Account">
                    <NavDropdown.Item href="#">History</NavDropdown.Item>
                    <NavDropdown.Item href="/quiz/my-quizzes">My Quizzes</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/accounts/logout">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

class NavigationBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}');
        this.state = {
            isAuthenticated: accessToken.refresh && accessToken.access,
        }
    }

    render() {
        let {isAuthenticated} = this.state;
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Quiz</Navbar.Brand>
                    {isAuthenticated ? <AuthenticatedComponent/> : <UnAuthenticatedComponent/>}
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;
