import * as React from 'react';
import * as OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import * as Okta from '../../okta';
import * as Nullable from '../../nullableTypes';

interface LoginFormState {
    sessionToken: Nullable.str;
    username: string;
    password: string;
}

class ILoginForm extends React.Component<Okta.AuthProps, LoginFormState> {
    oktaAuth: any;
}

class LoginForm extends ILoginForm {
    constructor(props: Okta.AuthProps){
        super(props);
        this.state = {
            sessionToken: null,
            username: '',
            password: ''
        }

        this.oktaAuth = new OktaAuth({ url: props.url});

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.oktaAuth.signIn({
            username: this.state.username,
            password: this.state.password
        })
        .then((res: any) => this.setState({
            sessionToken: res.sessionToken
        }))
        .catch((err: Error) => console.log("Login was unsuccessful.", err))
    }

    handleUsernameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({username: e.currentTarget.value});
    }

    handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({password: e.currentTarget.value});
    }

    render() {
        if(this.state.sessionToken){
            this.props.auth.redirect({ sessionToken: this.state.sessionToken});
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                </label>
                <input id="login-submit" className="btn btn-primary" type="submit" value="Submit" />
            </form>
        );
    }
}

export default withAuth(LoginForm);