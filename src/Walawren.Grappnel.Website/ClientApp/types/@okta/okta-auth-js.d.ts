declare module '@okta/okta-auth-js' {
  interface OktaAuthParams {
    url?: string;
  }

  interface SignInParameters {
    username: string;
    password: string;
  }

  interface OktaAuth {
    new(params: OktaAuthParams): OktaAuth;
    signIn: (params: SignInParameters) => any;
  }

  const OktaAuth: OktaAuth;
  export = OktaAuth;
}