import React from 'react';

interface Props {
}

interface State {
    username?: string
    password?: string
    errorMessage?: string
}

class Login extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: '',
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameInput(e: any) {
        this.setState({username: e.target.value});
    }

    handlePasswordInput(e: any) {
        this.setState({password: e.target.value});
    }

    handleSubmit(event: any) {
        fetch("http://localhost:8000/accounts/auth/jwt/create/", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then((response) => {
                if (response.refresh && response.access) {
                    localStorage.setItem("accessToken", JSON.stringify(response));
                    // TODO: navigate to index page.
                } else {
                    this.setState({errorMessage: response.detail});
                }
            })

        event.preventDefault();
    }

    render() {
        let {errorMessage} = this.state;
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <form className="card px-5 py-5" onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Login</h2>
                            <br></br>
                            <div className="mb-3">
                                <input type="email" placeholder="Email address" onInput={this.handleUsernameInput}
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" placeholder="Password" onInput={this.handlePasswordInput}
                                       className="form-control"/>
                            </div>
                            {
                                errorMessage ?
                                    <div className="alert alert-danger text-center" role="alert"> {errorMessage}</div> :
                                    <span></span>
                            }
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;