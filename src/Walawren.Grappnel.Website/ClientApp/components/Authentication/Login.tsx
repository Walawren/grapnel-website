import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { withAuth } from '@okta/okta-react';
import * as Okta from '../../okta';
import * as Router from 'react-router';

class Login extends React.Component<Okta.AuthProps, Okta.AuthState> {
  constructor(props: Okta.AuthProps) {
    super(props);
    this.state = {
      authenticated: null
    }

    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated
      ? <Redirect to={{ pathname: '/' }} />
      : <LoginForm {...this.props} />;
  }
}

export default withAuth(Login);