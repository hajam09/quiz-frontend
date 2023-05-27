import React from 'react';

interface Props {
}

interface State {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    errorMessage?: any
}

class Registration extends React.Component<Props, State> {

    constructor(props: Props) {
        // TODO: still todo
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errorMessage: [],
        }

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleFirstNameInput(e: any) {
        this.setState({firstName: e.target.value});
    }

    handleLastNameInput(e: any) {
        this.setState({lastName: e.target.value});
    }

    handleEmailInput(e: any) {
        this.setState({email: e.target.value});
    }

    handlePasswordInput(e: any) {
        this.setState({password: e.target.value});
    }

    handleSubmit(event: any) {
        fetch("http://localhost:8000/accounts/auth/users/", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                username: this.state.email,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then((response) => {
                console.log("asdasd");

            })

        event.preventDefault();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <form className="card px-5 py-5" onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Register</h2>
                            <br></br>
                            <div className="mb-3">
                                <input type="text" placeholder="First name" className="form-control"
                                       defaultValue={this.state.firstName}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Last name" className="form-control"
                                       defaultValue={this.state.lastName}/>
                            </div>
                            <div className="mb-3">
                                <input type="email" placeholder="Email" className="form-control"
                                       defaultValue={this.state.email}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary" type="submit">Register</button>
                            </div>
                            <br></br>
                            <p className="small text-center">
                                By clicking the Register button, you agree to our <br></br>
                                <a href="#" target="_blank">Terms &amp; Conditions</a>, and <a href="#" target="_blank">Privacy
                                Policy</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;