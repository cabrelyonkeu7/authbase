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

    getApiLoginUrl(): string {
      return this.apiLoginUrl;
    }

    getApiRegisterUrl(): string {
      return this.apiRegisterUrl;
    }

    getEnable2FA(): boolean {
      return this.enable2FA;
    }

    getEnableBiometrics(): boolean {
      return this.enableBiometrics;
    }

    getOauthProviders(): OAuthProviderConfig[] {
      return this.oauthProviders;
    }

    getToken(): string | null {
      return this.token;
    }

    setApiLoginUrl(url: string): void {
      this.apiLoginUrl = url;
    }

    setApiRegisterUrl(url: string): void {
      this.apiRegisterUrl = url;
    }

    setEnable2FA(enable: boolean): void {
      this.enable2FA = enable;
    }

    setEnableBiometrics(enable: boolean): void {
      this.enableBiometrics = enable;
    }

    setOauthProviders(providers: OAuthProviderConfig[]): void {
      this.oauthProviders = providers;
    }

    setToken(token: string): void {
      this.token = token;
    }
}