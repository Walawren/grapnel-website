import * as React from 'react';
import * as Nullable from './nullableTypes';

interface RedirectParameters {
  sessionToken: string;
}

interface AuthProp {
  isAuthenticated: () => Nullable.bool;
  logout: () => void;
  login: () => void;
  redirect: (params: RedirectParameters) => void;
}

export interface AuthState {
  authenticated: Nullable.bool;
}

export interface AuthProps {
  auth: AuthProp;
  issuer?: string;
  url: string;
}