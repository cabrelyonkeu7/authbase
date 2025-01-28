export type OAuthProviderConfig = {
    name: string;
    clientId: string;
    clientSecret: string;
    authorizeUrl?: string;
    tokenUrl?: string;
    userInfoUrl?: string;
    redirectUrl?: string;
    scopes?: string[];   
};

export type AuthBaseClientConfig = {
  apiLoginUrl: string;
  apiRegisterUrl: string;
  enable2FA?: boolean;
  enableBiometrics?: boolean;
  oauthProviders?: OAuthProviderConfig[];
};

export class AuthBaseClient {
    private apiLoginUrl: string;
    private apiRegisterUrl: string;
    private enable2FA: boolean;
    private enableBiometrics: boolean;
    private oauthProviders: OAuthProviderConfig[];
    private token: string | null = null;

    constructor(config: AuthBaseClientConfig) {
      this.apiLoginUrl = config.apiLoginUrl;
      this.apiRegisterUrl = config.apiRegisterUrl;
      this.enable2FA = config.enable2FA || false;
      this.enableBiometrics = config.enableBiometrics || false;
      this.oauthProviders = config.oauthProviders || [];
    }

    getToken() {
      return this.token;
    }

    setToken(token: string) {
      this.token = token;
    }
}