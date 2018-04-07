import * as React from 'react';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Login from './components/Authentication/Login';
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

const config = {
    issuer: 'https://dev-522314.oktapreview.com/oauth2/auseltor5uXFhRfVk0h7',
    url: 'https://dev-522314.oktapreview.com',
    redirect_uri: '/implicit/callback',
    client_id: '0oaeao1do8N2qYPUP0h7',
    onAuthRequired: ({history}: { history: Array<String>}) => {
        history.push('/login');
    }
}

if(canUseDOM){
    config.redirect_uri = window.location.origin + config.redirect_uri;
}

let security = canUseDOM
    ? <Security {...config}>
        <Route path="/" exact component={ Home }/>
        <Route path="/counter" component={ Counter } />
        <SecureRoute path="/fetchdata/:startDateIndex?" component={ FetchData } />
        <Route path="/login" render={() => <Login {...config}/>}/>
        <Route path="/implicit/callback" component={ ImplicitCallback }/>
    </Security>
    : null;

export const routes = <Layout>
    {security}
</Layout>;
