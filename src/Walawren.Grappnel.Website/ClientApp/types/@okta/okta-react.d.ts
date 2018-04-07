declare module '@okta/okta-react' {
    import * as React from 'react';
    import { Route } from 'react-router-dom';

    interface SecurityState { }
    interface RouteInfo{
        history: Array<string>;
    }
    interface SecurityProps {
        issuer: string;
        redirect_uri: string;
        client_id: string;
        onAuthRequired?: (routInfo: RouteInfo) => void;
     }
    interface Security extends React.Component<SecurityProps, SecurityState> { }

    interface ImplicitCallbackProps { }

    interface OktaModule {
        withAuth: (component: any) => typeof React.Component;
        Security: new() => Security;
        ImplicitCallback: React.SFC<ImplicitCallbackProps>;
        SecureRoute: new() => Route;
    }

    const OktaModule: OktaModule;
    export = OktaModule;
}
